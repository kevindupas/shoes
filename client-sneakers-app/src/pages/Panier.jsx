import PanierList from "../components/panier.components/PanierList";
import PanierRecap from "../components/panier.components/PanierRecap";
import PanierSuggestion from "../components/panier.components/PanierSuggestion";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, createContext, useContext } from "react";
import emptyBasket from "../assets/panier_empty.png";
import '../styles/Panier.css';
import { Card } from "@mui/material";

export const ProductContext = createContext();
const Panier = () => {
  const [products, setProducts] = useState([{id:1,nom:'Air T',taille:44.5,prix:98.5,quantite:3},{id:4,nom:'Air T',taille:44.5,prix:98.5,quantite:3},{id:5,nom:'Air T',taille:44.5,prix:98.5,quantite:3},{id:2,nom:'Air T',taille:44.5,prix:98.5,quantite:2},{id:3,nom:'Air T',taille:44.5,prix:98.5,quantite:2}]);

  const addProduct = (id)=>{
    let newProductList = products.map(product=>{
      if (product.id == id) {
        const newQuantite = product.quantite+1;
        return {...product,quantite:newQuantite}
      }
      return product;
    })
      setProducts(newProductList);
  }

  const subProduct = (id)=>{
    const newProductList = products.map(product=>{
      if (product.id == id && product.quantite>0) {
        const newQuantite = product.quantite-1;
        return {...product,quantite:newQuantite}
      }
      return product;
    })
      setProducts(newProductList);
  }

  const removeProduct = (id)=>{
    const newArr = products.filter(pdct=>pdct.id !== id);
    setProducts(newArr);
    console.log(newArr);
  }


  const theme = createTheme({
    components: {
      MuiContainer: {
        styleOverrides: {
          maxWidthLg: {
            width: 1519,
          },
        },
      },
    },
  });

  if(products.length<1){
    return (
      <>
        <section className="PanierSection">
          <Card style={{padding:10}}>
            <div style={{display:'flex',justifyContent:'center'}}>
            <img style={{height:200,width:200}} src={emptyBasket}/>
            </div>
            <p style={{fontWeight:'bold',fontSize:24}}>Panier vide : ajoutez des produits ou connectez vous</p>
          </Card>
        </section>
      </>
      
    )
  }

  return (
    <>
      <ProductContext.Provider value={[products,addProduct,subProduct ,removeProduct]}>
        <section className="PanierTop">
          <h1>Panier</h1>
          <section className="PanierSection">
            <PanierList></PanierList>
            <PanierRecap></PanierRecap>
          </section>
          <hr className="sectionSeperator"></hr>
        </section>
        <section>
          <h1>Vous allez adorez aussi...</h1>
          <PanierSuggestion></PanierSuggestion>
        </section>
        
        
      </ProductContext.Provider>   
    </>
        
  )
};

export default Panier;
