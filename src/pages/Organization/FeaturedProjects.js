import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';

function FeaturedProjects() {
  const charities = data.charities;
  const org = data.org;

  // Hàm lấy hình ảnh tổ chức
  const getOrgImage = (organizationName) => {
    const organization = org.find((orgItem) => orgItem.organization === organizationName);
    return organization ? organization.image : null;
  };

  const getOrgID = (organizationName) => {
    const organization = org.find((orgItem) => orgItem.organization === organizationName);
    return organization ? organization.id : null;
}


  // Hàm loại bỏ dấu tiếng Việt và thay thế khoảng trắng thành dấu -
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

  // Hàm lấy màu cho tag
  const getTagColor = (tag) => {
    const normalizedTag = removeVietnameseTones(tag); // Loại bỏ dấu
    return tagColors[normalizedTag] || "#e91e63"; // Màu mặc định
  };

  return (
    <div className="featured-container">
      <h2 className="featured-title">Các dự án đang gây quỹ</h2>
      <div className="featured-grid">
        {charities
          .filter((charity) => charity.status === 0) // Chỉ hiển thị các dự án đang hoạt động
          .map((charity) => {
            const orgImage = getOrgImage(charity.organization);
            const orgID = getOrgID(charity.organization);
            const raised = parseInt(charity.raisedAmount.replace(/[^0-9]/g, ''), 10);
            const target = parseInt(charity.targetAmount.replace(/[^0-9]/g, ''), 10);
            const progress = Math.min((raised / target) * 100, 100);
            const roundedProgress = progress.toFixed(1);

            return (
              <div key={charity.id} className="home-project-item">
                <div className="home-project-container">
                  <img
                    src={charity.image}
                    alt={charity.title}
                    className="project-image"
                  />
                  <p
                    className="home-project-tag"
                    style={{ backgroundColor: getTagColor(charity.tag) }}
                  >
                    {charity.tag}
                  </p>
                  {orgImage && (
                    <Link
                        to={`/organization/${orgID}`} // Điều hướng đến trang chi tiết tổ chức
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <div className="home-org-logo-container">
                            <img
                                src={orgImage}
                                alt={charity.organization}
                                className="home-org-logo"
                            />
                        </div>
                    </Link>
                  )}
                  <div className="home-project-content">
                    <p className="home-org">
                      <Link
                          to={`/organization/${orgID}`} // Điều hướng đến trang chi tiết tổ chức
                          style={{ textDecoration: "none", color: "black" }}
                      >
                          {charity.organization}
                      </Link>
                    </p>
                    <Link
                      to={`/detail/${charity.id}`} // Liên kết đến trang chi tiết của dự án
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      <h4 className="home-project-title">{charity.title}</h4>
                    </Link>
                    <div className="progress-container">
                      <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                      ></div>
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
