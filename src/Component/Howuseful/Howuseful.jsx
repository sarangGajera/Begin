import React from "react";
import "./howuseful.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from "../comn/Button";

const Howuseful = (props) => {
  return (
    <div className="howuseful bg-[#3a322f] lg:h-[500px] flex justify-center items-center" id="begin">
      <div className="container">
        <div className="mt-10">
          <h1 className="text-center font-bold text-white text-3xl how_text">How it is useful for user and companies</h1>

          <div className="flex justify-around items-center mt-12 lg:space-x-10 md:space-x-10 box_div_man">
            <div className="bg-[#0C0C11] text-white p-5">
              <div className="lorm_btn_how">
              <h2 className="font-bold">Lorem ipsum <ChevronRightIcon className="text-[#1EE1B3] loremm_btn_how"/></h2>
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, <br/> consectetuer adipiscing elit, sed
                diam <br/> nonummy nibh euismod tincidunt ut <br/> laoreet dolore magna
                aliquam erat <br/> volutpat. Ut wisi
              </p>
            </div>
            <div className="bg-[#0C0C11] text-white p-5 box_two">
            <div className="lorm_btn_how">
              <h2 className="font-bold">Lorem ipsum <ChevronRightIcon className="text-[#1EE1B3] loremm_btn_how"/></h2>
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, <br/> consectetuer adipiscing elit, sed
                diam <br/> nonummy nibh euismod tincidunt ut <br/> laoreet dolore magna
                aliquam erat <br/> volutpat. Ut wisi
              </p>
            </div>
            <div className="bg-[#0C0C11] text-white p-5">
            <div className="lorm_btn_how">
              <h2 className="font-bold">Lorem ipsum <ChevronRightIcon className="text-[#1EE1B3] loremm_btn_how"/></h2>
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, <br/> consectetuer adipiscing elit, sed
                diam <br/> nonummy nibh euismod tincidunt ut <br/> laoreet dolore magna
                aliquam erat <br/> volutpat. Ut wisi
              </p>
            </div>
          </div>

          <div className="text-center">
          <Button className="line_btn_learn">LOREN MORE</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howuseful;
