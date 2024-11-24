import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import "../../styles/Detail.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = data.charities.find((charity) => charity.id === parseInt(id));
  const org = data.org;
  const getOrgImage = (organizationName) => {
    const organization = org.find((orgItem) => orgItem.organization === organizationName);
    return organization ? organization.image : null;
  };

  if (!project) {
    return <p>Dự án không tồn tại.</p>;
  }

  const removeVietnameseTones = (str) => {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .replace(/\s+/g, "-")
        .toLowerCase();
  };

  // Bảng màu cho từng tag
  const tagColors = {
    "giao-duc": "#6f00ff",
    "moi-truong": "#2196f3",
    "y-te": "#ff9800",
    "thien-tai": "#f7282f",
    "tre-em": "#0aa886",
    "nguoi-gia-neo-don": "#5c4917",
    "hoan-canh-kho-khan": "#e64207",
  };

  const getTagColor = (tag) => {
    const normalizedTag = removeVietnameseTones(tag); // Loại bỏ dấu
    return tagColors[normalizedTag] || "#e91e63"; // Màu mặc định
  };

  const { title, image, organization, raisedAmount, targetAmount, tag, details, status } = project;
  const raised = parseInt(project.raisedAmount.replace(/[^0-9]/g, ""), 10);
  const target = parseInt(project.targetAmount.replace(/[^0-9]/g, ""), 10);
  const progress = Math.min((raised / target) * 100, 100);
  const orgImage = getOrgImage(project.organization);

  const renderDonateButtons = () => {
    if (status === 0) {
      return (
        <>
          <button className='donate-button'>Ủng hộ trực tuyến</button>
          <button className='donate-button'>Ủng hộ trực tiếp</button>
        </>
      );
    } else if (status === 1) {
      if (raised >= target) {
        return <p className="project-status">Dự án đã hoàn thành 🎉</p>;
      } else {
        return <p className="project-status">Dự án đã kết thúc</p>;
      }
    }
    return null;
  };

  return (
    <div className="project-detail">
      <div className="page-title-container">
        <div className="page-title-image">
          <h1 className="about-title">Dự án</h1>
        </div>
      </div>
      <div className='project-detail-container-container'>
        <div className='project-detail-container'>
          <div className="project-detail-info">
            <div className='project-detail-img-container'>
              <img 
                src={image} 
                alt={title} 
                className="project-detail-image"
              />
              {tag && <p className="project-detail-tag" style={{ backgroundColor: getTagColor(project.tag) }}>{tag}</p>}
            </div>
            <div className='project-detail-content'>
              <h2 className="project-detail-title">{title}</h2>
              <div className='project-info-content'>
                {organization && 
                <div className="project-detail-organization">
                  <img src={orgImage} alt={project.organization} className="detail-org-logo" />
                  <span>{organization}</span>
                </div>}
                {targetAmount && <p className="project-detail-target-amount"><strong>Mục tiêu:</strong> <span>{targetAmount}</span></p>}
                <div className="progress-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                {raisedAmount && <p className="project-detail-raised-amount"><strong>Đã đạt được:</strong> <span>{raisedAmount}</span></p>}
              </div>
              <div className='detail-donate-button-container'>
                {renderDonateButtons()}
              </div>
            </div>
          </div>
          <h2 className="project-detail-details-title">Câu chuyện</h2>
          <ul className="project-detail-details-list">
            {details.map((detail, index) => (
              <li key={index} className="project-detail-detail-item">
                {detail.type === 'text' && detail.content && detail.content !== "" && (
                  <p className="project-detail-text">{detail.content}</p>
                )}
                {detail.type === 'foottext' && detail.content && detail.content !== "" && (
                  <small className="project-detail-foottext">*{detail.content}</small>
                )}
                {detail.url && detail.url !== "" && (
                  <img src={detail.url} className="project-detail-img" alt={detail.caption}/>
                )}
                {detail.caption && detail.caption !== "" && (
                  <p className="project-detail-caption">{detail.caption}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="share-buttons">
          <a 
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="share-facebook-button"
          >
            <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
            Chia sẻ lên Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
