from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware
from PIL import Image
import PIL
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
    style_image2 = Image.open(io.BytesIO(style_file))
    style_image3 = Image.open(io.BytesIO(style_file))
    content_image.save("content.png")
    angle = 90
    style_image.save("style.png")
    PIL.ImageEnhance.Color(style_image2).enhance(0.5).rotate(angle, expand=True).save(
        "style2.png"
    )
    PIL.ImageEnhance.Color(style_image3).enhance(1.5).rotate(
        -1 * angle, expand=True
    ).save("style3.png")
    content_image = load_img("./content.png")
    style_image = load_img("./style.png")
    style_image2 = load_img("./style2.png")
    style_image3 = load_img("./style3.png")
    os.remove("content.png")
    os.remove("style.png")
    os.remove("style2.png")
    os.remove("style3.png")
    stylized_image = hub_module(tf.constant(content_image), tf.constant(style_image))[0]
    stylized_image2 = hub_module(tf.constant(content_image), tf.constant(style_image2))[
        0
    ]
    stylized_image3 = hub_module(tf.constant(content_image), tf.constant(style_image3))[
        0
    ]
    buffered = io.BytesIO()
    buffered2 = io.BytesIO()
    buffered3 = io.BytesIO()
    tensor_to_image(stylized_image).save(buffered, format="PNG")
    tensor_to_image(stylized_image2).save(buffered2, format="PNG")
    tensor_to_image(stylized_image3).save(buffered3, format="PNG")
    img_str = base64.b64encode(buffered.getvalue())
    img_str2 = base64.b64encode(buffered2.getvalue())
    img_str3 = base64.b64encode(buffered3.getvalue())
    return {
        "stylized_image": img_str,
        "stylized_image2": img_str2,
        "stylized_image3": img_str3,
    }
