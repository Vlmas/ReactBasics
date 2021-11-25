import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './components/header/Header';
import About from './components/about/About';
import Albums from './components/albums/Albums';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);