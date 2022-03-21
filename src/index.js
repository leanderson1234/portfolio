import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Projetos from "./routes/projetos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Projetos type="web" />} />
          <Route path="projetos-web" element={<Projetos type="web" />} />
          <Route path="projetos-mobile" element={<Projetos type="mobile" />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
