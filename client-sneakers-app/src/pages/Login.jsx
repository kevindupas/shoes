import React, { useState } from 'react';
import { useAuth } from '../contextes/authCtx';
import { Box } from "@mui/system";
import { Stack, TextField } from '@mui/material';

import api from '../api/apiHandler';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useAuth();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    
    if(password !== '' && email !== '') {
      console.log(password, email)
      try {
        const result = await api.login('http://localhost:8000/auth/login', 
          {
            email,
            password
          }
        )
        if(result.status === 200 && result.logged) {
          authCtx.login('user', {...result})
        }
      } catch (err) {
        console.log('err: ', err)
      } 
    }
  }

  const handlerChange = (e) => {
    if(e.target.name === 'email') {
      setEmail(e.target.value);
    }else if(e.target.name === 'password') {
      setPassword(e.target.value);
    }
  }

  return (
    <Box>
      <form id="form-login" onSubmit={(e) => handlerSubmit(e)} onChange={(e) => handlerChange(e)} method="post" action="http://localhost:8000/auth/login">
        <div className="inner_login">
          <Stack spacing={2} direction="column">
          <h1>Se connecter</h1>
          <TextField
            required
            id="eamil"
            label="Email"
            defaultValue=""
            placeholder="nom@exemple.com"
            name="email"
            size="small"
          />
            
          <TextField
            required
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe*"
            size="small"
          />

          <input type="submit" value="Se connecter" className="main-btn" />
          </Stack>
        </div>
      </form>
    </Box>
    
  );
};

export default Login;
