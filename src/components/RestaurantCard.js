import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
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
    </div>
  );
};

export default RestaurantCard;
