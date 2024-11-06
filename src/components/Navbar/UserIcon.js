import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/UserIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../../pages/Login';

function UserIcon() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ Link
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Link to="#" className="user-icon" onClick={handleIconClick}>
        <FontAwesomeIcon icon={faUser} className='icon' />
      </Link>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default UserIcon;
