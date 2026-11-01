import RestaurantCard, { withLabelComponent } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RES_LIST_URL } from "../utils/constants";
// import mockResData from "../utils/mockRestaurantData";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  let [searchRes, setSearchRes] = useState("");
  const {loggedInUser, setUserName} = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardLabel = withLabelComponent(RestaurantCard);
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
      promoted: true,
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

        <input
          className="border-b-gray-900"
          type="text"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
      </div>
      {/* </div> */}
      <div className="resContainer">
        {listOfRes.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            {res.info.promoted ? <RestaurantCardLabel resData={res} /> : <RestaurantCard resData={res} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
