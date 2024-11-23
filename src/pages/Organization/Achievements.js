import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json'

function FeaturedProjects(onSwitchToFeatured) {
  const charities = data.charities;
  const org = data.org;

  const getOrgImage = (organizationName) => {
      const organization = org.find((orgItem) => orgItem.organization === organizationName);
      return organization ? organization.image : null;
  };
  return(
    <div className='featured-container'>
      <h2 className='featured-title'>Các dự án đã kết thúc</h2>
      <div className='featured-grid'>
      {charities
        .filter((charity) => charity.status === 1)
        .map((charity) => {
            const orgImage = getOrgImage(charity.organization);
            const raised = parseInt(charity.raisedAmount.replace(/[^0-9]/g, ''), 10);
            const target = parseInt(charity.targetAmount.replace(/[^0-9]/g, ''), 10);
            const progress = Math.min((raised / target) * 100, 100);
            const roundedProgress = progress.toFixed(1);

            return (
                <div key={charity.id} className="home-project-item">
                    <div className="home-project-container">
                        <img src={charity.image} alt={charity.title} className="project-image" />
                        <p className="home-project-tag">{charity.tag}</p>
                        {orgImage && <img src={orgImage} alt={charity.organization} className="home-org-logo" />}
                        <div className="home-project-content">
                            <p className="home-org">{charity.organization}</p>
                            <Link to={`/detail/${charity.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                <h4 className="home-project-title">{charity.title}</h4>
                            </Link>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                            </div>
                            <div className="progress-text">
                                <p>{`${raised.toLocaleString()}đ`}</p>
                                <p>{`${Math.round(roundedProgress)}%`}</p>
                            </div>
                            <p className="home-target">Mục tiêu: {charity.targetAmount}</p>
                        </div>
                    </div>
                </div>
            );
        })}
      </div>
    </div>
  );
}

export default FeaturedProjects;
