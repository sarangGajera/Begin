import React from "react";
import "./collaboration.css";

const Collaboration = () => {
  return (
    <div className="collaboration bg-black h-[340px]">
      <div className="container">
        <div className="flex justify-between items-center colla_div">
          <div>
            <img className="collabro_img_div" src="./images/Mask group.png" alt="images" />
            <div className="div_liness"></div>
            <div className="flex items-center h-1 colla_div">
                <div className="lines_coll"></div>
                <h1 className="text-white ml-5">ZOZOSUIT</h1>
            </div>
          </div>
          <div>
            <p className="font-medium text-white text-center collaboration_text">
              In collaboration with ZOZOSUIT, our mirror will also provide a
              highly accurate <br/> replica of the user’s body via scanning and image
              processing. <br/> Through this, we will also be able to provide motion
              tracking for the <br/> user-customized metahuman in real time, making
              the experience incredibly <br/> realistic provided the mirror will be
              touch screen and interactive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
