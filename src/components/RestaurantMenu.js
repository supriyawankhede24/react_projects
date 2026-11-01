import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import resMenuList from "../utils/restaurantMenuBasic";
import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  console.log("RestaurantMenu loaded");
  const [showItems, setShowItems] = useState(false);

  const [resMenu, setResMenu] = useState([]);
  // const [showItems, setShowItems]= useState(false)
  useEffect(() => {
    console.log("useeffect loaded");
    setResMenu(resMenuList);
  }, []);

  if (!resMenu || resMenu.length === 0) {
    return <Shimmer />;
  }
  // const handleClick = () => {
  //   setShowItems(!showItems);
  // };
  const { name, cuisines, costfortwo, rating, area, menu, cloudinaryImageId } = resMenu[0];
  console.log("menu= ", menu);
  return (
    <div className="menu-page-container">
      {/* Restaurant Header Info */}
      <div className="res-header">
        {/* Add the restaurant cover image here */}
        <div className="res-cover-image">
          <img src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : "https://via.placeholder.com/250x160?text=No+Image"} alt="restaurant cover" />
        </div>

        <div className="res-header-details">
          <h1>{name}</h1>
          <p className="res-cuisines">{cuisines?.join(", ")}</p>
          {/* ... rest of the details ... */}
        </div>
      </div>
      {/* Menu Sections */}
      <div className="menu-container">
        {menu.map((ctg, index) => (
          <div className="menu-category">
            <RestaurantCategory key={ctg.category} ctg={ctg} showItems={showItems} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
