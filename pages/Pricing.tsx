import React from 'react';
import { Check, X } from 'lucide-react';
import { useCart } from '../App'; // Importing context hook from App
import { useNavigate } from 'react-router-dom';
import { PageRoutes, ServicePlan } from '../types';

const PLANS: ServicePlan[] = [
  {
    id: 'full-service',
    name: 'Full Service',
    price: 85,
    description: 'Perfect for screened-in pools up to 15k gallons.',
    features: [
      'Weekly Chemical Check & Balance',
      'Skim Surface & Clean Tile Line',
      'Empty Pump & Skimmer Baskets',
      'Brushing Walls & Steps',
      'Filter Backwash (Monthly)',
      'Vacuuming (As Needed)'
    ]
  },
  {
    id: 'full-service-plus',
    name: 'Full Service Plus',
    price: 120,
    description: 'Ideal for unscreened pools or large pools needing extra care.',
    isPopular: true,
    features: [
      'All "Full Service" Features',
      'Heavy Debris Removal',
      'Storm Cleanup Priority',
      'Salt Cell Cleaning (Quarterly)',
      'Detailed Vacuuming Every Visit',
      'Phosphate Treatment Included'
    ]
  },
  {
    id: 'green-to-blue',
    name: 'Green to Blue',
    price: 150,
    description: 'One-time restorative service. Turns swamp water clear.',
    features: [
      'Multi-Visit Treatment (3-5 Days)',
      'Heavy Chemical Shock',
      'Algaecide Treatment',
      '24hr Circulation Monitoring',
      'Filter Cleaning Included',
      'Debris Dredging'
    ]
  }
];

export const Pricing: React.FC = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleSelectPlan = (plan: ServicePlan) => {
    addToCart({
      planId: plan.id,
      name: plan.name,
      price: plan.price,
      quantity: 1
    });
    navigate(PageRoutes.CHECKOUT);
  };

  return (
    <div className="bg-sand min-h-screen py-16 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-ocean mb-4">Transparent Pricing</h1>
          <p className="text-slate max-w-xl mx-auto">
            No hidden fees. No contracts. Just reliable service.
            <br/>
            <span className="text-sm italic text-gray-500">*Final pricing may vary based on exact pool size and condition.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-xl flex flex-col ${plan.isPopular ? 'border-4 border-aqua scale-105 z-10' : 'border border-gray-100'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-aqua text-ocean font-bold px-4 py-1 rounded-full text-sm shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 border-b border-gray-100 flex-grow-0">
                <h3 className="text-2xl font-bold text-ocean mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-6 h-10">{plan.description}</p>
                <div className="flex items-end">
                  <span className="text-sm text-gray-500 font-medium mb-1 mr-1">Starts at</span>
                  <span className="text-4xl font-bold text-slate">${plan.price}</span>
                  {plan.id !== 'green-to-blue' && <span className="text-gray-400 mb-1 ml-1">/mo</span>}
                </div>
              </div>

              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-4 rounded-lg font-bold transition-colors ${
                    plan.isPopular 
                      ? 'bg-ocean text-white hover:bg-blue-800' 
                      : 'bg-slate text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.id === 'green-to-blue' ? 'Schedule Restoration' : 'Select Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-slate mb-4">Need a custom solution or commercial service?</p>
          <a href="tel:8133522588" className="inline-flex items-center text-ocean font-bold hover:text-aqua">
            Call us for a free quote at 813-352-2588 <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};
