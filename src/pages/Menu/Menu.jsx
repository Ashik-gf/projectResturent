import React from "react";
import MenuTitle from "../../uitls/Button/MenuTitle/MenuTitle";
import Starters from "../../Components/Starters/Starters";
import { kabab, mainbnr1 } from "../../Constant/index";
import MianDish from "../../Components/Starters/MainDish/MianDish";
import Dessert from "../../Components/Dessert/Dessert";
import Reservation from "../../Components/Reservation/Reservation";

const Menu = () => {
  return (
    <div className=" max-w-7xl mx-auto  ">
      <MenuTitle title={"Our Menu"} />
      <div className="w-full max-h-fit py-16 bg-white text-black">
        <Starters />
      </div>
      <div
        style={{ backgroundImage: `url( "${kabab}" )` }}
        className=" h-[450px] bg-cover "
      ></div>

      {/* Mian Dish */}
      <div className="w-full max-h-fit py-16 bg-white text-black">
        <MianDish />
      </div>

      <div
        style={{ backgroundImage: `url( "${mainbnr1}" )` }}
        className=" h-[450px] bg-cover "
      ></div>
      <div className="w-full max-h-fit py-16 bg-white text-black">
        <Dessert />
      </div>
      <Reservation />
    </div>
  );
};

export default Menu;
