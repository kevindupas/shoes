import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import Container from "@mui/material/Container";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import reactLogo from "../assets/logoBlanc.svg";
import { useAuth } from '../contextes/authCtx';

import "../styles/Navbar.css";

const Navbar = () => {
  const authCtx = useAuth();
  console.log('navabr auth')
  console.log(authCtx)
  return (
    <nav>
      <Container>
        <div className="navbar">
          <Link to={`/`} >
            <img src={reactLogo} alt="logo-brand" width={55} height={65} />
          </Link>
          <div className="links">
            <div className="subnav">
              <div className="subnavbtn">
                <Link to={`shop`} className="nav-link">
                  Eshop
                </Link>
                <SubMenu />
              </div>
            </div>
            <Link to={`#`} className="nav-link">
              Blog
            </Link>
          </div>
          <div className="nav-icons">
            {!authCtx.isLoggedIn ?
              (

                <>
                  <Link to={`login`} className="btn btn-link">
                    Connexion
                  </Link>
                  <Link to={`signup`} className="btn btn-link">
                    Créer un compte
                  </Link>
                </>
              ) : (
                <button className="btn btn-link" onClick={(e) => {e.preventDefault(); authCtx.logout()}} >Déconnexion</button>
              )
            }
            <SearchOutlinedIcon />
            <Link to={`panier`}>
              <ShoppingBasketOutlinedIcon />
            </Link>

            {authCtx.isLoggedIn && (
              <Link to={`profile`}>
                <PersonOutlineOutlinedIcon />
              </Link>
            )}

          </div>
        </div>
      </Container>
    </nav>
  );
};


export default Navbar;
