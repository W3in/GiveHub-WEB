// LoginModal.js
import React, { useState } from 'react';
import '../../styles/Authorization.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import googleLogo from '../../images/features/Google_logo.png';

function LoginModal({ onClose, onSwitchToRegister }) {
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  };

  const validatePhoneNumber = (value) => {
    const phoneRegex = /^(03|05|07|08|09|01[2|6|8|9])[0-9]{8}$/;
    return phoneRegex.test(value);
  };

  const validateInput = (value) => {
    if (validateEmail(value) || validatePhoneNumber(value)) {
      setError('');
      return true;
    } else {
      setError('Vui lòng nhập số điện thoại hoặc email hợp lệ');
      return false;
    }
  };

  const handlePhoneOrEmailChange = (e) => {
    const value = e.target.value;
    setPhoneOrEmail(value);

    if (value === '') {
      setError('');
    } else {
      validateInput(value);
    }
  };

  const handleSendOtp = () => {
    if (validateInput(phoneOrEmail)) {
      setIsOtpVisible(true);
    }
  };

  return (
    <div className="modal-content">
      <button className="close-button" onClick={onClose}>X</button>
      <form>
        <label className='login-text'>Số điện thoại hoặc Email:</label>
        <div className="input-group">
          <input
            type="text"
            placeholder="Số điện thoại hoặc Email"
            value={phoneOrEmail}
            onChange={handlePhoneOrEmailChange}
            className='login-input'
            required
          />
          <button type="button" className="send-otp-button" onClick={handleSendOtp}>
            <FontAwesomeIcon icon={faKey} className="key-icon" />
          </button>
        </div>

        {error && <div style={{ color: 'red', textAlign: 'left', fontSize: 10 }}>{error}</div>}

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

        <p className='login-text'>- Hoặc đăng nhập bằng -</p>
        <button type="button" className="google-login-button">
          <div><img src={googleLogo} alt="google" className='googleLogo'/>Đăng Nhập với Google</div>
        </button>

        <p className='login-text'>
          Chưa có tài khoản? <button type="button" onClick={onSwitchToRegister} className="link-button">Đăng ký ngay!</button>
        </p>
      </form>
    </div>
  );
}

export default LoginModal;
