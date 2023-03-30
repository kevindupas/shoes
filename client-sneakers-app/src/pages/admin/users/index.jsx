import React, { useEffect, useState } from 'react';
import api from '../../../api/apiHandler';

import fakeUsers from '../../../assets/data/fakeUsers.json';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import '../../../styles/admin/UsersIndex.css';

const UserAdmin = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const localInfo = localStorage.getItem('user');
    const { token } = JSON.parse(localInfo);
    console.log(token)
    const fetchUsers = async () => {
      const results = await api.adminGetAll(
        'http://localhost:8000/v1/admin/users',
        {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
      )
      console.log(results);
      setUsers(results)
    }
    fetchUsers();
  }, []);
  
  const handleDelete = async (e, id) => {
    e.preventDefault();
    console.log(id)
    const localInfo = localStorage.getItem('user');
    const { token } = JSON.parse(localInfo);
    const results = await api.adminDeleteOne(
      `http://localhost:8000/v1/admin/users/${id}`,
      {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
    )
    console.group(results)
    const newListUser = users.filter((u) => u._id !== id)
    setUsers(newListUser);
  }

  return (
    <div id="users">
      <header>
        <h2>Liste des utilisateurs</h2>
        <Link to={`add`} className="btn btn-add">+</Link>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {users.map((u, i) => {
            return <tr key={u._id}>
              <td>{u._id}</td>
              <td>{u.firstname}</td>
              <td>{u.lastname}</td>
              <td>{u.email}</td>
              <td>
                <Link to={`/admin/users/${u._id}`}>Show</Link>
                <button>Edit</button>
                <button onClick={(e) => handleDelete(e, u._id)}>Delete</button>
              </td>
            </tr>
          })}
          
        </tbody>
      </table>
    </div>
  )
}

export default UserAdmin