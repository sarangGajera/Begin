import React from "react";
import "./crossstore.css";
import Slider from "react-slick";

const Crossstore = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "6px",
    slidesToShow: 5,
    speed: 500,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
        },
        {
            breakpoint: 769,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
        },
        {
            breakpoint: 426,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
        },
        {
            breakpoint: 376,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
        },
    ]
  };

  return (
    <div className="crossstore">
      <div className="container">
        <h1 className="font-bold text-2xl text-center cross_text">
          Cross store shopping in real time and cloth <br /> simulation on your
          own character!
        </h1>

        <div className="mt-14">
          <Slider {...settings}>
            <div className="box_cross_logo">
              <img src="/images/Group 22.png" alt="images" />
            </div>
            <div className="box_cross_logo">
              <img src="/images/Group 23.png" alt="images" />
            </div>
            <div className="box_cross_logo">
              <img src="/images/Group 24.png" alt="images" />
            </div>
            <div className="box_cross_logo">
              <img src="/images/Group 25.png" alt="images" />
            </div>
            <div className="box_cross_logo">
              <img src="/images/Group 26.png" alt="images" />
            </div>
            <div className="box_cross_logo">
              <img src="/images/Group 24.png" alt="images" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Crossstore;
