import React, { useEffect, useState } from 'react';
import api from '../../../api/apiHandler';

import fakeUsers from '../../../assets/data/fakeUsers.json';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import '../../../styles/admin/UsersIndex.css';

const ProductAdmin = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const localInfo = localStorage.getItem('user');
    const { token } = JSON.parse(localInfo);
    console.log(token)
    const fetchProducts = async () => {
      const results = await api.adminGetAll(
        'http://localhost:8000/v1/products',
        {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
      )
      console.log(results);
      setProducts(results)
    }
    fetchProducts();
  }, []);
  
  const handleDelete = async (e, id) => {
    e.preventDefault();
    console.log(id)
    const localInfo = localStorage.getItem('user');
    const { token } = JSON.parse(localInfo);
    const results = await api.adminDeleteOne(
      `http://localhost:8000/v1/admin/products/${id}`,
      {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
    )
    console.group(results)
    const newListUser = categories.filter((u) => u._id !== id)
    setCategories(newListUser);
  }

  return (
    <div id="categorie-product">
      <header>
        <h2>Liste des produits</h2>
        <Link to={`add`} className="btn btn-add">+</Link>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prix unitaire</th>
            <th>Quantitée</th>
            <th>Categorie Produit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {products.map((p, i) => {
            console.log('p', p)
            return <tr key={`product-${p._id}`}>
              <td>{p._id}</td>
              <td>{p.name}</td>
              <td>{p.unit_price}</td>
              <td>{p.quantity}</td>
              <td>{p.categorie.label}</td>

              <td>
                <Link to={`/admin/products/${p._id}`}>Show</Link>
                <button>Edit</button>
                <button onClick={(e) => handleDelete(e, p._id)}>Delete</button>
              </td>
            </tr>
          })}
          
        </tbody>
      </table>
    </div>
  )
}

export default ProductAdmin