import React, { useEffect, useState } from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { actClearSuccess } from '../../../../../store/store-trang-chu/user-reducer/action';
import Login from '../../../auth/login/Login';
import Register from '../../../auth/register/Register';
import { message } from 'antd';
import { NavLink } from 'react-router-dom';

export default function Header(props: any) {
  const dispatch: any = useDispatch();
  const { data, error } = useSelector((state: any) => state.userReducer);
  const dataLocal = localStorage.getItem('data');
  const dataLocalParse = dataLocal ? JSON.parse(dataLocal) : null;
  const [messageApi, contextHolder] = message.useMessage();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

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

  const toggleMenu = () => {
    setShowMenu(true);
    setShowProfile(false);
  };

  const toggleProfile = () => {
    setShowMenu(false);
    setShowProfile(true);
  };

  return (
    <>
      {contextHolder}

      <nav id='header' className="navbar navbar-expand-md navbar-dark">

        <button id='btn-menu' onClick={toggleMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
          <span><i className="fa fa-bars" /></span>
        </button>

        <div id='logo' className='d-flex'>
          <NavLink to="/"><img id='logo-img' className='w-10' src="https://demo4.cybersoft.edu.vn/static/media/airbnb-1.aabeefedaf30b8c7011a022cdb5a6425.svg" alt="logo" /></NavLink>
          <NavLink className="navbar-brand text-dark" to="/">airbnb</NavLink>
        </div>

        <div id='menu-lg' className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item d-flex align-items-center">
              <a className="active-menu nav-link text-dark w-100" href="#">Chỗ ở</a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a className="nav-link text-dark w-100" href="#">Trải nghiệm</a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a className="nav-link text-dark w-100" href="#">Trải nghiệm trực tuyến</a>
            </li>
          </ul>
        </div>

        <button id='btn-profile' onClick={toggleProfile} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#profile">
          {dataLocal ? (
            dataLocalParse.avatar ? (
              <span><img className='w-8 h-8 rounded-circle' src={dataLocalParse.user.avatar} alt="avatar" /></span>
            ) : (
              <span><i className="far fa-user-circle text-l"></i></span>
            )
          ) : (
            <span><i className="far fa-user-circle text-l"></i></span>
          )}
        </button>
      </nav >

      <div id="menu" className="bg-light collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item d-flex align-items-center">
            <a className="active-menu-sm nav-link text-dark w-100 active-li-menu" href="#">Chỗ ở</a>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link text-dark w-100" href="#">Trải nghiệm</a>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link text-dark w-100" href="#">Trải nghiệm trực tuyến</a>
          </li>
        </ul>
      </div>
      <div id="profile" className="bg-light rounded collapse">
        <ul className="navbar-nav">
          {dataLocal ? (
            <>
              <li className="nav-item d-flex align-items-center">
                <NavLink className="rounded nav-link w-100 text-dark" to="/thong-tin-ca-nhan">
                  {dataLocalParse.avatar ? (
                    <span className='w-7'><img className='w-5 h-5 rounded-circle' src={dataLocalParse.user.avatar} alt="avatar" /></span>
                  ) : (
                    <span><i className="far fa-user-circle mr-2"></i></span>
                  )}
                  {dataLocalParse.user.name}
                </NavLink>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="rounded nav-link w-100 text-dark" href="#" onClick={handleLogout}><span className='w-7'><i className="fa fa-sign-out mr-2"></i></span>Đăng xuất</a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="rounded nav-link text-dark" data-toggle="modal" data-target="#exampleModalLogin">Đăng nhập</a>
              </li>
              <li className="nav-item" >
                <a className="rounded nav-link text-dark" data-toggle="modal" data-target="#exampleModalRegister">Đăng ký</a>
              </li>
            </>
          )}
        </ul>
      </div>

      <Login />
      <Register />
    </>
  )
}