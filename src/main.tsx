import React from 'react';
import { render } from "react-dom";
import { App } from "./app";
import "./index.css";

const el = document.getElementById("app");
if (el) {
  render(<App />, el);
}
