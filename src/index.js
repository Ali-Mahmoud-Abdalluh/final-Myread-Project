import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter  basename="/nd0191-c1-myreads">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
