import React, { useEffect, useState } from 'react'
import './css/Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { actClearSuccess } from '../../auth/_duck/action';
import Login from '../../auth/login/Login';
import Register from '../../auth/register/Register';
import { Button, message, Alert, Space } from 'antd';

export default function Header(props: any) {
  const dispatch: any = useDispatch();
  const { loading, data, error } = useSelector((state: any) => state.userReducer);
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
      content: 'Success',
    });
  };
  const errorLogin = () => {
    messageApi.open({
      type: 'error',
      content: 'Error',
    });
  };

  useEffect(() => {
    if (data) {
      successLogin()
    }
    else if (error) {
      errorLogin()
    }
  }, [data, error])

  console.log(dataLocal)

  return (
    <>
      {contextHolder}

      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <a className="navbar-brand text-dark" href="#">Instagram</a>

        <button id='btn-menu' className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          {dataLocal ? (
            dataLocalParse.avatar ? (
              <span><img className='w-8 h-8 rounded-circle' src={dataLocalParse.user.avatar} alt="avatar" /></span>
            ) : (
              <span><i className="far fa-user-circle mr-2 text-dark text-l"></i></span>
            )
            // <span><img className='w-8 h-8 rounded-circle' src="https://cdn.dribbble.com/users/3495372/screenshots/7137410/media/44410f9a2a5a4225d1677a57b16dc924.png?resize=768x576&vertical=center" alt="avatar" /></span>
          ) : (
            <span><i className="fa fa-bars text-dark" /></span>
          )}
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">

          <ul id='ul-menu-sm' className="navbar-nav rounded px-2">

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