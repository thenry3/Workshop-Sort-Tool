import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";

import ToolPage from "./pages/Toolpage";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";

ReactDOM.render(
  <>
    <Router>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={ToolPage}></Route>
      <Route path="/about" component={AboutPage}></Route>
    </Router>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
