import React, { useState } from 'react';
import { useCart } from '../App';
import { Trash2, CreditCard, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

export const Checkout: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = Math.max(0, subtotal - discount);

  const applyCoupon = () => {
    if (coupon.toLowerCase() === 'funinthesun21') {
      setDiscount(15);
      setCouponMessage('Coupon applied: $15.00 off!');
    } else {
      setDiscount(0);
      setCouponMessage('Invalid coupon code.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-sand flex items-center justify-center p-4 animate-fade-in">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-ocean mb-2">Order Confirmed!</h2>
          <p className="text-slate mb-6">
            Thank you for choosing American Blue Waters. We will contact you shortly at the provided number to schedule your first visit.
          </p>
          <Link to={PageRoutes.HOME} className="block w-full bg-ocean text-white py-3 rounded-lg font-bold">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-sand flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-slate mb-4">Your cart is currently empty</h2>
        <Link to={PageRoutes.PRICING} className="text-ocean font-bold hover:underline">
          Browse our service plans
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-sand min-h-screen py-12 animate-fade-in">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-display font-bold text-ocean mb-8">Secure Checkout</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-1 md:order-2">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
              <h3 className="text-lg font-bold text-slate mb-4">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start pb-4 border-b border-gray-100">
                    <div>
                      <h4 className="font-bold text-slate text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-bold text-slate">${item.price}</span>
                      <button 
                        onClick={() => removeFromCart(item.planId)}
                        className="text-red-400 text-xs mt-1 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-500 mb-1">Coupon Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Funinthesun21"
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:border-ocean focus:outline-none"
                  />
                  <button 
                    onClick={applyCoupon}
                    className="bg-slate text-white px-3 py-2 rounded text-sm font-bold"
                  >
                    Apply
                  </button>
                </div>
                {couponMessage && (
                  <p className={`text-xs mt-1 ${discount > 0 ? 'text-green-600' : 'text-red-500'}`}>
                    {couponMessage}
                  </p>
                )}
              </div>

              <div className="space-y-2 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold text-ocean pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="md:col-span-2 md:order-1">
             <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate mb-4 flex items-center">
                    <span className="bg-ocean text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">1</span>
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input required type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input required type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none transition" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input required type="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none transition" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Required for scheduling)</label>
                      <input required type="tel" placeholder="813-555-0123" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none transition" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-slate mb-4 flex items-center">
                    <span className="bg-ocean text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">2</span>
                    Service Address
                  </h3>
                  <div className="space-y-4">
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                       <input required type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none transition" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                         <input required type="text" defaultValue="Brandon" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none transition" />
                       </div>
                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                         <input required type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none transition" />
                       </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-slate mb-4 flex items-center">
                    <span className="bg-ocean text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">3</span>
                    Payment Details
                  </h3>
                  <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Lock className="w-4 h-4 mr-1" />
                      Secure SSL Connection
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <div className="relative">
                          <input required type="text" placeholder="0000 0000 0000 0000" className="w-full border border-gray-300 rounded px-4 py-2 pl-10 focus:border-ocean outline-none transition" />
                          <CreditCard className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Expiration</label>
                          <input required type="text" placeholder="MM/YY" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none transition" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                          <input required type="text" placeholder="123" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none transition" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <input type="checkbox" id="guest" className="mr-2" />
                    <label htmlFor="guest" className="text-sm text-gray-600">Create an account for faster checkout next time</label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-ocean hover:bg-blue-800 text-white font-bold text-lg py-4 rounded-lg shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Icon
function CheckIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  );
}
