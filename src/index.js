import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';

import { Navbar } from './components/Navbar';
import { HomePage } from './pages/homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
