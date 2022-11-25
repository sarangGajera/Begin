import React, { useEffect, useState } from "react";
import "./footer.css";
import facebook from "../../assets/icon/facebook_White 1.svg";
import instagram from "../../assets/icon/instagram 1.svg";
import twitter from "../../assets/icon/Twitter_White 1.svg";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Link } from "react-router-dom";

const Footer = () => {

   const [backtop, setBacktop] = useState(false)


   useEffect(() => {
     window.addEventListener("scroll", () =>{
      if (window.scrollY > 100) {
        setBacktop(true)
      }else {
        setBacktop(false)
      }

     })
   }, [])

   const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    })
   }

  return (
    <div className="footer bg-black" id="contact">
      <div className="container">
        <div className="footer_div">
          {backtop  && (
            <img onClick={scrollUp} className="footer_up" src="./images/Polygon 1.png" alt="images" />
          )}
          <h1 className="font-bold text-5xl text-white my-4">BEGIN</h1>
          <div className="flex space-x-6">
            <div className="facebook">
              <img src={facebook} alt="images" />
            </div>
            <div className="facebook">
              <img src={twitter} alt="images" />
            </div>
            <div className="facebook">
              <img src={instagram} alt="images" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12 all_right">
          <div className="text-white">
            <h1>
              © <span className="ml-5">All Rights Reserved</span>
            </h1>
          </div>
          <div className="text-white">
            <h1><span >Terms and Conditions</span> <span className="mx-10 dot_div text-2xl">.</span> <span>Privacy Policy</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
