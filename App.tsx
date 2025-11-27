import React, { createContext, useContext, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { Checkout } from './pages/Checkout';
import { Contact } from './pages/Contact';
import { PageRoutes, CartItem } from './types';

// --- Cart Context ---
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (planId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

// --- Main App ---
const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Persist cart to local storage (optional enhancement, kept simple here)
  useEffect(() => {
    // Logic to load cart from localStorage could go here
  }, []);

  const addToCart = (newItem: CartItem) => {
    setCart((prev) => {
      // Simple logic: if item exists, just update quantity (or ignore for subscriptions usually 1 per person)
      const existing = prev.find((item) => item.planId === newItem.planId);
      if (existing) {
        return prev.map((item) =>
          item.planId === newItem.planId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, newItem];
    });
  };

  const removeFromCart = (planId: string) => {
    setCart((prev) => prev.filter((item) => item.planId !== planId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <Router>
        <Layout cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}>
          <Routes>
            <Route path={PageRoutes.HOME} element={<Home />} />
            <Route path={PageRoutes.SERVICES} element={<Services />} />
            <Route path={PageRoutes.PRICING} element={<Pricing />} />
            <Route path={PageRoutes.CHECKOUT} element={<Checkout />} />
            <Route path={PageRoutes.CONTACT} element={<Contact />} />
            <Route path={PageRoutes.ABOUT} element={<Home />} /> {/* Reusing Home for About as per spec brevity */}
            <Route path="*" element={<Navigate to={PageRoutes.HOME} replace />} />
          </Routes>
        </Layout>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
