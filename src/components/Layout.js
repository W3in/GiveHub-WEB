// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar/Navbar'; // Đảm bảo đường dẫn đúng
import Footer from './Footer'; // Nếu có footer riêng

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
        <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
