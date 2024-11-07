import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../images/content/Home/1.jpg'
import image2 from '../images/content/Home/2.jpg'
import image3 from '../images/content/Home/3.jpg'
import '../styles/Home.css';

const AutoSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,              
        infinite: true,          
        speed: 500,               
        slidesToShow: 1,          
        slidesToScroll: 1,      
        autoplay: true,          
        autoplaySpeed: 2500,
        beforeChange: (current, next) => setCurrentSlide(next), // Cập nhật trạng thái khi chuyển slide
        
    };

    return (
        <div>
            <Slider {...settings}>
                <div className={`slide-container ${currentSlide === 0 ? 'active' : ''}`}>
                    <img src={image1} alt="Slide 1" className='slide-image' />
                    <div className={`overlay ${currentSlide === 0 ? 'show' : ''}`}>
                        <h2 className='slide-title'>Nền tảng gây quỹ cộng đồng trực tuyến</h2>
                        <p className='slide-content'>Kết nối, gây quỹ và ủng hộ trực tuyến<br/>tiện lợi, tin cậy và minh bạch</p>
                    </div>
                </div>
                <div className={`slide-container ${currentSlide === 1 ? 'active' : ''}`}>
                    <img src={image2} alt="Slide 2" className='slide-image'/>
                    <div className={`overlay ${currentSlide === 1 ? 'show' : ''}`}>
                        <h2 className='slide-title'>Nền tảng gây quỹ cộng đồng trực tuyến</h2>
                        <p className='slide-content'>Một mái nhà, một sự an toàn, một cơ hội <br/>để thay đổi cuộc đời</p>
                    </div>
                </div>
                <div className={`slide-container ${currentSlide === 2 ? 'active' : ''}`}>
                    <img src={image3} alt="Slide 3" className='slide-image'/>
                    <div className={`overlay ${currentSlide === 2 ? 'show' : ''}`}>
                        <h2 className='slide-title'>Nền tảng gây quỹ cộng đồng trực tuyến</h2>
                        <p className='slide-content'>Tình nguyện là món quà vô giá mà bạn có thể trao đi</p>
                    </div>
                </div>
            </Slider>
            <div>
                <p></p>
            </div>
        </div>
    );
}

export default AutoSlider;
