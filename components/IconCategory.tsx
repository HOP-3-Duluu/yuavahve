import React from "react";
import MeatProducts from "../assets/MeatProducts";
import DairyProducts from "../assets/DairyProducts";
import BakeryProducts from "../assets/BakeryProducts";
import FruitsVegetables from "../assets/FruitsVegetables";
import Beverages from "../assets/Beverages";
import Sweets from "../assets/Sweets";
import PersonalCare from "../assets/PersonalCare";
import CleaningSupplies from "../assets/CleaningSupplies";

const IconCategory = ({ category }: { category: string }) => {
  switch (category) {
    case "meatProducts":
      return <MeatProducts />;
    case "dairyProducts":
      return <DairyProducts />;
    case "bakeryProducts":
      return <BakeryProducts />;
    case "fruitsVegetables":
      return <FruitsVegetables />;
    case "beverages":
      return <Beverages />;
    case "sweets":
      return <Sweets />;
    case "personalCare":
      return <PersonalCare />;
    case "cleaningSupplies":
      return <CleaningSupplies />;
    default:
      return <></>;
  }
};

export default IconCategory;
