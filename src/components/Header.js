import NavItem from "./NavItem";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  return (
    <div className="header">
      <div className="log-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="navbar">
          <NavItem></NavItem>
      </div>
    </div>
  );
};

export default Header;
