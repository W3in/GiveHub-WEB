import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import '../../styles/Donate.css'

function OnlineDonate() {
  const charities = data.charities;
  const org = data.org;

  const getOrgImage = (organizationName) => {
      const organization = org.find((orgItem) => orgItem.organization === organizationName);
      return organization ? organization.image : null;
  };

  return (
    <div className="donate-container">
      <h2 className="donate-title">Danh sách các dự án đang gây quỹ</h2>
      <ul className="donate-list">
        {charities
          .filter((charity) => charity.status === 0) // Chỉ hiển thị các dự án đang hoạt động
          .map((charity) => {
            const orgImage = getOrgImage(charity.organization);
            const raised = parseInt(charity.raisedAmount.replace(/[^0-9]/g, ''), 10);
            const target = parseInt(charity.targetAmount.replace(/[^0-9]/g, ''), 10);
            const progress = Math.min((raised / target) * 100, 100);
            const roundedProgress = progress.toFixed(1);

            return (
              <li key={charity.id} className="donate-item">
                <div className="donate-item-container">
                  <div className="donate-tag">
                    <p>{charity.tag}</p>
                  </div>
                  <div className="donate-content">
                    <h4 className="donate-title">
                      <Link to={`/detail/${charity.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        {charity.title}
                      </Link>
                    </h4>
                    <p className="donate-org">{charity.organization}</p>
                    <div className="progress-container">
                      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="progress-text">
                      <p>{`${raised.toLocaleString()}đ`}</p>
                      <p className="donate-target">Mục tiêu: {charity.targetAmount}</p>
                    </div>
                  </div>
                  <img src={charity.image} alt={charity.title} className="donate-image" />
                  <div className='donate-button-container'>
                    <button className='donate-button'>Ủng hộ trực tuyến</button>
                    <button className='donate-button'>Ủng hộ trực tiếp</button>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default OnlineDonate;
