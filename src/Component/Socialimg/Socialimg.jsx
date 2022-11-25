import React from "react";
import "./socialimg.css";
import { social, Introd } from "../Data";
import Button from "../comn/Button"

const Socialimg = (props) => {
  return (
    <div className="socialimg" id="about">
      <div className="begi_img_section">
        <img src="/images/BEGIN.png" alt="images" />
      </div>
      <div className="container">
        <div className="flex justify-around items-center">
          {social.map((eve, ind) => {
            return (
              <div key={ind} className="mt-10">
                <img src={eve.images} />
              </div>
            );
          })}
        </div>

        <div className="intro_div">
          <div className="md:mr-20 sm:mr-16">
            <h1 className="font-bold text-3xl title_div">{Introd.title}</h1>
            <div className="line_div">
              <div className="lline_div"></div>
            </div>
            <p className="mt-12">{Introd.text}</p>
            <p className=" mt-5">{Introd.because}</p>
            <Button className="line_btn_learn">LEARN MORE</Button>
          </div>

          <div className="">
            <div className="box">
              <img
                className="img_intro"
                src="./images/Rectangle 6.png"
                alt="images"
              />
              <div className="icon text-center">
                <h1 className="font-medium text-[#1EE1B3]">Lorem Ipsum</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetuer <br/> adipiscing elit, sed
                  diam nonummy nibh euismod
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialimg;
