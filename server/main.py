from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware
from PIL import Image
import base64
import io
import os
import numpy as np
import tensorflow as tf
import tensorflow_hub as hub

app = FastAPI(root_path="/api/")
app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_headers=["*"], allow_methods=["*"],
)

# loading hub module
hub_module = hub.load(
    "https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/1"
)


def tensor_to_image(tensor):
    tensor = tensor * 255
    tensor = np.array(tensor, dtype=np.uint8)
    if np.ndim(tensor) > 3:
        assert tensor.shape[0] == 1
        tensor = tensor[0]
    return Image.fromarray(tensor)


def load_img(path_to_img):
    max_dim = 512
    img = tf.io.read_file(path_to_img)
    img = tf.image.decode_image(img, channels=3)
    img = tf.image.convert_image_dtype(img, tf.float32)

    shape = tf.cast(tf.shape(img)[:-1], tf.float32)
    long_dim = max(shape)
    scale = max_dim / long_dim

    new_shape = tf.cast(shape * scale, tf.int32)

    img = tf.image.resize(img, new_shape)
    img = img[tf.newaxis, :]
    return img


@app.post("/style")
async def create_file(content_file: bytes = File(...), style_file: bytes = File(...)):
    content_image = Image.open(io.BytesIO(content_file))
    style_image = Image.open(io.BytesIO(style_file))
    content_image.save("content.png")
    style_image.save("style.png")
    content_image = load_img("./content.png")
    style_image = load_img("./style.png")
    os.remove("content.png")
    os.remove("style.png")
    stylized_image = hub_module(tf.constant(content_image), tf.constant(style_image))[0]
    buffered = io.BytesIO()
    tensor_to_image(stylized_image).save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue())
    return {"stylized_image": img_str}
