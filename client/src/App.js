import React from "react";
import Container from "@material-ui/core/Container";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Route from "react-router-dom/Route";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loader from "./components/spinnerScreen";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import lightBlue from "@material-ui/core/colors/lightBlue";
import deepPurple from "@material-ui/core/colors/deepPurple";
import deepOrange from "@material-ui/core/colors/deepOrange";

const Navbar = React.lazy(() =>
  import(/* webpackChunkName: "Navbar" */ "./components/Navbar")
);
const Front = React.lazy(() =>
  import(/* webpackChunkName: "Navbar" */ "./components/Front")
);
const Resources = React.lazy(() =>
  import(/* webpackChunkName: "Resources" */ "./components/Resources")
);
const About = React.lazy(() =>
  import(/* webpackChunkName: "About" */ "./components/About")
);

const App = () => {
  const [darkState, setDarkState] = React.useState(
    window.localStorage.getItem("darkMode") === "true" ? true : false
  );

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const handleThemeChange = () => {
    const preference = darkState;
    setDarkState(!darkState);
    window.localStorage.setItem("darkMode", !preference);
  };

  return (
    <React.Suspense fallback={<Loader loading={true} />}>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Navbar darkState={darkState} handleThemeChange={handleThemeChange} />
          <Container>
            <div style={{ padding: "10px", marginTop: "80px" }}>
              <Route path="/" exact component={Front} />
              <Route path="/resources" component={Resources} />
              <Route path="/about" component={About} />
            </div>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
