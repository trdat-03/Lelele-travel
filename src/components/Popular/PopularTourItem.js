import React from "react";

const PopularTourItem = (props) => {
  return (
    <div className=" border border-[#E7E6E6] p-2 rounded-lg cursor-pointer">
      <div className="w-full">
        <img
          className="w-full h-auto object-cover rounded-lg"
          src={`${props.img}`}
          alt=""
        />
      </div>
      <h1 className="text-[#717171] text-sm my-1">{props.city}</h1>
      <h1 className="text-text-color text-sm font-semibold">{props.title}</h1>
      <h1 className="text-center">{props.rate}</h1>
      <div className="w-3/4 h-[1px] bg-[#E7E6E6] mx-auto my-1 "></div>
      <div className="flex justify-between">
        <h1 className="text-text-color text-base">{props.time}</h1>
        <div className="flex">
          <h1 className="text-text-color text-base">From</h1>
          <h1 className="text-text-color text-base">{props.monney}</h1>
        </div>
      </div>
    </div>
  );
};

export default PopularTourItem;
