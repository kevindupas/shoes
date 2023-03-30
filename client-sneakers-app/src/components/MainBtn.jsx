import { Link } from "react-router-dom";
import "../styles/Button.css";

const MainBtn = ({ title, path }) => {
  return (
    <Link to={path} className="main-btn">
      {title}
    </Link>
  );
};

export default MainBtn;
