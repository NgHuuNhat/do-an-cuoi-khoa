// app.tsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/user/home';
import DangNhap from './pages/user/auth/login/DangNhap';
import DangKy from './pages/user/auth/register/DangKy';
import IndexAdmin from './pages/admin';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginOverlay />} />
          <Route path="/register" element={<RegisterOverlay />} />
          <Route path="/admin" element={<IndexAdmin />} />
        </Routes>
    </Router>
  );
}

export default App;

// Component để hiển thị Login đè lên Home
const LoginOverlay = () => (
  <div>
    <Home />
    <DangNhap />
  </div>
);

// Component để hiển thị Register đè lên Home
const RegisterOverlay = () => (
  <div>
    <Home />
    <DangKy />
  </div>
);