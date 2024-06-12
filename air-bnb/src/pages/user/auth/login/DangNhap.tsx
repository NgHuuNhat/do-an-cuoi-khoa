// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "./css/DangNhap.css";
// import DangNhapForm from "./DangNhapForm";

// export default function DangNhap() {
//   const navigate = useNavigate();
//   const [isVisible, setIsVisible] = useState(true);

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//     navigate(-1);
//   };

//   const handleRegisterClick = () => {
//     toggleVisibility();
//     setTimeout(() => {
//       navigate("/register"); // Navigate to register page
//     }, 0);
//   };

//   return (
//     <div className={`dangnhap-container ${isVisible ? "visible" : "hidden"}`}>
//       {/* Nội dung của trang Nhat */}
//       <button className="close-button" onClick={toggleVisibility}>
//         Close
//       </button>
//       <DangNhapForm />
//       <button
//         type="submit"
//         className="btn btn-primary position-absolute bottom-10 bg-light text-primary"
//       >
//         <NavLink className="nav-link" to="/register">
//           Tạo tài khoản mới
//         </NavLink>
//       </button>
//     </div>
//   );
// }
