import React from "react";
import { Divider, Paper, Typography } from "@material-ui/core";

const About = () => {
  return (
    <div>
      <Paper style={{ margin: "10px", padding: "10px" }}>
        <Typography variant="h4">Abstract</Typography>
        <Divider style={{ margin: "10px" }} />
        <Typography variant="p">
          As a powerful unsupervised learning method, Generative Adversarial
          Network (GAN) plays an important role in many domains such as video
          prediction and autonomous driving. It is one of the ten breakthrough
          technologies in 2018 reported in MIT Technology
          Review. Adversarial machine learning is a technique employed in the
          field of machine learning which attempts to fool models through
          malicious input. 
          <br />
          <br />
          We attempt to create an algorithmic process and thus implement an
          artificial system in fine arts. Fine art, especially in painting,
          humans have mastered the skill to create unique visual experiences
          through composing a complex interplay between the content and style of
          an image. In areas of visual perception such as object and face
          recognition, there has been extraordinary progress in achieving
          near-human performance by the virtue of Deep Neural Networks. Here we
          introduce an artificial system based on a Deep Neural Network that
          creates artistic images of high perceptual quality. The neural
          algorithm will separate and recombine content and style of arbitrary
          images using neural representations of them, this will create artistic
          images.
          <br />
          <br />
          Our work paves a path to an algorithmic understanding of human nature
          to create artistic imagery and thus has tremendous potential for
          having various applications in different fields.
        </Typography>
      </Paper>
      <Paper style={{ margin: "10px", padding: "10px" }}>
        <Typography variant="h4">Technology</Typography>
        <Divider style={{ margin: "10px" }} />
        <Typography variant="p">
          <b>React (web framework)</b>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"
              alt="ReactLogo"
              style={{ width: "400px" }}
            />
          </div>
          <br />
          <br />
          React (also known as React.js or ReactJS) is an open-source, front
          end, JavaScript library for building user interfaces or UI components.
          It is maintained by Facebook and a community of individual developers
          and companies. React can be used as a base in the development of
          single-page or mobile applications. However, React is only concerned
          with rendering data to the DOM, and so creating React applications
          usually requires the use of additional libraries for state management
          and routing. Redux and React Router are respective examples of such
          libraries.
          <br />
          <br />
          <b>Nodejs</b>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <img
              src="https://img.icons8.com/color/452/nodejs.png"
              alt="ReactLogo"
              style={{ width: "400px" }}
            />
          </div>
          <br />
          <br />
          Node.js is an open-source, cross-platform, back-end, JavaScript
          runtime environment that executes JavaScript code outside a web
          browser. Node.js lets developers use JavaScript to write command line
          tools and for server-side scripting—running scripts server-side to
          produce dynamic web page content before the page is sent to the user's
          web browser. Consequently, Node.js represents a "JavaScript
          everywhere" paradigm, unifying web-application development around a
          single programming language, rather than different languages for
          server- and client-side scripts.
          <br />
          <br />
          <b>Tensorflow</b>
          <br />
          <br />{" "}
          <div style={{ textAlign: "center" }}>
            <img
              src="https://cdn.freelogovectors.net/wp-content/uploads/2018/07/tensorflow-logo.png"
              alt="ReactLogo"
              style={{ width: "400px" }}
            />
          </div>
          <br />
          <br />
          TensorFlow is a free and open-source software library for machine
          learning. It can be used across a range of tasks but has a particular
          focus on training and inference of deep neural networks. Tensorflow is
          a symbolic math library based on dataflow and differentiable
          programming. It is used for both research and production at Google.
          TensorFlow was developed by the Google Brain team for internal Google
          use. It was released under the Apache License 2.0 in 2015.
        </Typography>
      </Paper>
    </div>
  );
};

export default About;
