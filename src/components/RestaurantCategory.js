import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ ctg }) => {
console.log('RestaurantCategory loaded')
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <h3 className="category-title flex justify-between cursor-pointer" onClick={handleClick}>
        {ctg.category} ({ctg.items.length})<span>⌄</span>
      </h3>
      {showItems && <ItemList items={ctg.items}></ItemList>}
    </div>
  );
};

export default RestaurantCategory;
