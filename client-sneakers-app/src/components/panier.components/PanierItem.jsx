import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../pages/Panier';
import { Box } from '@mui/material';
import '../../styles/Panier.css'

const PanierItem = ({product}) => {
    const [quantite, setQuantite] = useState(0);
    const [products,addProduct,subProduct ,removeProduct] = useContext(ProductContext);
    let styles = {
        padding : '5px',
    }

    //addProduct 
    const increase = (id) => {  
        setQuantite(quantite => quantite + 1);
        addProduct(id)
    };
    
    // subProduct 
    const decrease = (id) => {
        setQuantite(quantite => quantite - 1);  
        subProduct(id) 
    };
    
    return (
        <li>
            <Box className='Box'>
                <img className='' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""  /> 
                <div>
                    <p className='nomProduit'>{product.nom}</p>
                    <p></p>
                    <p>taille : {product.taille} - prix : {product.prix * product.quantite} €</p>
                </div>
                <div >
                    <input type='button' className='CountButton' onChange={product.quantite==0?removeProduct(product.id):()=>{}} onClick={()=>decrease(product.id)}  value='-' />
                    <input className='CountBox' type="text" readOnly={true} value={product.quantite} />
                    <input type='button' className='CountButton' onClick={()=>increase(product.id)}   value='+' />
                </div>
                <span>
                    <CloseIcon onClick={()=>removeProduct(product.id)} ></CloseIcon>
                </span>
            </Box>
        </li>
        
    )
}

export default PanierItem;