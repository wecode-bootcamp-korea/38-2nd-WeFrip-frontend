import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
