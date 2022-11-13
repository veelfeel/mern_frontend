import React, { Suspense } from 'react';
import Loadable from 'react-loadable';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './redux/store';
import { selectIsAuth } from './redux/auth/selectors';
import { fetchAuthMe } from './redux/auth/asyncThunk';
import { selectFilters } from './redux/filters/selectors';
import { fetchProducts } from './redux/product/asyncThunk';

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
  const {
    searchValue,
    inverterFilter,
    minPriceFilter,
    maxPriceFilter,
    areaFilter,
    brandFilter,
    countryFilter,
    sort,
    page,
  } = useAppSelector(selectFilters);
  const isAuth = useAppSelector(selectIsAuth);

  const getProducts = async () => {
    const search = searchValue ? `&search=${searchValue}` : '';
    const inverter = inverterFilter.length > 0 ? `&inverter=${inverterFilter.toString()}` : '';
    const minPrice = minPriceFilter ? `&minPrice=${minPriceFilter}` : '';
    const maxPrice = maxPriceFilter ? `&maxPrice=${maxPriceFilter}` : '';
    const area = areaFilter.length > 0 ? `&area=${areaFilter.toString()}` : '';
    const brand = brandFilter.length > 0 ? `&brand=${brandFilter.toString()}` : '';
    const country = `&country=${countryFilter}`;
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? '-1' : '1';

    dispatch(
      fetchProducts({
        search,
        inverter,
        minPrice,
        maxPrice,
        area,
        brand,
        country,
        sortBy,
        order,
        page,
      }),
    );
  };

  React.useEffect(() => {
    getProducts();
  }, [
    searchValue,
    inverterFilter,
    minPriceFilter,
    maxPriceFilter,
    areaFilter,
    brandFilter,
    countryFilter,
    sort,
    page,
  ]);

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
          <Route path="products" element={<Products />} />
          <Route path="products/add-product" element={<AddProduct />} />
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
