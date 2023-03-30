import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../../../contextes/authCtx';
import { Box } from "@mui/system";
import { Stack, TextField, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import api from '../../../api/apiHandler'

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
  
  role: yup
    .string('Entrer votre password')
});

const UserDetail = () => {
  const {id} = useParams();
  console.log(id)
  const [user, setUser] = useState({})

  const authCtx = useAuth();
  const [error, setError] = useState();
  const [roles, setRoles] = useState([
    {label: 'Client', value: "client"},
    {label: 'Admin', value: "admin"}
  ]);

  const formik = useFormik({
    initialValues: {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      role: user.role
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      alert("values:" + JSON.stringify(values));
      console.log('formik submit-------------')
      console.log('---', values)
      // alert(JSON.stringify(values, null, 2));
      const localInfo = localStorage.getItem('user');
      const { token } = JSON.parse(localInfo);


      try {
        const result = await api.adminCreateOne('http://localhost:8000/v1/admin/users', 
          {
            email: values.email,
            password: values.password,
            firstname: values.firstname,
            lastname: values.lastname,
            role: values.role
          },
          {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
        )
        console.log('result in create User page', result);
        
      } catch (err) {
        console.log('rtour error: ------')
        console.log('err: ', err)
       
      } 
    },
  });

  console.log(formik)
  useEffect(() => {
    const localInfo = localStorage.getItem('user');
    const { token } = JSON.parse(localInfo);
    console.log(token)
    const fetchUsers = async () => {
      const results = await api.adminGetOne(
        `http://localhost:8000/v1/admin/users/${id}`,
        {headers: { 'x-access-token': token, 'Content-Type': 'application/json' }}
      )
      console.log(results);
      setUser(results)
    }
    fetchUsers();
  }, []);

  return (
    <div id="user-detail">
      <header>
        <h2>Detail de l'utilisateur</h2>
      </header>
      
      <Box>
        <form id="form-detail" onSubmit={formik.handleSubmit} method="post" action="http://localhost:8000/auth/login">
          <div className="inner_detail">
            <Stack spacing={2} direction="column">
              <h3>Detail</h3>

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
                id="role"
                select
                label="Role"
                defaultValue="client"
                name="role"
                size="small"
                onChange={e => {
                  formik.setFieldValue('role', e.target.value);
                }}
              >
                {roles.map((option, i) => {
                  console.log('option: ', option);
                  return (
                    <MenuItem key={`role-select-${i}`} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                })}
              </TextField>


              <input type="submit" value="Ajouter" className="main-btn" />
              {error && ( <p className="error">{error.message}</p>)}
            </Stack>
          </div>
        </form>
      </Box>
    </div>
  )
}

export default UserDetail