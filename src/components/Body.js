import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RES_LIST_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  let [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  const demoData = {
    info: {
      id: "270186",
      name: "Corridor Seven Coffee Roasters",
      cloudinaryImageId: "bwj2cxzscbfymyiscc04",
      areaName: "Sitabuldi",
      costForTwo: "₹400 for two",
      cuisines: ["Beverages", "Burgers", "Desserts", "Snacks"],
      avgRating: 4.6,
      sla: {
        deliveryTime: 20,
      },
    },
  };
  const fetchData = async () => {
    setlistOfRes([demoData]);

    // axios
    //   .get(RES_LIST_URL)
    //   .then((response) => {
    //     // Optional chaining
    //     const result = response.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //     setlistOfRes([...result, demoData]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  // // Conditional rendering
  if (!listOfRes || listOfRes.length === 0) {
    return <Shimmer />;
  }
  if (onlineStatus === false) return <h1>Looks like you are offline, please check your internet conection</h1>;
  return (
    <div className="body">
      {/* <div className="filter"> */}
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search here..."
            value={searchRes}
            onChange={() => {
              console.log("keypress");
              setSearchRes = listOfRes;
            }}
          />
        </div>
        <button
          className="filter"
          onClick={() => {
            const filteredList = listOfRes.filter((id) => id.info.avgRating > 4.2);
            setlistOfRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* </div> */}
      <div className="resContainer">
        {listOfRes.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
