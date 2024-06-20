import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/user/home/trang-chu/home';
import IndexAdmin from './pages/admin';
import IndexUser from './pages/user';
import DanhSachPhong from './pages/user/home/danh-sach-phong/DanhSachPhong';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexUser />}>
          <Route path="/" element={<Home />} />
          <Route path="/phong-thue/:tinhThanh/:tenViTri/:id" element={<DanhSachPhong />} />
        </Route>

        <Route path="/admin" element={<IndexAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;