import React, { useEffect, useState } from "react";
import {HashLink as Link} from 'react-router-hash-link'
import Dark from "../Dark";
import "./navbar.css";
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {

  return ( 
    <div>
      <header className="p-2 cursor-pointer nav_bar_div">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <nav className=" lg:block hidden flex flex-wrap items-center text-base font-medium justify-center md:space-x-8 sm:space-x-0">
              <Link to="#about" smooth className="hover:text-[#1ee1b3] text-sm">About</Link>
              <Link smooth className="hover:text-[#1ee1b3] text-sm" to="#features">
                Features
              </Link>
              <Link smooth className="hover:text-[#1ee1b3] text-sm" to="#begin">
                Why Begin
              </Link>
              <Link smooth className="hover:text-[#1ee1b3] text-sm" to="#specs">Specs</Link>
              <Link smooth className="hover:text-[#1ee1b3] text-sm" to="#shopping">
                Cross-Store Shopping
              </Link>
              <Link smooth className="hover:text-[#1ee1b3] text-sm" to="#contact">
                Contact
              </Link>
            </nav>

            <div>
              <nav className="lg:hidden md:block">
                <input className="hidden" type="checkbox" id="tog-Sid" />
                <label for="tog-Sid" className="tog-ion cursor-pointer font-medium">Menu</label>

                <div className="sid_div">
                    <div>
                       <div className="flex justify-between items-center p-3 cursor-pointer">
                         <div>
                           <h1 className="font-bold text-xl">BEGIN</h1>
                         </div>
                         <div>
                         <label for="tog-Sid"><ClearIcon className="cursor-pointer"/></label>
                         </div>
                       </div>
                       <hr/>
                        <div className="p-3 flex justify-between items-center">
                          <div>
                            <h1 className="font-bold text-xl">Dark Mode</h1>
                          </div>
                          <div>
                           <Dark/>
                        </div>
                        </div>
                        <hr/>
                       <div className="mt-5 p-3">
                          <ul className="nav_sidbar_div">
                          <label className="space-y-4" for="tog-Sid">
                          <li><a href="#about">About</a></li>
                            <li>Features</li>
                            <li>Why Begin</li>
                            <li>Specs</li>
                            <li>Cross-Store Shopping</li>
                            <li>Contact</li>
                            </label>
                          </ul>
                       </div>
                    </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="flex justify-center items-center">
             <div className="dark_div_main">
               <Dark/>
             </div>
            <button className="mx-7 login_div text-sm font-medium hover:text-[#1ee1b3] hover:tracking-wide w-8">
               Login
            </button>
            <button className="bg-[#1ee1b3] w-24 h-9 rounded text-black font-medium hover:bg-[#1EB2E1] hover:text-white text-sm">
              SIGN UP
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
