import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, Sidebar } from '../components';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
