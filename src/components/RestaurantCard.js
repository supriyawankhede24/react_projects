import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla, areaName } = resData?.info;
  return (
    <div className="res-card">
      <div className="res-logo">
        <img src={CDN_URL + cloudinaryImageId} alt="card"></img>
      </div>
      <h3>{name}</h3>
      <h5>
        {" "}
        {avgRating} stars | {sla.deliveryTime} mins
      </h5>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <h5>{loggedInUser}</h5>
    </div>
  );
};

// Higher order component

export const withLabelComponent = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute w-2 p-1 text-white bg-black">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
