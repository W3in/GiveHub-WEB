// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Đảm bảo đường dẫn đúng
import { Link } from 'react-router-dom';
import logo from  '../images/features/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className='top-footer'>
        <img src={logo} alt='logo' className='logo'/>
        <p>Nền tảng gây quỹ cộng đồng trực tuyến<br/>
        tiện lợi, tin cậy và minh bạch.</p>
        <div></div>
      </div>
      <hr style={{ width: '99%', borderColor: 'black', borderWidth: '1px', borderStyle: 'solid' }} />
      <div className='footer-link'>
        <Link to={'/'} className='link'>Trang chủ</Link>
        <span>&nbsp;・&nbsp;</span>
        <Link to={'/about'} className='link'>Giới thiệu</Link>
        <span>&nbsp;・&nbsp;</span>
        <Link to={'/term'} className='link'>Điều khoản</Link>
        <span>&nbsp;・&nbsp;</span>
        <Link to={'/faq'} className='link'>FAQs</Link>
      </div>
      <div className='footer-info'>
        <div className='link'>
          <div className='link-container'>
            <FontAwesomeIcon icon={faMobileScreen}/>
            <span>&nbsp;Hotline: <a href='tel:+84384449268'>0366558899.</a></span>
          </div>
          <div className='link-container'>
            <FontAwesomeIcon icon={faEnvelope}/>
            <span>&nbsp;Email: <a href='mailto:winnerhuynh1234@gmail.com'>hotline@givehub.vn.</a></span>
          </div>
          <div className='link-container'>
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>&nbsp;Địa chỉ: <a href='https://maps.app.goo.gl/qEVTkp3G8CizxpBA6' target="_blank" rel="noopener noreferrer">Khu phố 6, Linh Trung, Thành phố Thủ Đức.</a></span>
          </div>
        </div>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2312404166823!2d106.80047917373264!3d10.870008889284506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1731048715997!5m2!1svi!2s" 
            width="200" 
            height="200"  
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade" 
            name="map" 
            className="footer-map"
            title="Bản đồ vị trí công ty tại TP. HCM"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
