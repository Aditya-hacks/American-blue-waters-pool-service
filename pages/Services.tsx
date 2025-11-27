import React from 'react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

export const Services: React.FC = () => {
  return (
    <div className="bg-sand min-h-screen py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-display font-bold text-ocean text-center mb-4">Our Services</h1>
        <p className="text-center text-slate max-w-2xl mx-auto mb-16">
          Comprehensive care packages designed to fit every pool and every budget.
        </p>

        {/* Green to Blue Highlight */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-0">
             <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-aqua font-bold tracking-wider text-sm uppercase mb-2">Restoration Service</span>
                <h2 className="text-3xl font-bold text-ocean mb-4">From Green to Blue</h2>
                <p className="text-slate mb-6 leading-relaxed">
                  Has your pool turned into a swamp? Don't drain it! Our "Green to Blue" restoration service utilizes industrial-grade shock treatments and rigorous filtration to bring your oasis back to life in as little as 3-5 days.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-slate">
                  <li className="flex items-center">✓ Algae kill & flocculant treatment</li>
                  <li className="flex items-center">✓ Filter cleaning & pressure restoration</li>
                  <li className="flex items-center">✓ Debris removal & vacuuming</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={PageRoutes.PRICING} className="bg-ocean text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition">
                    View Pricing
                  </Link>
                  <Link to={PageRoutes.CONTACT} className="border border-ocean text-ocean text-center px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                    Request Quote
                  </Link>
                </div>
             </div>
             <div className="bg-gray-100 p-8 flex items-center justify-center">
               <div className="w-full">
                 <h3 className="text-center font-bold text-slate mb-4">Drag to see the transformation</h3>
                 <BeforeAfterSlider />
               </div>
             </div>
          </div>
        </section>

        {/* Other Services List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Full Service Maintenance",
              price: "From $85/mo",
              desc: "The worry-free package. We handle everything: skimming, brushing, vacuuming, emptying baskets, and balancing chemicals."
            },
            {
              title: "Chemical Only",
              price: "Call for Quote",
              desc: "Perfect for the DIYer who hates handling hazardous chemicals. We test and balance your water weekly."
            },
            {
              title: "Filter Cleaning",
              price: "Included in Plus",
              desc: "Deep cleaning of cartridge or DE filters to ensure maximum flow and crystal clear water clarity."
            },
            {
              title: "Equipment Repair",
              price: "Consultation",
              desc: "Pump noisy? Heater not working? We diagnose and repair all major brands including Hayward, Pentair, and Jandy."
            },
            {
              title: "Leak Detection",
              price: "Consultation",
              desc: "Losing water? We use specialized equipment to pinpoint leaks in liners, pipes, or structural concrete."
            },
            {
              title: "Storm Cleanup",
              price: "Custom Quote",
              desc: "Post-hurricane or storm cleanup services to remove heavy debris and restore chemical balance."
            }
          ].map((item, idx) => (
             <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-ocean hover:translate-y-[-4px] transition-transform">
                <h3 className="text-xl font-bold text-slate mb-1">{item.title}</h3>
                <p className="text-aqua font-bold text-sm mb-3">{item.price}</p>
                <p className="text-slate/80 text-sm leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};
