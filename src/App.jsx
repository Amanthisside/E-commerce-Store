import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Header from './components/Header';
import Home from './pages/Home';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductGrid />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">About EliteStore</h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                      EliteStore is your premium destination for high-quality products. 
                      We curate the best items from trusted brands to ensure you get 
                      exceptional value and satisfaction with every purchase.
                    </p>
                  </div>
                </div>
              } />
              <Route path="/contact" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <div className="text-lg text-gray-600 space-y-2">
                      <p>Email: support@elitestore.com</p>
                      <p>Phone: (555) 123-4567</p>
                      <p>Address: 123 Commerce St, City, State 12345</p>
                    </div>
                  </div>
                </div>
              } />
            </Routes>
          </div>
        </Router>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;