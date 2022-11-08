import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { selectIsAuth } from '../redux/auth/selectors';
import { useAppSelector } from '../redux/store';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard__content">
        <div className="admin-dashboard__sidebar">
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              isActive
                ? 'admin-dashboard__link admin-dashboard__link--active'
                : 'admin-dashboard__link'
            }>
            Товары
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive
                ? 'admin-dashboard__link admin-dashboard__link--active'
                : 'admin-dashboard__link'
            }>
            Пользователи
          </NavLink>
        </div>
        <div className="admin-dashboard__product-list-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
