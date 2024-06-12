import React, { useEffect, useState } from 'react'
import './css/Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { actClearSuccess } from '../../auth/_duck/action';
import Login from '../../auth/login/Login';
import Register from '../../auth/register/Register';
// import Alert from '../../auth/alert/Alert';
import { Button, message, Alert, Space } from 'antd';

export default function Header(props: any) {
  const dispatch: any = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const { loading, data, error } = useSelector((state: any) => state.userReducer);
  const getData = localStorage.getItem('data')
  console.log(getData)

  const handleLogout = () => {
    localStorage.removeItem('data');
    dispatch(actClearSuccess());
  };

  const successnhat = () => {
    messageApi.open({
      type: 'success',
      content: 'Login success',
    });
  };
  const errornhat = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };

  // {contextHolder}

  // <Space>
  //   {data ? (
  //     <Button onClick={success}>new Success</Button>

  //   ) : (
  //     <Button onClick={error}> new Error</Button>

  //   )}
  // </Space>

  useEffect(() => {
    if (data) {
      successnhat()
    }
    else if (error) {
      errornhat()
    }
  }, [data, error])


  return (
    <>
      {contextHolder}

      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          {data ? (
            <span><img className='w-8 h-8 rounded-circle' src="https://cdn.dribbble.com/users/3495372/screenshots/7137410/media/44410f9a2a5a4225d1677a57b16dc924.png?resize=768x576&vertical=center" alt="avatar" /></span>
          ) : (
            <span className="navbar-toggler-icon" />
          )}
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Chỗ ở</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Trải nghiệm</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Trải nghiệm trực tuyến</a>
            </li>

            {getData ? (
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleLogout}>Đăng xuất</a>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <button className="nav-link" data-toggle="modal" data-target="#exampleModalLogin" >Login</button>
                </li>
                <li className="nav-item" >
                  <button className="nav-link" data-toggle="modal" data-target="#exampleModalRegister">Register</button>
                </li>
              </>
            )}
          </ul>
        </div>


        {/* {data ? ( */}
        {/* <Space>
        {data ? (
          <Button onClick={success}>new Success</Button>

        ) : (
          <Button onClick={error}> new Error</Button>

        )}
      </Space> */}
        {/* ) : (
        <Space>
          <Alert message="Error" type="error" showIcon />
        </Space>
      )} */}



        <Register />
        <Login />
      </nav>
    </>


  )
}