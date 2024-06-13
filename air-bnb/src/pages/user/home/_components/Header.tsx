import React, { useEffect, useState } from 'react'
import './css/Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { actClearSuccess } from '../../auth/_duck/action';
import Login from '../../auth/login/Login';
import Register from '../../auth/register/Register';
import { message } from 'antd';

export default function Header(props: any) {
  const dispatch: any = useDispatch();
  const { data, error } = useSelector((state: any) => state.userReducer);
  const dataLocal = localStorage.getItem('data');
  const dataLocalParse = dataLocal ? JSON.parse(dataLocal) : null;
  const [messageApi, contextHolder] = message.useMessage();


  const handleLogout = () => {
    localStorage.removeItem('data');
    dispatch(actClearSuccess());
  };

  const successLogin = () => {
    messageApi.open({
      type: 'success',
      content: 'Đăng nhập thành công',
    });
  };
  const errorLogin = () => {
    messageApi.open({
      type: 'error',
      content: 'Email hoặc mật khẩu không đúng',
    });
  };

  const successRegister = () => {
    messageApi.open({
      type: 'success',
      content: 'Đăng ký thành công',
    });
  };
  const errorRegister = () => {
    messageApi.open({
      type: 'error',
      content: 'Email đã tồn tại !',
    });
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const isRegister = localStorage.getItem("isRegister");

    if (data) {
      if (isLogin === "true") {
        successLogin();
      } else if (isRegister === "true") {
        successRegister();
      }
      localStorage.removeItem("isLogin");
      localStorage.removeItem("isRegister");
    } else {
      if (error?.response?.data?.content === 'Email hoặc mật khẩu không đúng !') {
        errorLogin();
      } else if (error?.response?.data?.content === 'Email đã tồn tại !') {
        errorRegister();
      }
    }
  }, [data, error, dataLocal]);

  return (
    <>
      {contextHolder}

      <nav id='header' className="navbar navbar-expand-md navbar-dark fixed-top py-0">
        <a id='logo' className="navbar-brand text-dark" href="#">AirBnb</a>

        <button id='btn-menu' className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          {dataLocal ? (
            dataLocalParse.avatar ? (
              <span><img className='w-8 h-8 rounded-circle' src={dataLocalParse.user.avatar} alt="avatar" /></span>
            ) : (
              <span><i className="far fa-user-circle mr-2 text-dark text-l"></i></span>
            )
          ) : (
            <span><i className="fa fa-bars text-dark" /></span>
          )}
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">

          <ul id='ul-menu' className="navbar-nav rounded px-2 ml-auto">

            <li className="nav-item d-flex align-items-center">
              {/* <span className='w-7'><i className="fa-solid fa-house"></i></span> */}
              <a className="nav-link text-dark" href="#">Chỗ ở</a>
            </li>
            <li className="nav-item d-flex align-items-center">
              {/* <span className='w-7'><i className="fa-solid fa-house"></i></span> */}
              <a className="nav-link text-dark" href="#">Trải nghiệm</a>
            </li>
            <li className="nav-item d-flex align-items-center">
              {/* <span className='w-7'><i className="fa-solid fa-house"></i></span> */}
              <a className="nav-link text-dark" href="#">Trải nghiệm trực tuyến</a>
            </li>

          </ul>

          <ul id='ul-profile' className="navbar-nav rounded px-2 ml-auto">
            {dataLocal ? (
              <>
                <li className="nav-item d-flex align-items-center">
                  {dataLocalParse.avatar ? (
                    <span className='w-7'><img className='w-5 h-5 rounded-circle' src={dataLocalParse.user.avatar} alt="avatar" /></span>
                  ) : (
                    <span><i className="far fa-user-circle mr-2 text-dark"></i></span>
                  )}
                  <a className="nav-link w-100 text-dark" href="#">{dataLocalParse.user.name}</a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <span className='w-7'><i className="fa fa-sign-out mr-2"></i></span>
                  <a className="nav-link w-100 text-dark" href="#" onClick={handleLogout}>Đăng xuất</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="nav-link text-dark btn-profile-sm" data-toggle="modal" data-target="#exampleModalLogin" >Login</button>
                </li>
                <li className="nav-item" >
                  <button className="nav-link text-dark btn-profile-sm" data-toggle="modal" data-target="#exampleModalRegister">Register</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav >
      <Login />
      <Register />
    </>
  )
}