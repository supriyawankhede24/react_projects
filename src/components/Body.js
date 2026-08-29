import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RES_LIST_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  let [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // URL that throws a CORS error
    // const apiUrl = RES_LIST_URL;

    // Prefix the URL with corsproxy.io
    // const data = await fetch("https://corsproxy.io/?url=" + encodeURIComponent(apiUrl));
    const data = await fetch(RES_LIST_URL);
    // HTTP request succeeds ✅
    const jsonData = await data.json();
    // Optional chaining
    const result = jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setlistOfRes(result);
  };
  // // Conditional rendering
  if (!listOfRes || listOfRes.length === 0) {
    return <Shimmer />;
  }
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
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
