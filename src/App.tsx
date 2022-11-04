import React, { Suspense } from 'react';
import Loadable from 'react-loadable';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './redux/store';
import { selectIsAuth } from './redux/auth/selectors';
import { fetchAuthMe } from './redux/auth/asyncThunk';

import './app.scss';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Register from './pages/Register';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Products from './components/admin/Products';
import AddProduct from './components/admin/AddProduct';
import Users from './components/admin/Users';

// const Favourites = Loadable({
//   loader: () => import(/* webpackChunkName: 'Favourites' */ './pages/Favourites'),
//   loading: () => <div>Идет загрузка избранного...</div>,
// });

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: 'Cart' */ './pages/Cart'),
  loading: () => <div>Идет загрузка корзины...</div>,
});

const Product = React.lazy(() => import(/* webpackChunkName: 'Product' */ './pages/Product'));
const NotFound = React.lazy(() => import(/* webpackChunkName: 'NotFound' */ './pages/NotFound'));

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="product/:id"
          element={
            <Suspense>
              <Product />
            </Suspense>
          }
        />
        {/* <Route
          path="favourites"
          element={
            <Suspense fallback={<div>Загрузка избранного...</div>}>
              <Favourites />
            </Suspense>
          }
        /> */}
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="signin" element={<Signin />} />
        <Route path="profile" element={<Profile />} />
        <Route path="admin" element={<Dashboard />}>
          <Route path="products" element={<Products />}>
            <Route path="add-product" element={<AddProduct />} />
          </Route>
          <Route path="users" element={<Users />} />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
