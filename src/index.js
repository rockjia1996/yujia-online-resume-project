import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./stylesheets/normalize.css";
import "./stylesheets/color.css";
import "./stylesheets/animations.css";
import "./stylesheets/snap-layout.css";
import "./stylesheets/timeline.css";
import "./stylesheets/home.css";
import "./stylesheets/profile.css";
import "./stylesheets/education.css";
import "./stylesheets/work.css";
import "./stylesheets/skills.css";
import "./stylesheets/projects.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
