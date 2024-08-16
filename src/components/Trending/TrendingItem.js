import React from "react";

const TrendingItem = (props) => {
  return (
    <div className="w-28 cursor-pointer">
      <div className="w-28 h-28 rounded-[112px] ">
        <img
          className="w-full h-full object-cover rounded-[112px]"
          src={`${props.img}`}
          alt=""
        />
      </div>
      <h1 className="text-center mt-3 mb-1 text-text-color text-lg font-semibold">
        {props.name}
      </h1>
      <h1 className="text-center text-text-color text-base font-normal">
        {props.numberTours}
      </h1>
    </div>
  );
};

export default TrendingItem;
