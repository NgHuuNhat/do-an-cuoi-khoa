import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/user/home/trang-chu/TrangChu';
import IndexAdmin from './pages/admin';
import IndexUser from './pages/user';
import DanhSachPhong from './pages/user/home/danh-sach-phong/DanhSachPhong';
import ChiTietPhong from './pages/user/home/chi-tiet-phong/ChiTietPhong';
import TrangChu from './pages/user/home/trang-chu/TrangChu';
import ThongTinCaNhan from './pages/user/home/thong-tin-ca-nhan/ThongTinCaNhan';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<IndexUser />}>
          <Route path="/" element={<TrangChu />} />
          <Route path="/phong-thue/:tinhThanh/:tenViTri/:id" element={<DanhSachPhong />} />
          <Route path="/phong-thue/:id" element={<ChiTietPhong />} />
          <Route path="/thong-tin-ca-nhan" element={<ThongTinCaNhan />} />
        </Route>


        <Route path="/admin" element={<IndexAdmin />} />

      </Routes>
    </Router>
  );
}

export default App;