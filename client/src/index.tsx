import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";

import ToolPage from "./pages/Toolpage";

ReactDOM.render(
  <>
    <Router>
      <Route exact path="/" component={ToolPage}></Route>
    </Router>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
