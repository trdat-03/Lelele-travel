import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex h-12 justify-around items-center">
      <div className="flex items-center">
        <div className="flex items-center">
          <FontAwesomeIcon
            className="text-primary-color w-6 h-6 mr-4"
            icon={Icons.faEarthAmericas}
          />
          <h1 className="text-primary-color font-extrabold text-2xl">
            Viatours
          </h1>
        </div>
        <div>
          <input
            className="ml-10 w-[280px] p-2"
            type="text"
            placeholder="Search destinations or activities"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="mx-5 text-text-color font-bold">Destinations</div>
        <div className="mx-5 text-text-color font-bold">Activities</div>
        <div className="mx-5 text-text-color font-bold">About</div>
        <div className="mx-5 text-text-color font-bold">Sign up</div>
        <div className="mx-5 rounded-xl px-[10px] py-[4px] bg-primary-color text-[#ffffff] font-bold">
          Login
        </div>
      </div>
    </div>
  );
};

export default Header;
