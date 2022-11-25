import React from "react";
import "./enhance.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Enhance = () => {
  return (
    <div className="enhance lg:h-[310px] md:h-[310px] flex justify-center items-center">
      <div className="container">
        <h1 className="text-white font-bold text-2xl text-center enhance_text">
          Enhance your shopping experience <br/> with elevated expertise and efficient
          time constraints.
        </h1>
        <div className="flex justify-center items-center mt-9">
          
            <div className="enhance_btns">
               <span className="enhance_box"><PlayArrowIcon className="img_stop"/></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Enhance;
