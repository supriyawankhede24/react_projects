import { CDN_URL } from "../utils/constants";



const ItemList = ({items}) => {

  return (
    <div className="category-items">
      {items.map(
        (item) =>
          (
            <div key={item.id} className="menu-item">
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
          ),
      )}
    </div>
  );
};

export default ItemList;
