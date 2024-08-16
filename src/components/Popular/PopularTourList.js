import React from "react";
import PopularTourItem from "./PopularTourItem";

const PopularTourList = () => {
  const tourItems = Array(8).fill({
    img: "https://images.pexels.com/photos/92090/pexels-photo-92090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    city: "Hạ Long, Việt Nam",
    title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
    rate: "4.8 (243)",
    time: "4 days",
    monney: "$189.25",
  });

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-y-5 gap-x-8 ">
      {tourItems.map((item, index) => (
        <PopularTourItem
          key={index}
          img={item.img}
          city={item.city}
          title={item.title}
          rate={item.rate}
          time={item.time}
          monney={item.monney}
        />
      ))}
    </div>
  );
};

export default PopularTourList;
