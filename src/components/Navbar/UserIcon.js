// UserIcon.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/UserIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faPersonThroughWindow } from '@fortawesome/free-solid-svg-icons'; // Thêm icon khác
import UserModal from '../../pages/Authorization/UserModal'; // Đổi sang modal mới

function UserIcon() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [icon, setIcon] = useState(faRightToBracket); // Icon mặc định

  const handleIconClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Link 
        to="#" 
        className="user-icon" 
        onClick={handleIconClick}
        onMouseEnter={() => setIcon(faPersonThroughWindow)}      // Đổi icon khi hover
        onMouseLeave={() => setIcon(faRightToBracket)} // Trở lại icon mặc định khi không hover
      >
        <FontAwesomeIcon icon={icon} className="icon" />      
      </Link>
      {isModalOpen && (
        <UserModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </>
  );
}

export default UserIcon;
