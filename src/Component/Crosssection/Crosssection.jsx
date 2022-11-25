import React from "react";
import Button from "../comn/Button";
import "./crosssection.css";

const Crosssection = (props) => {
  return (
    <div className="crosssection" id="shopping">
      <div className="container">
        <div className="cross_div_main">
          <div>
            <img className="img_begin_cross" src="./images/Begin_v7-02 45.png" alt="images"/>
          </div>
          <div className="cross_div_text">
          <p className="text-start font-medium cross_lorem_text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh <br/> euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad <br/> minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut <br/> aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in <br/>
            vulpuLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diam <br/> nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. <br/> Ut wisi enim ad minim veniam, quis nostrud exerci
            tation ullamcorper suscipit <br/> lobortis nisl ut aliquip ex ea commodo
            con
          </p>
          <Button className="line_btn_learn">LEARN MORE</Button>
        </div>
        </div>
        <div className="img_dol_cross">
          <img src="/images/Begin_v7-02 46.png" alt="images"/>
        </div>
      </div>
    </div>
  );
};

export default Crosssection;
