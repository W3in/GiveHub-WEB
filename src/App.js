// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { routes } from './pages'; // Nhập routes từ index.js

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/" />} /> {/* Chuyển hướng bất kỳ URL không xác định đến Home */}
      </Routes>
    </Router>
  );
}

export default App;
