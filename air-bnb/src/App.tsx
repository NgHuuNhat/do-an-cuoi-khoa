import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexUser from './pages/user';
import Home from './pages/user/home';
import Login from './pages/user/auth/Login';
import Register from './pages/user/auth/Register';
import IndexAdmin from './pages/admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user */}
        <Route path="/" element={<IndexUser />}>
          <Route path="/" element={<Home />} />
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        {/* admin */}
        <Route path="/admin" element={<IndexAdmin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
