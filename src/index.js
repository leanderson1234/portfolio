import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Projetos from './routes/projetos'
import { BrowserRouter,
  Routes,
  Route,
   } 
  from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />} >
      <Route path="projetos-web" element={<Projetos type="web" />} />
      <Route path="projetos-mobile" element={<Projetos type="mobile" />} />
    </Route>
    {/* <Route path="invoices" element={<Invoices />} /> */}
   </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
