import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import resMenuList from "../utils/restaurantMenuBasic";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  console.log("RestaurantMenu loaded");

  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    console.log("useeffect loaded");
    setResMenu(resMenuList);
  }, []);

  if (!resMenu || resMenu.length === 0) {
    return <Shimmer />;
  }
  const { name, cuisines, costfortwo, rating, area, menu, cloudinaryImageId } = resMenu[0];
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
        {menu.map((ctg) => (
          <div key={ctg?.id} className="menu-category">
            <h3 className="category-title">
              {ctg.category} ({ctg.items.length})
            </h3>

            <div className="category-items">
              {ctg.items.map((item) => (
                <div key={item?.id} className="menu-item">
                  {/* Left Side: Item Details */}
                  <div className="item-details">
                    {item.isVeg && <span className="veg-icon">🟩 Veg</span>}
                    <h6 className="item-name">{item.name}</h6>
                    <p className="item-price">₹{item.price}</p>

                    {item.rating && (
                      <p className="item-rating">
                        ★ {item.rating} ({item.ratingCount})
                      </p>
                    )}

                    <p className="item-desc">{item.description}</p>
                  </div>

                  {/* Right Side: Image and Add Button */}
                  <div className="item-image-box">
                    {item.imageId ? <img src={CDN_URL + item.imageId} alt={item.name} className="item-img" /> : <div className="item-img-placeholder"></div>}
                    <button className="add-btn">ADD</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
