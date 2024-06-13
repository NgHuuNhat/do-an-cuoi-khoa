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

      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          {dataLocal ? (
            <span><img className='w-8 h-8 rounded-circle' src="https://cdn.dribbble.com/users/3495372/screenshots/7137410/media/44410f9a2a5a4225d1677a57b16dc924.png?resize=768x576&vertical=center" alt="avatar" /></span>
          ) : (
            <span className="navbar-toggler-icon" />
          )}
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">

          <ul className="navbar-nav w-100">

            {/* <span className='px-2'> */}
            <li className="nav-item">
              <a className="nav-link" href="#">Chỗ ở</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Trải nghiệm</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Trải nghiệm trực tuyến</a>
            </li>
            {/* </span> */}

            <hr className='bg-light m-0' />

            {dataLocal ? (
              // <span className='px-2'>
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">{dataLocalParse.user.name}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleLogout}>Đăng xuất</a>
                </li>
              </>
              // </span>
            ) : (
              // <span className='px-2'>
              <>
                <li className="nav-item">
                  <button className="nav-link" data-toggle="modal" data-target="#exampleModalLogin" >Login</button>
                </li>
                <li className="nav-item" >
                  <button className="nav-link" data-toggle="modal" data-target="#exampleModalRegister">Register</button>
                </li>
              </>
              // </span>
            )}
          </ul>
        </div>
        <Login />
        <Register />
      </nav>
    </>
  )
}