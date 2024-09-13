
import { useState, useEffect } from 'react';
import Navbar from './Commponents/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Commponents/Footer/Footer';
import './firebase';
import men_banner from './Commponents/Assets/banner_mens.png';
import women_banner from './Commponents/Assets/banner_women.png';
import kids_banner from './Commponents/Assets/banner_kids.png';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuthChange = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Shop /> : <Navigate to="/login" />} />
          <Route path="/mens" element={isAuthenticated ? <ShopCategory bannner={men_banner} category="men" /> : <Navigate to="/login" />} />
          <Route path="/womens" element={isAuthenticated ? <ShopCategory bannner={women_banner} category="women" /> : <Navigate to="/login" />} />
          <Route path="/kids" element={isAuthenticated ? <ShopCategory bannner={kids_banner} category="kid" /> : <Navigate to="/login" />} />
          <Route path="/product/:productId" element={isAuthenticated ? <Product /> : <Navigate to="/login" />} />
          <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginSignup onAuthChange={handleAuthChange} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

