import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart, Droplets } from 'lucide-react';
import { PageRoutes } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  cartCount: number;
}

export const Layout: React.FC<LayoutProps> = ({ children, cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: PageRoutes.HOME },
    { name: 'Services', path: PageRoutes.SERVICES },
    { name: 'Pricing', path: PageRoutes.PRICING },
    { name: 'About', path: PageRoutes.ABOUT },
    { name: 'Contact', path: PageRoutes.CONTACT },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-ocean">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={PageRoutes.HOME} className="flex items-center space-x-2 group">
              <Droplets className="h-8 w-8 text-ocean group-hover:text-aqua transition-colors" />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-ocean leading-tight">American Blue Waters</span>
                <span className="text-xs text-slate uppercase tracking-wider">Pool Service</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-aqua ${
                    isActive(link.path) ? 'text-ocean font-bold' : 'text-slate'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:8133522588"
                className="flex items-center space-x-1 text-ocean font-bold hover:text-aqua transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>813-352-2588</span>
              </a>
              <Link to={PageRoutes.CHECKOUT} className="relative">
                 <ShoppingCart className="h-6 w-6 text-slate hover:text-ocean transition-colors" />
                 {cartCount > 0 && (
                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                     {cartCount}
                   </span>
                 )}
              </Link>
              <Link
                to={PageRoutes.PRICING}
                className="bg-ocean hover:bg-blue-800 text-white px-5 py-2 rounded-full font-bold shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <a href="tel:8133522588" className="bg-aqua/10 p-2 rounded-full text-ocean">
                <Phone className="h-5 w-5" />
              </a>
              <Link to={PageRoutes.CHECKOUT} className="relative text-slate">
                 <ShoppingCart className="h-6 w-6" />
                 {cartCount > 0 && (
                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                     {cartCount}
                   </span>
                 )}
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate hover:text-ocean focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-ocean hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={PageRoutes.PRICING}
                className="block w-full text-center mt-4 bg-ocean text-white px-4 py-3 rounded-md font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Service Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate text-white pt-12 pb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-display font-bold mb-4 flex items-center">
                <Droplets className="mr-2 text-aqua" /> American Blue Waters
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Crystal-Clear Pools — Reliable Weekly Service in Brandon, Riverview & Valrico.
              </p>
              <p className="text-aqua font-bold">
                Always on call for emergencies.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Brandon, FL 33511</li>
                <li>
                  <a href="tel:8133522588" className="hover:text-aqua transition-colors">
                    813-352-2588
                  </a>
                </li>
                <li>
                  <a href="mailto:service@americanbluewaterspoolservice.com" className="hover:text-aqua transition-colors break-words">
                    service@americanbluewaterspoolservice.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Service Area</h4>
              <p className="text-gray-300 text-sm mb-2">
                Serving Greater Brandon, Riverview & Valrico.
              </p>
              <div className="bg-gray-800 p-4 rounded text-xs text-gray-400">
                 Map Data ©2021 Google (Placeholder)
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
            <p>© 2021 American Blue Waters Pool Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
