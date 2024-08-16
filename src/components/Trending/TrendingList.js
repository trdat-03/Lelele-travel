import React from "react";
import TrendingItem from "./TrendingItem";

const TrendingList = () => {
  return (
    <div className="grid grid-cols-7 gap-x-8">
      <TrendingItem
        img="https://images.pexels.com/photos/92090/pexels-photo-92090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Hội An"
        numberTours="100+ Tours"
      ></TrendingItem>
      <TrendingItem
        img="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Thái Nguyên"
        numberTours="100+ Tours"
      ></TrendingItem>
      <TrendingItem
        img="https://images.pexels.com/photos/14435439/pexels-photo-14435439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Đà Nẵng"
        numberTours="100+ Tours"
      ></TrendingItem>
      <TrendingItem
        img="https://images.unsplash.com/photo-1653611136846-7c67d6746638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Nha Trang"
        numberTours="100+ Tours"
      ></TrendingItem>
      <TrendingItem
        img="https://images.pexels.com/photos/14011653/pexels-photo-14011653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Phú Quốc"
        numberTours="100+ Tours"
      ></TrendingItem>
      <TrendingItem
        img="https://images.pexels.com/photos/1483778/pexels-photo-1483778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Hà Nội"
        numberTours="100+ Tours"
      ></TrendingItem>
      <TrendingItem
        img="https://images.pexels.com/photos/14519891/pexels-photo-14519891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Hội An"
        numberTours="100+ Tours"
      ></TrendingItem>
    </div>
  );
};

export default TrendingList;
