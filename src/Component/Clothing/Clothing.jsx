import React from "react";
import "./clothing.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Clothing = () => {
  return (
    <div className="clothing w-[100%] h-[535px] pt-[56px]">
      <div className="container">
        <div className="bg-[#0C0C11] w-[100%] h-[420px] box_div_clothi">
          <div className="text-white ml-20 pt-12 clothing_div_main">
            <h1 className="lg:text-5xl md:text-3xl font-bold">
              3D clothing simulation on <br /> user-designed metahuman
              <div className="cloth_line"><div className="cloth_lines"></div></div>
            </h1>
            <p className="mt-7 ipsum_text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut <br/> laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation <br/> ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor <br/> in hendrerit in
              vulputate velit esse molestie
            </p>
            <div className="btn_discover">
               <span className="disco_btns">DISCOVER MORE <ChevronRightIcon className="error_btn text-[#1EE1B3]"/></span>
            </div>
          </div>
          <div className="img_div_main">
             <img className="w-[100%] h-[500px]" src="/images/v4 1.png" alt="images"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothing;
