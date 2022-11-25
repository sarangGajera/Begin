import React from "react";
import "./standard.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Standard = () => {
  return (
    <div className="standard" id="specs">
      <div className="container">
        <div>
          <h1 className="font-medium text-3xl text-center stan_text">
            Standard Features
          </h1>

          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="hardw_box_div text-[#565660]">HARDWARE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="flex justify-between items-center">
                    <div>
                      <img src="./images/Group 39.png" alt="images" />
                    </div>
                    <div className="text-[#565660]">
                      <p>
                        Lorem ipsum dolor sit amet ipsum dolor sit ametipsum
                        dolor sit ame
                      </p>
                      <div className="my-3 hr_lines"></div>
                      <p>
                        Lorem ipsum dolor sit amet ipsum dolor sit ametipsum
                        dolor sit ame
                      </p>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="hardw_box_div text-[#565660]">HARDWARE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="flex justify-between items-center">
                    <div>
                      <img src="./images/Group 39.png" alt="images" />
                    </div>
                    <div className="text-[#565660]">
                      <p>
                        Lorem ipsum dolor sit amet ipsum dolor sit ametipsum
                        dolor sit ame
                      </p>
                      <div className="my-3 hr_lines"></div>
                      <p>
                        Lorem ipsum dolor sit amet ipsum dolor sit ametipsum
                        dolor sit ame
                      </p>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="hardw_box_div text-[#565660]">HARDWARE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="flex justify-between items-center">
                    <div>
                      <img src="./images/Group 39.png" alt="images" />
                    </div>
                    <div className="text-[#565660]">
                      <p>
                        Lorem ipsum dolor sit amet ipsum dolor sit ametipsum
                        dolor sit ame
                      </p>
                      <div className="my-3 hr_lines"></div>
                      <p>
                        Lorem ipsum dolor sit amet ipsum dolor sit ametipsum
                        dolor sit ame
                      </p>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="hardw_box_div text-[#565660]">HARDWARE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="flex justify-between items-center">
                    <div>
                      <img src="./images/Group 39.png" alt="images" />
                    </div>
                    <div className="text-[#565660]">
                      <p>
                        Lorem ipsum dolor sit amet ipsum dolor sit ametipsum
                        dolor sit ame
                      </p>
                      <div className="my-3 hr_lines"></div>
                      <p>
                        Lorem ipsum dolor sit amet ipsum dolor sit ametipsum
                        dolor sit ame
                      </p>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="hardw_box_div text-[#565660]">HARDWARE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="flex justify-between items-center">
                    <div>
                      <img src="./images/Group 39.png" alt="images" />
                    </div>
                    <div className="text-[#565660]">
                      <p>
                        Lorem ipsum dolor sit amet ipsum dolor sit ametipsum
                        dolor sit ame
                      </p>
                      <div className="my-3 hr_lines"></div>
                      <p>
                        Lorem ipsum dolor sit amet ipsum dolor sit ametipsum
                        dolor sit ame
                      </p>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standard;
