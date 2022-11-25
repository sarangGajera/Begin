import React from "react";
import "./everythingsection.css";
import height from "../../assets/icon/Height.svg";
import closet from "../../assets/icon/Closet.svg";
import shirt from "../../assets/icon/Shirt.svg";

const Everythingsection = () => {
  return (
    <div className="everythingsection" id="features">
      <div className="container">
        <div className="flex justify-around items-center main_div_every">
          <div className="eveeryth_div w-[100%]">
            <img
              className="eveery_div"
              src="./images/Rectangle 12.png"
              alt="images"
            />
            <img
              className="eveery_img"
              src="./images/TransparentMirror 1.png"
              alt="images"
            />
          </div>

          <div className="w-[100%]">
            <div className="mb-11">
            <h1 className="font-bold text-3xl">EVERYTHING YOU NEED!</h1>
            <div className="line_div"><div className="lline_div"></div></div>
            </div>

            <div>
              <div className="flex justify-center">
              <div className="img_round">
                <img className="img_everyy" src={height} alt="images" />
              </div>
              <div className="ml-11">
              <h2 className="font-bold">Body measurement tracking</h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,  sed
                diam nonummy nibh euismod tincidunt ut  laoreet dolore
                magna aliquam erat volutpat. Ut wisi
              </p>
              </div>
            </div>

            <div className="flex justify-center my-5">
              <div className="img_round">
                <img className="img_everyy" src={closet} alt="images" />
              </div>
              <div className="ml-11">
              <h2 className="font-bold">In home trial of clothes and closet</h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,  sed
                diam nonummy nibh euismod tincidunt ut  laoreet dolore
                magna aliquam erat volutpat. Ut wisi
              </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="img_round">
                <img className="img_everyy" src={shirt} alt="images" />
              </div>
              <div className="ml-11">
              <h2 className="font-bold">Recommendation of clothes using AI</h2>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,  sed
                diam nonummy nibh euismod tincidunt ut  laoreet dolore
                magna aliquam erat volutpat. Ut wisi
              </p>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Everythingsection;
