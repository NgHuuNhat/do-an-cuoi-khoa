import React from 'react'
import './css/Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actClearSuccess } from '../../auth/_duck/action';

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
      {/* Brand */}
      <a className="navbar-brand" href="#">Navbar</a>
      {/* Toggler/collapsibe Button */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav w-100">
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link" href="#">Service</a>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item d-flex align-items-center">
            <a className="nav-link" href="#">Contact</a>
          </li>
          {data ? (
            <div className="dropdown ml-auto">
              <button type="button" className="m-sm-auto btn dropdown-toggle d-flex align-items-center" data-toggle="dropdown" style={{ boxShadow: 'none' }}>
                <img className='w-10 h-10 rounded-circle' src="https://cdn.dribbble.com/users/3495372/screenshots/7137410/media/44410f9a2a5a4225d1677a57b16dc924.png?resize=768x576&vertical=center" alt="Avatar" />
              </button>
              <div className="dropdown-menu dropdown-menu-md text-sm-center">
                <a className="dropdown-item" href="#">{data?.user?.name}</a>
                <a className="dropdown-item" href="#" onClick={handleLogout}>Đăng xuất</a>
              </div>
            </div>
          ) : (
            <li className="nav-item ml-auto">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}