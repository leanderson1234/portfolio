import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Projetos from "./routes/projetos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Projetos type="web" />} />
        <Route path="projetos-web" element={<Projetos type="web" />} />
        <Route path="projetos-mobile" element={<Projetos type="mobile" />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
