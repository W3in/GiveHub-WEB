import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/UserIcon.css'
import avatar from '../../images/avatars/avatar.png';


function UserIcon() {
  return (
    <Link to="/profile" className="user-icon">
      <img src={avatar} alt="User" className="icon" /> 
    </Link>
  );
}

export default UserIcon;
