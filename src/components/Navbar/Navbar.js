import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';
import UserIcon from './UserIcon';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li className="dropdown">
            <Link to="#">Các tổ chức</Link>
            <div className="dropdown-content">
              <Link to="/about">Giới thiệu</Link><br/>
              <Link to="/featured-projects">Dự án nổi bật</Link><br/>
              <Link to="/achievements">Thành tựu</Link>
            </div>
          </li>
          <li>
            <Link to="/stats">Thống kê</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Quyên góp</Link>
            <div className="dropdown-content">
              <Link to="/donate/online">Trực tuyến</Link><br/>
              <Link to="/donate/offline">Trực tiếp</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link to="#">Liên hệ</Link>
            <div className="dropdown-content">
              <Link to="/faq">Câu hỏi thường gặp</Link><br/>
              <Link to="/support">Hỗ trợ trực tuyến</Link>
            </div>
          </li>
        </ul>
        <UserIcon className="avatar"/>
      </div>
    </nav>
  );
}

export default Navbar;
