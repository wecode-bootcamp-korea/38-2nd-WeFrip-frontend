import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail/Detail';
import Host from './pages/Host/Host';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Mypage from './pages/Mypage/Mypage';
import Wishlist from './pages/Wishlist/Wishlist';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/host" element={<Host />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
