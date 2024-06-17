import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Nav from './Nav';
import Registration from './Registration';
import {Academics, AcademicsIndex} from './Academics'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vt0FtpYcOn1z9hxG7zw0fUcKYOul9nTQLqvxXgZvlqWgAQWs3E1nrgR2KPVgTCqzF86" element={<Registration />} />
      <Route path="/academics" element={<Academics />}>
        <Route index element={<AcademicsIndex />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
