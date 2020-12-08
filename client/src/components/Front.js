import React, { useState, useCallback } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardMedia,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
} from "@material-ui/core";
// import Loader from "./spinnerScreen";
import FileUpload from "../components/FileUpload";

const Front = () => {
  const [contentFile, contentFileHandle] = useState([]);
  const [styleFile, styleFileHandle] = useState([]);
  const [output, setOutput] = useState("");
  const [output2, setOutput2] = useState("");
  const [output3, setOutput3] = useState("");
  const [contentOut, setContentOut] = useState("");
  const [styleOut, setStyleOut] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleContentFileChange = useCallback(
    (e) => contentFileHandle(e.target.files[0]),
    []
  );
  const handleStyleFileChange = useCallback(
    (e) => styleFileHandle(e.target.files[0]),
    []
  );

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onStart = async () => {
    let url = "/api/style";
    let formData = new FormData();

    formData.append("content_file", contentFile);
    formData.append("style_file", styleFile);

    console.log(formData);

    // const config = {
    //   headers: { "content-type": "multipart/form-data" },
    // };

    // setLoading(true);

    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setOutput(data.stylized_image);
        setOutput2(data.stylized_image2);
        setOutput3(data.stylized_image3);
      });
    toBase64(contentFile).then((result) => {
      setContentOut(result);
    });
    toBase64(styleFile).then((result) => {
      setStyleOut(result);
    });
  };

  // const onReset = () => {
  //   window.location.reload(true);
  // };

  return (
    // <React.Suspense fallback={<Loader loading={true} />}>
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} align="center">
          <Typography>Select Content</Typography>
          <FileUpload
            file={contentFile}
            handleFileChange={handleContentFileChange}
          />
        </Grid>
        <Grid item xs={12} align="center" style={{ paddingBottom: "50px" }}>
          <Typography>Select Style</Typography>
          <FileUpload
            file={styleFile}
            handleFileChange={handleStyleFileChange}
          />
          <br />
          {/* <FormControl style={{ width: "50%" }}>
            <InputLabel>Select Model</InputLabel>
            <Select>
              <MenuItem value={1}>Model #1</MenuItem>
              <MenuItem value={2}>Model #2</MenuItem>
              <MenuItem value={3}>Model #3</MenuItem>
            </Select>
          </FormControl> */}
          <br />
          <Button
            onClick={onStart}
            style={{ marginTop: "20px" }}
            variant="contained"
          >
            START MAGIC
          </Button>
        </Grid>
      </Grid>
      {output === "" ? (
        <div></div>
      ) : (
        <Paper style={{ margin: "20px", padding: "20px" }}>
          <Grid
            container
            spacing={4}
            direction="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardMedia component="img" src={contentOut} />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardMedia component="img" src={styleOut} />
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            direction="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <Typography>VGG 19</Typography>
                <CardMedia
                  component="img"
                  src={"data:image/png;base64," + output}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <Typography>Inception V3</Typography>
                <CardMedia
                  component="img"
                  src={"data:image/png;base64," + output2}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <Typography>GAN</Typography>
                <CardMedia
                  component="img"
                  src={"data:image/png;base64," + output3}
                />
              </Card>
            </Grid>
          </Grid>
        </Paper>
      )}
      {/* <Grid container spacing={2}>
        <Grid item xs={12} align="center" style={{ paddingTop: "50px" }}>
          <Button
            onClick={onReset}
            style={{ marginTop: "20px" }}
            variant="contained"
          >
            Reset
          </Button>
        </Grid>
      </Grid> */}
    </div>
    // </React.Suspense>
  );
};

export default Front;
