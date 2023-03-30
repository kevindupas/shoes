import React, { useState } from 'react';
import { useAuth } from '../contextes/authCtx';
import { Box } from "@mui/system";
import { Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import api from '../api/apiHandler';

import './SignUp.css';

const validationSchema = yup.object({
  firstname: yup
    .string('Votre prénom')
    .min(2, 'Le prénom doit contenir au minimum 2 characters')
    .required("Le champ prénom est requis"),
  
  lastname: yup
    .string('Entrer votre nom')
    .min(2, 'Le nom doit contenir au minimum 2 characters')
    .required("Le champ nom est requis"),
  email: yup
    .string('Entrer votre email')
    .email('Entrer un email valide')
    .required("L'email est requis"),

  password: yup
    .string('Entrer votre password')
    .min(8, 'Le Password doit contebir au minimum 8 characters')
    .required('Password is required'),
  
  confirmPassword: yup
    .string('Entrer votre password')
    .min(8, 'Le Password doit contebir au minimum 8 characters')
    .required('Un Password est requis')
    .oneOf([yup.ref('password'), null], 'Ne correspond pas avec le password saisie')
});

const SignUp = () => {
  const authCtx = useAuth();
  const [error, setError] = useState();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
     
      console.log('formik submit-------------')
      console.log('---', values)
      // alert(JSON.stringify(values, null, 2));

      try {
        const result = await api.signup('http://localhost:8000/auth/signup', 
          {
            email: values.email,
            password: values.password,
            firstname: values.firstname,
            lastname: values.lastname,
          }
        )
        console.log(result);
        if(result.status === 200 && result.logged) {
          authCtx.signup('user', {...result})
        } else {
          console.log('------------')
          setError(result)
        }
      } catch (err) {
        console.log('rrtour error: ------')
        console.log('err: ', err)
       
      } 
    },
  });

  return (
    <Box>
      <form id="form-signup" onSubmit={formik.handleSubmit} method="post" action="http://localhost:8000/auth/login">
        <div className="inner_signup">
          <Stack spacing={2} direction="column">
            <h1>Créer un compte</h1>

            <TextField
              required
              id="firstname"
              label="Prénom"

              placeholder="Votre prénom"
              name="firstname"
              size="small"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              error={formik.touched.firstname && Boolean(formik.errors.firstname)}
              helperText={formik.touched.firstname && formik.errors.firstname}
            />

            <TextField
              required
              id="lastname"
              label="Nom"

              placeholder="Votre nom"
              name="lastname"
              size="small"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
            <TextField
              required
              id="eamil"
              label="Email"

              placeholder="nom@exemple.com"
              name="email"
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
              
            <TextField
              required
              label="Password"
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe*"
              size="small"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <TextField
              required
              label="Confirme Password"
              type="password"
              name="confirmPassword"
              id="confirm_password"
              placeholder=""
              size="small"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />

            <input type="submit" value="Se connecter" className="main-btn" />
            {error && ( <p className="error">{error.message}</p>)}
          </Stack>
        </div>
      </form>
    </Box>
  );
};

export default SignUp;
