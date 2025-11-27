import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Droplet, Sun, Wrench, ArrowRight, Star, Droplets } from 'lucide-react';
import { PageRoutes } from '../types';
import { generatePoolTip } from '../services/gemini';

export const Home: React.FC = () => {
  const [tip, setTip] = useState<string>('');
  const [loadingTip, setLoadingTip] = useState(false);

  const fetchTip = async () => {
    setLoadingTip(true);
    const result = await generatePoolTip("keeping pool water clear in Florida summer");
    setTip(result);
    setLoadingTip(false);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-ocean h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/id/10/1920/1080"
            alt="Crystal clear residential pool"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean/90 to-ocean/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <span className="inline-block bg-aqua text-ocean font-bold px-3 py-1 rounded-full text-sm mb-4">
              Serving Brandon, Riverview & Valrico
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight shadow-sm">
              Crystal-Clear Pools — Reliable Weekly Service
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 font-light">
              Professional chemical balancing, filter care, algae treatments & emergency support.
              <br/>
              <span className="font-bold text-aqua mt-2 block">Call 813-352-2588</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={PageRoutes.PRICING}
                className="bg-aqua text-ocean hover:bg-white hover:text-ocean px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg text-center"
              >
                Book Service
              </Link>
              <a
                href="tel:8133522588"
                className="border-2 border-white text-white hover:bg-white hover:text-ocean px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
              >
                Call Now
              </a>
            </div>
            
            <div className="mt-8 bg-white/10 backdrop-blur-sm p-3 rounded-lg inline-block border border-white/20">
              <p className="text-sm">
                🎉 New Customers: Use code <strong className="text-aqua">Funinthesun21</strong> for $15 off!
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-sand"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-ocean mb-4">Our Premium Services</h2>
            <p className="text-slate/70 max-w-2xl mx-auto">We offer comprehensive pool care solutions to keep your water sparkling and healthy year-round.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Droplet, title: 'Chemical Balancing', desc: 'Precise pH and chlorine management for safe swimming.' },
              { icon: Wrench, title: 'Filter Maintenance', desc: 'Regular cleaning and checks to ensure optimal flow.' },
              { icon: Sun, title: 'Algae Treatment', desc: 'Expert removal and prevention of green, yellow, and black algae.' },
              { icon: ShieldCheck, title: 'Weekly Cleaning', desc: 'Skimming, brushing, and vacuuming for a pristine finish.' },
              { icon: Star, title: 'Green to Blue', desc: 'Complete restoration for neglected pools. Get swimming again fast.' },
              { icon: Droplets, title: 'Pressure Washing', desc: 'Deck and cage cleaning to revitalize your pool area.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-aqua group">
                <service.icon className="h-12 w-12 text-ocean mb-4 group-hover:text-aqua transition-colors" />
                <h3 className="text-xl font-bold mb-2 text-slate">{service.title}</h3>
                <p className="text-gray-500 mb-4">{service.desc}</p>
                <Link to={PageRoutes.SERVICES} className="text-ocean font-bold flex items-center text-sm group-hover:underline">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & AI Tip Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
           <div className="md:w-1/2">
              <h2 className="text-3xl font-display font-bold text-ocean mb-6">Why Neighbors Trust Us</h2>
              <ul className="space-y-4">
                {[
                  'Always on call for emergencies — 813-352-2588',
                  'Locally owned & operated in Brandon, FL',
                  'Certified technicians in uniformed apparel',
                  'No contracts required — earn our keep every visit'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ShieldCheck className="h-6 w-6 text-aqua mr-3 flex-shrink-0" />
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h4 className="font-bold text-ocean mb-2 flex items-center">
                  <Sun className="h-5 w-5 mr-2" />
                  Pool Care Tip of the Day
                </h4>
                <p className="text-sm text-slate italic mb-4">
                  "{tip || "Click below to get a professional tip from our AI pool expert."}"
                </p>
                <button 
                  onClick={fetchTip}
                  disabled={loadingTip}
                  className="text-xs bg-ocean text-white px-4 py-2 rounded hover:bg-blue-800 disabled:opacity-50"
                >
                  {loadingTip ? 'Consulting Expert...' : 'Get New Tip'}
                </button>
              </div>
           </div>
           <div className="md:w-1/2 relative">
             <div className="absolute -inset-4 bg-aqua/20 rounded-full blur-3xl opacity-50"></div>
             <img src="https://picsum.photos/id/175/800/800" alt="Happy technician" className="relative rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500" />
           </div>
        </div>
      </section>
    </div>
  );
};