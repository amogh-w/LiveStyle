import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Front from "./components/Front";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <div style={{ padding: "10px", marginTop: "80px" }}>
          <Route path="/" exact component={Front} />
        </div>
      </Container>
    </Router>
  );
}

export default App;
