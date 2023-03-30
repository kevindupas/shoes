import React, { useEffect, useState } from 'react';
import api from '../../../api/apiHandler';

import fakeUsers from '../../../assets/data/fakeUsers.json';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import '../../../styles/admin/UsersIndex.css';

const CategorieProductAdmin = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const localInfo = localStorage.getItem('user');
    const { token } = JSON.parse(localInfo);
    console.log(token)
    const fetchCategorieProducts = async () => {
      const results = await api.adminGetAll(
        'http://localhost:8000/v1/categorie-products',
        {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
      )
      console.log(results);
      setCategories(results)
    }
    fetchCategorieProducts();
  }, []);
  
  const handleDelete = async (e, id) => {
    e.preventDefault();
    console.log(id)
    const localInfo = localStorage.getItem('user');
    const { token } = JSON.parse(localInfo);
    const results = await api.adminDeleteOne(
      `http://localhost:8000/v1/admin/categorie-products/${id}`,
      {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
    )
    console.group(results)
    const newListUser = categories.filter((u) => u._id !== id)
    setCategories(newListUser);
  }

  return (
    <div id="categorie-product">
      <header>
        <h2>Liste des categories de produits</h2>
        <Link to={`add`} className="btn btn-add">+</Link>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>label</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {categories.map((c, i) => {
            console.log('c', c)
            return <tr key={`catgorrie-product-${c._id}`}>
              <td>{c._id}</td>
              <td>{c.label}</td>

              <td>
                <Link to={`/admin/categorie-products/${c._id}`}>Show</Link>
                <button>Edit</button>
                <button onClick={(e) => handleDelete(e, c._id)}>Delete</button>
              </td>
            </tr>
          })}
          
        </tbody>
      </table>
    </div>
  )
}

export default CategorieProductAdmin