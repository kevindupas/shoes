import PanierList from "../components/panier.components/PanierList";
import PanierRecap from "../components/panier.components/PanierRecap";
import PanierSuggestion from "../components/panier.components/PanierSuggestion";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, createContext, useContext } from "react";
import emptyBasket from "../assets/panier_empty.png";
import { AuthContext } from '../contextes/authCtx';
import reactLogo from "../assets/logoBlanc.svg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import WalletIcon from '@mui/icons-material/Wallet';
import '../styles/Panier.css';
import { Card,Avatar, Link } from "@mui/material";

export const ProductContext = createContext();
const Profil = () => {
  //const auth = useContext(AuthContext);
  const auth = useContext(AuthContext);
  console.log('profil auth')
  console.log(auth.authUser)  
  const user = auth.authUser;

  



  

  return (
    <>
        <h1>Profil</h1>
        <section style={{display:'flex', marginLeft:'20%', marginBottom:50}} >
            <section style={{width:'30%',marginRight:'5%'}} >
              <div>
                <Card style={{display:'flex',padding:10}} >
                  <Avatar style={{width:100,height:100,marginRight:20}}></Avatar>
                  <p style={{alignSelf:'center'}}>Bonjour, {user.firstname} {user.lastname}</p>
                </Card>
              </div>
              <Card style={{marginTop:10}}>
                <ul style={{padding:10}}>
                  <li style={{display:"flex"}}> <AccountCircleIcon style={{marginRight:10}}></AccountCircleIcon> <a style={{textDecoration:'none',color:'#DD624E'}} href="http://google.com">Apercu du compte</a> </li>
                  <li style={{display:"flex"}}> <ShoppingBagIcon style={{marginRight:10}}></ShoppingBagIcon> <a style={{textDecoration:'none',color:'black'}} href="http://">Mes commandes</a> </li>
                  <li style={{display:"flex"}}> <AssignmentReturnIcon style={{marginRight:10}}></AssignmentReturnIcon><a style={{textDecoration:'none',color:'black'}} href="http://">Mes retours </a></li>
                </ul>
              </Card>
              <Card style={{marginTop:5}}>
                <ul style={{padding:10}}>
                  <li style={{display:"flex"}}><BadgeIcon style={{marginRight:10}}></BadgeIcon><a style={{textDecoration:'none',color:'black'}} href="http://">Mes informations personnelles</a></li>
                  <li style={{display:"flex"}}><HomeIcon style={{marginRight:10}}></HomeIcon><a style={{textDecoration:'none',color:'black'}} href="http://">Carnet d'adresses</a></li>
                  <li style={{display:"flex"}}><WalletIcon style={{marginRight:10}}></WalletIcon><a style={{textDecoration:'none',color:'black'}} href="http://">Mes mode de paiements </a></li>
                </ul>
              </Card>
              
            </section>
            <section style={{background: ` url(${reactLogo})`,width:'45%'}}>
              <h1 style={{backgroundColor:'#DD624E', color:'white',marginTop:0}}>Bienvenue sur votre compte</h1>
            </section>
        </section>
        
    </>
        
  )
};

export default Profil;
