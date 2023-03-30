// exemple charge un svg depuis le rep asset => import reactLogo from './assets/react.svg'
// exemple charge un svg depuis le rep public => import viteLogo from '/vite.svg'

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Profil from "./pages/Profil";
import Panier from "./pages/Panier";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// Routes Admin
import HomeAdmin from "./pages/admin/HomeAdmin";
import UserAdmin from './pages/admin/users';
import UserDetail from './pages/admin/users/UserDetail';
import CreateUser from './pages/admin/users/CreateUser';

import CategorieProductAdmin from './pages/admin/categorie-products';
import CreateCategorieProduct from './pages/admin/categorie-products/CreateCategorieProduct';

import ProductAdmin from './pages/admin/products';
import CreateProduct from './pages/admin/products/CreateProduct';

// Layouts
import AdminLayout from "./components/layouts/AdminLayout";
import ClientLayout from "./components/layouts/ClientLayout";



const App = () => {
  return (
    <>


      <Routes>
        {/*Route Client */}
        <Route path="/" element={<ClientLayout />} >
          <Route index element={<Homepage />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="shop" element={<Shop />} />
          <Route path="panier" element={<Panier />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profil />} />
        </Route>


        {/*Route Admin */}

        <Route path="/admin" element={<AdminLayout />} >
          <Route path="users" element={<UserAdmin />} />
          <Route path="users/add" element={<CreateUser />} /> {/*A nested route!*/}
          <Route path="users/:id" element={<UserDetail />} /> {/*A nested route!*/}

          <Route path="categorie-products" element={<CategorieProductAdmin />} />
          <Route path="categorie-products/add" element={<CreateCategorieProduct />} />

          <Route path="products" element={<ProductAdmin />} />CreateProductAdmin
          <Route path="products/add" element={<CreateProduct />} />
        </Route>
      </Routes>


    </>
  );
};

export default App;
