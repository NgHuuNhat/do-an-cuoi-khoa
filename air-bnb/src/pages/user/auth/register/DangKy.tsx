import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/DangKy.css';
import DangKyForm from './DangKyForm';

export default function DangKy() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    // Navigate back to previous page when closing
    navigate(-1);
  };

  const handleLoginClick = () => {
    toggleVisibility();
    setTimeout(() => {
      navigate('/login'); // Navigate to register page
    }, 0);
  };

  return (
    <div className={`dangnhap-container ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Nội dung của trang Nhat */}
      <button className="close-button" onClick={toggleVisibility}>Close</button>
      <DangKyForm />
      <button type="submit" className="btn btn-primary position-absolute bottom-10 bg-light text-primary" onClick={handleLoginClick}>Đăng nhập</button>
    </div>
  );
}
