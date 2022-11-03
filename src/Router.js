import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products/Products';
import Host from './pages/Host/Host';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Mypage from './pages/Mypage/Mypage';
import Wishlist from './pages/Wishlist/Wishlist';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import MainLayout from 'pages/MainLayout/MainLayout';
import KakaoRedirectHandler from './kakao/KakaoRedirectHandler';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/:categories" element={<List />} />
          <Route path="/list/:categories/:subCategories" element={<List />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/oauth/callback/kakao"
            element={<KakaoRedirectHandler />}
          />
        </Route>
        <Route path="/host" element={<Host />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
