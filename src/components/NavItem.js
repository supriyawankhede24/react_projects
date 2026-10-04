import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const NavItem = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="navItem">
      <ul className="list">
        <li className="listIten">You are: {onlineStatus ? " online" : " offline"}</li>
        <li className="listIten">
          <Link to="/">Home</Link>
        </li>
        <li className="listIten">
          <Link to="/about">About Us</Link>
        </li>
        <li className="listIten">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="listIten">Cart</li>
        <li className="listIten">
          <Link to="/grocery">Grocery</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
