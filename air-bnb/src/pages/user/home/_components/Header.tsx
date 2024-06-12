import React from 'react'
import './css/Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { actClearSuccess } from '../../auth/_duck/action';
import Login from '../../auth/login/Login';
import Register from '../../auth/register/Register';

export default function Header(props: any) {
  const dispatch: any = useDispatch();
  const { loading, data, error } = useSelector((state: any) => state.userReducer);
  console.log("data", data)

  const handleLogout = () => {
    localStorage.removeItem('data');
    dispatch(actClearSuccess());
  };

  return (
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
          {data ? (
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLogout}>Đăng xuất</a>
            </li>
          ) : (
            <>
              <Login />
              <Register />
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}