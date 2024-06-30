import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexHome from "./pages/user";
import Home from "./pages/user/home/Home";
import Login from "./pages/user/auth/Login";
import Register from "./pages/user/auth/Register";
import IndexAdmin from "./pages/admin";
import QuanLyNguoiDung from "./pages/admin/AdminLayout/QuanLyNguoiDung/QuanLyNguoiDung";
import QuanLyPhong from "./pages/admin/AdminLayout/QuanLyPhong/QuanLyPhong";
import QuanLyViTri from "./pages/admin/AdminLayout/QuanLyViTri/QuanLyViTri";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user */}
        <Route path="/" element={<IndexHome />}>
          <Route path="/" element={<Home />} />
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        {/* admin */}
        <Route path="/admin" element={<IndexAdmin />} >
        <Route path="/admin/QuanLyNguoiDung" element={<QuanLyNguoiDung />} />
        <Route path="/admin/QuanLyPhong" element={<QuanLyPhong />} />
        <Route path="/admin/QuanLyThongTin" element={<QuanLyViTri />} />
        </Route>
        
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
