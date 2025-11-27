import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-sand min-h-screen animate-fade-in">
      {/* Header */}
      <div className="bg-ocean text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Ready for a cleaner pool? We're here to help. Reach out for a free quote or to schedule emergency service.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 h-full">
            <h2 className="text-2xl font-bold text-ocean mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-ocean" />
                </div>
                <div>
                  <h3 className="font-bold text-slate">Phone</h3>
                  <p className="text-gray-500 text-sm mb-1">Available 24/7 for emergencies</p>
                  <a href="tel:8133522588" className="text-xl font-bold text-ocean hover:text-aqua">813-352-2588</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-ocean" />
                </div>
                <div>
                  <h3 className="font-bold text-slate">Email</h3>
                  <a href="mailto:service@americanbluewaterspoolservice.com" className="text-ocean hover:text-aqua break-all">
                    service@americanbluewaterspoolservice.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-ocean" />
                </div>
                <div>
                  <h3 className="font-bold text-slate">Service Area</h3>
                  <p className="text-gray-600">
                    Brandon, FL 33511<br/>
                    Serving Greater Brandon, Valrico & Riverview
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center relative overflow-hidden group">
               <img 
                src="https://picsum.photos/id/124/800/600?blur=1" 
                alt="Map Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-50"
               />
               <div className="relative z-10 text-center">
                 <MapPin className="h-10 w-10 text-red-500 mx-auto mb-2 animate-bounce" />
                 <p className="font-bold text-slate">Service Radius Map</p>
                 <span className="text-xs text-slate">Google Maps Integration Placeholder</span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-ocean mb-6">Request a Quote</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none" placeholder="813..." />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none bg-white">
                  <option>Full Service Maintenance</option>
                  <option>Green to Blue Restoration</option>
                  <option>Filter Cleaning</option>
                  <option>Repair / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Days</label>
                <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none" placeholder="e.g., Thursdays or Fridays" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded px-4 py-2 focus:border-ocean outline-none" placeholder="Tell us about your pool..."></textarea>
              </div>

              <button type="button" className="w-full bg-ocean hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
