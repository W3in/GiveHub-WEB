// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar/Navbar'; // Đảm bảo đường dẫn đúng
import Footer from './Footer'; // Nếu có footer riêng
import logo from '../images/features/mess.png'
import '../styles/Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
        <div className="content">{children}</div>
        <a href='https://m.me/hmfuocc' className='mess'><img src={logo} alt='messenger' /></a>
      <Footer />
    </div>
  );
}

export default Layout;
