import {useState, useEffect} from "react";
import { RES_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  console.log("RestaurantMenu loaded");

  let [resMenu, setResMenu] = useState([]);
  if (!resMenu || resMenu.length === 0) {
    return <Shimmer />;
  }
  useEffect(() => {
    console.log('useEffect called')
    getMenu();
  }, []);

  const getMenu = async () => {
    console.log("getMenu called");
    const menuRes = await fetch(RES_MENU_URL + "&restaurantId=270186");
    console.log("menuRes :", menuRes);
    const menuData = await menuRes.json();
    console.log("menuData : ", menuData);
    // setResMenu(menuData);
  };

  return (
    <div>
      <h1>Name</h1>
      <h3>4.2 stars | Cost for two</h3>
      <ul>
        <li>Biryani</li>
        <li>North Indian</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
