import React from "react";
import Slider from "react-slick";

const Slidersoc = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider_div">
      <Slider {...settings}>
        <div className="slider_img">
          <img
            className="w-[100%] h-[350px]"
            src="./images/Rectangle 6.png"
            alt="images"
          />
        </div>
        <div className="slider_img">
          <img
            className="w-[100%] h-[350px]"
            src="./images/Rectangle 36.png"
            alt="images"
          />
        </div>
        <div className="slider_img">
          <img
            className="w-[100%] h-[350px]"
            src="./images/Rectangle 35.png"
            alt="images"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slidersoc;
