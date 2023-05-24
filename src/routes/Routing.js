import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from '../pages/auth/AdminLogin';
import Categories from '../pages/dashboard/Categories';
import CreateCategory from '../pages/dashboard/CreateCategory';
import CreateProduct from '../pages/dashboard/CreateProduct';
import EditProduct from '../pages/dashboard/EditProduct';
import Products from '../pages/dashboard/Products';
import UpdateCategory from '../pages/dashboard/UpdateCategory';
import Private from './Private';
import Public from './Public';
import Home from '../pages/home/Home';
import Login from '../pages/home/auth/Login';
import Register from '../pages/home/auth/Register';
import Dashboard from '../pages/users/Dashboard';
import UserRoute from './UserRoute';
import UserAuthRoute from './UserAuthRoute';
import CatProducts from '../pages/home/CatProducts';
import Product from '../pages/home/Product';
import SearchProducts from '../pages/home/SearchProduct';
import Cart from '../pages/home/Cart';
import Orders from '../pages/dashboard/Orders';
import OrderDetails from '../pages/dashboard/OrderDetails';
import UserOrders from '../pages/users/UserOrders';
import UserOrderDetails from '../pages/users/UserOrderDetails';
import Statistics from '../pages/dashboard/Statistics';
import AboutUs from '../components/home/AboutUs';
import PrivacyPolicy from '../components/home/PrivacyPolicy';
import ContactUs from '../components/home/ContactUs';
import Shop from '../pages/home/Shop';
import Transactions from '../pages/dashboard/Transactions';
import ProductUpdates from '../pages/dashboard/ProductUpdates';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="cat-products/:name" element={<CatProducts />} />
        <Route path="cat-products/:name/:page" element={<CatProducts />} />
        <Route
          path="search-products/:keyword/:page"
          element={<SearchProducts />}
        />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:name" element={<Product />} />
        <Route element={<UserAuthRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<UserRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="orders" element={<UserOrders />} />
          <Route path="orders/:page" element={<UserOrders />} />
          <Route path="user-order-details/:id" element={<UserOrderDetails />} />
        </Route>
        <Route path="auth">
          <Route
            path="admin-login"
            element={
              <Public>
                <AdminLogin />
              </Public>
            }
          />
        </Route>
        <Route path="dashboard">
          <Route
            path="products"
            element={
              <Private>
                <Products />
              </Private>
            }
          />
          <Route
            path="products/:page"
            element={
              <Private>
                <Products />
              </Private>
            }
          />
          <Route
            path="product-updates"
            element={
              <Private>
                <ProductUpdates />
              </Private>
            }
          />
          <Route
            path="edit-product/:id"
            element={
              <Private>
                <EditProduct />
              </Private>
            }
          />
          <Route
            path="categories"
            element={
              <Private>
                <Categories />
              </Private>
            }
          />
          <Route
            path="categories/:page"
            element={
              <Private>
                <Categories />
              </Private>
            }
          />
          <Route
            path="create-category"
            element={
              <Private>
                <CreateCategory />
              </Private>
            }
          />
          <Route
            path="update-category/:id"
            element={
              <Private>
                <UpdateCategory />
              </Private>
            }
          />
          <Route
            path="create-product"
            element={
              <Private>
                <CreateProduct />
              </Private>
            }
          />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:page" element={<Orders />} />
          <Route path="order-details/:id" element={<OrderDetails />} />
          <Route path="sales-stats" element={<Statistics />} />
          <Route path="report/all" element={<Transactions />} />
          <Route path="report/all/:page" element={<Transactions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
