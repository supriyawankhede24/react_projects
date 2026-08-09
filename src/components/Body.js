import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

let listRes = [
  {
    id: "817323",
    name: "Manmarzi Saoji Family Restaurant",
    cloudinaryImageId: "11194b82c3a046253347092517c9824d",
    locality: "Gandhibagh",
    costForTwo: "₹300 for two",
    cuisines: ["North Indian", "Thalis"],
    avgRating: 4.6,
    avgRatingString: "4.6",
  },
  {
    id: "817324",
    name: "Manmarzi Saoji Family Restaurant",
    cloudinaryImageId: "11194b82c3a046253347092517c9824d",
    locality: "Gandhibagh",
    costForTwo: "₹300 for two",
    cuisines: ["North Indian", "Thalis"],
    avgRating: 4.6,
    avgRatingString: "4.6",
  },
  {
    id: "817325",
    name: "Manmarzi Saoji Family Restaurant",
    cloudinaryImageId: "11194b82c3a046253347092517c9824d",
    locality: "Gandhibagh",
    costForTwo: "₹300 for two",
    cuisines: ["North Indian", "Thalis"],
    avgRating: 4,
    avgRatingString: "4.6",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter"
          onClick={() => {
            listRes = listRes.filter((id) => id.avgRating > 4.2);
            console.log('listRes = ', listRes)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resContainer">
        {resList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
