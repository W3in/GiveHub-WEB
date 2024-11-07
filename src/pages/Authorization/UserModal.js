// UserModal.js
import React, { useState } from 'react';
import '../../styles/Authorization.css';
import Login from './Login';
import Register from './Register';
import logo from '../../images/features/logo.png'

function UserModal({ isOpen, onClose }) {
  const [currentTab, setCurrentTab] = useState('login');

  // Đổi tab giữa login và register
  const switchToLogin = () => setCurrentTab('login');
  const switchToRegister = () => setCurrentTab('register');

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        
        {/* Tab điều hướng */}
        <img src={logo} className='login-logo' alt='Logo'/>
        <div className="tab-buttons">
          <button onClick={switchToLogin} className={currentTab === 'login' ? 'active' : ''}>Đăng Nhập</button>
          <button onClick={switchToRegister} className={currentTab === 'register' ? 'active' : ''}>Đăng Ký</button>
        </div>
        
        {/* Hiển thị form dựa trên tab */}
        {currentTab === 'login' ? (
          <Login onClose={onClose} onSwitchToRegister={switchToRegister} />
        ) : (
          <Register onClose={onClose} onSwitchToLogin={switchToLogin} />
        )}
      </div>
    </div>
  );
}

export default UserModal;
