import React from "react";
import "./home.css";
import facebook from "../../assets/icon/facebook_White 1.svg";
import instagram from "../../assets/icon/instagram 1.svg";
import twitter from "../../assets/icon/Twitter_White 1.svg";
import Button from "../comn/Button";

const Home = (props) => {
  console.log('props---home0', props)
  return (
    <div className="home m-0">
      <div className="container">
        <div className="flex justify-between main_home_div">
          <div>
            <div className="flex space-x-7 sociali_logo">
              <img src={instagram} alt="images" />
              <img src={twitter} alt="images" />
              <img src={facebook} alt="images" />
            </div>
          </div>
          <div className="text-end tagl_text_div">
            <h1 className="text-[#1EE1B3]">TAGLINE</h1>
            <h1 className="text-9xl font-bold text-white begin_header">BEGIN</h1>
            <p className="font-bold text-white my-5 ipsum_text_div">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              ibh euismod <br /> tincidunt ut laoreet dolore magna aliquam erat
              er adipiscing elit, sed diam <br /> nonummy nibh euismod tincidunt
            </p>
            <div className="flex justify-end items-end btn_enter_div">
              <Button className="enter_btn">ENTER YOUR EMAIL</Button>
              <Button className='btn_get'>GET STARTED</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
