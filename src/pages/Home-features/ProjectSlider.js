import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../styles/Home.css";

const ProjectSlider = ({ charities, org, getOrgImage }) => {
    const sliderRef = useRef(null);

    // Hàm xáo trộn mảng
    const shuffleArray = (array) => {
        return array
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    // Trạng thái lưu danh sách đã xáo trộn
    const [shuffledCharities, setShuffledCharities] = useState([]);

    // Xáo trộn khi dữ liệu `charities` thay đổi
    useEffect(() => {
        if (charities && charities.length > 0) {
            setShuffledCharities(shuffleArray(charities)); // Chỉ xáo trộn khi có dữ liệu
        }
    }, [charities]);

    const slidesToScroll = 3; // Số lượng slide cuộn mỗi lần bấm nút
    const projectSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: slidesToScroll,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            const currentIndex = sliderRef.current.innerSlider.state.currentSlide;
            const newIndex = Math.max(currentIndex - slidesToScroll, 0);
            sliderRef.current.slickGoTo(newIndex);
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            const currentIndex = sliderRef.current.innerSlider.state.currentSlide;
            const maxIndex = shuffledCharities.length - slidesToScroll;
            const newIndex = Math.min(currentIndex + slidesToScroll, maxIndex); // Không vượt quá slide cuối
            sliderRef.current.slickGoTo(newIndex);
        }
    };

    return (
        <div className="project">
            <h1 className="title">Dự án đang gây quỹ</h1>
            <h3 className="subtitle">Hãy lựa chọn đồng hành cùng dự án mà bạn quan tâm</h3>
            {shuffledCharities.length > 0 ? ( 
                <>
                    <Slider {...projectSliderSettings} className="project-grid" ref={sliderRef}>
                        {shuffledCharities
                            .filter((charity) => charity.status === 0)
                            .slice(12)
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
                                                <div className="progress-text"><p>{`${raised.toLocaleString()}đ`}</p><p>{`${Math.round(roundedProgress)}%`}</p></div>
                                                <p className="home-target">Mục tiêu: {charity.targetAmount}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </Slider>
                    <div className="slider-nav">
                        <button onClick={goToPrev} className="slider-prev">
                            &#10094;
                        </button>
                        <button onClick={goToNext} className="slider-next">
                            &#10095;
                        </button>
                    </div>
                </>
            ) : (
                <p className="no-data">Không có dự án nào để hiển thị.</p>
            )}
            <Link to={'/featured-projects'} className="home-more">Xem thêm...</Link>
        </div>
    );
};

export default ProjectSlider;
 