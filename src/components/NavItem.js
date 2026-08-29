import { Link } from "react-router-dom";

const NavItem = () => {
  return (
    <div className="navItem">
      <ul className="list">
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
      </ul>
    </div>
  );
};

export default NavItem;
