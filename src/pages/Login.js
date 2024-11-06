// components/LoginModal.js
import React, { useState } from 'react'; // Import useState
import '../styles/Login.css'; // Nhập file CSS cho style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons'; // Import biểu tượng khóa
import googleLogo from '../images/features/Google_logo.png';

function LoginModal({ isOpen, onClose }) {
  // Đặt các hooks ở đầu component, không điều kiện hóa
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [otp, setOtp] = useState('');

  // Nếu không mở, không render gì cả
  if (!isOpen) return null;

  const handleSendOtp = () => {
    setIsOtpVisible(true); // Hiện hộp thoại nhập OTP
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Đóng hộp thoại khi nhấn vào overlay
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Đăng Nhập</h2>
        <form>
          <label className='login-text'>Số điện thoại hoặc Email:</label>
          <div className="input-group">
            <input
              type="text"
              placeholder="Số điện thoại hoặc Email"
              value={phoneOrEmail}
              onChange={(e) => setPhoneOrEmail(e.target.value)}
              className='login-input'
              required
            />
            <button type="button" className="send-otp-button" onClick={handleSendOtp}>
              <FontAwesomeIcon icon={faKey} className="key-icon" />
            </button>
          </div>

          <div className={`otp-input-container ${isOtpVisible ? 'show' : ''}`}>
            <input
              className="otp-input"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Nhập OTP"
              required
            />
          </div>

          <a href="/forget" className='forget'>Quên số điện thoại/email?</a>

          <button type="submit" className='submit'>Đăng Nhập</button>

          <p style={{ marginTop: '20px', textAlign: 'center' }} className='login-text'>- Hoặc đăng nhập bằng -</p>
          <button type="button" className="google-login-button"><div><img src={googleLogo} alt="google" className='googleLogo'/>Đăng Nhập với Google</div></button>

          <p style={{ marginTop: '20px', textAlign: 'center' }} className='login-text'>
            Chưa có tài khoản? <a href="/signup" className='signup'>Đăng ký ngay!</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
