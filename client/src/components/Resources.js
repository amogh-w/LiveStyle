import React from "react";
import { Divider, Paper, Typography } from "@material-ui/core";

const Resources = () => {
  return (
    <div>
      <Paper style={{ margin: "10px", padding: "10px" }}>
        <Typography variant="h4">Models</Typography>
        <Divider style={{ margin: "10px" }} />
        <Typography variant="p">
          <b>Convolutional Neural Network #1 VGG 19</b>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <img
              src="https://www.researchgate.net/profile/Clifford_Yang/publication/325137356/figure/fig2/AS:670371271413777@1536840374533/llustration-of-the-network-architecture-of-VGG-19-model-conv-means-convolution-FC-means.jpg"
              alt="ReactLogo"
              style={{ width: "400px" }}
            />
          </div>
          <br />
          <br />
          VGG-19 is a convolutional neural network that is 19 layers deep. You
          can load a pretrained version of the network trained on more than a
          million images from the ImageNet database. The pretrained network can
          classify images into 1000 object categories, such as keyboard, mouse,
          pencil, and many animals. As a result, the network has learned rich
          feature representations for a wide range of images.
          <br />
          <br />
          <b>
            Convolutional Neural Network #2 Inception-v3 + MobileNet-v2
            Distillation
          </b>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <img
              src="https://cloud.google.com/tpu/docs/images/inceptionv3onc--oview.png"
              alt="ReactLogo"
              style={{ width: "400px" }}
            />
          </div>
          <br />
          <br />
          Inception-v3 is a convolutional neural network that is 48 layers deep.
          The pretrained network can classify images into 1000 object
          categories, such as keyboard, mouse, pencil, and many animals. As a
          result, the network has learned rich feature representations for a
          wide range of images. The model itself is made up of symmetric and
          asymmetric building blocks, including convolutions, average pooling,
          max pooling, concats, dropouts, and fully connected layers. Batchnorm
          is used extensively throughout the model and applied to activation
          inputs. Loss is computed via Softmax. ImageNet has over ten million
          URLs of labeled images. About a million of the images also have
          bounding boxes specifying a more precise location for the labeled
          objects.
          <br />
          <br />
          <b>Convolutional Neural Network #3 CycleGAN</b>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20200529210740/cycleconsistencyandlosses.PNG"
              alt="ReactLogo"
              style={{ width: "400px" }}
            />
          </div>
          <br />
          <br />
          The CycleGAN is a technique that involves the automatic training of
          image-to-image translation models without paired examples. The models
          are trained in an unsupervised manner using a collection of images
          from the source and target domain that do not need to be related in
          any way. This simple technique is powerful, achieving visually
          impressive results on a range of application domains, most notably
          translating photographs of horses to zebra, and the reverse. CycleGAN
          has been demonstrated on a range of applications including season
          translation, object transfiguration, style transfer, and generating
          photos from paintings. Image-to-image translation is a class of vision
          and graphics problems where the goal is to learn the mapping between
          an input image and an output image using a training set of aligned
          image pairs. However, for many tasks, paired training data will not be
          available. CycleGAN presents an approach for learning to translate an
          image from a source domain X to a target domain Y in the absence of
          paired examples.
        </Typography>
      </Paper>
    </div>
  );
};

export default Resources;
