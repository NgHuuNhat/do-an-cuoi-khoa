import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/user/home/trang-chu/home';
import IndexAdmin from './pages/admin';
import IndexUser from './pages/user';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexUser />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/admin" element={<IndexAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;