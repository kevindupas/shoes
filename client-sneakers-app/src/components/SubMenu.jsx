import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const SubMenu = () => {
  return (
    <div className="subnav-content">
      <div className="flex-subnav-link">
        <Link to={`#`}>Pour Elle</Link>
        <Link to={`#`}>Pour Lui</Link>
        <Link to={`#`}>Les Kids</Link>
        <Link to={`#`}>Les Kids</Link>
        <Link to={`#`}>Running</Link>
        <Link to={`#`}>Les Accessoires</Link>
      </div>
    </div>
  );
};

export default SubMenu;
