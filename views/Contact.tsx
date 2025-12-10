import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand">
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* Left Side - Image (Desktop) */}
        <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 hidden lg:block overflow-hidden relative">
           <img 
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Bubbalicious Salon Entrance" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
           <div className="absolute bottom-12 left-12 text-white max-w-md">
              <h2 className="font-serif text-5xl mb-4">Visit us in Rothwell.</h2>
              <p className="font-sans opacity-90 text-lg">Your hair transformation awaits at Deception Bay Road.</p>
           </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 min-h-screen overflow-y-auto">
          <div className="px-6 py-20 md:px-12 lg:px-20 max-w-2xl mx-auto">
            
            <Reveal animation="fade-in-up">
              <div className="mb-12">
                <h1 className="font-serif text-4xl md:text-5xl mb-4 text-charcoal">Get In Touch</h1>
                <p className="font-sans text-gray-600">Questions about extensions or colour? We'd love to help.</p>
              </div>
            </Reveal>

            <div className="space-y-12">
              
              {/* Contact Info */}
              <Reveal animation="fade-in-up" delay="delay-100" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blush-dark shadow-sm shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">Phone</p>
                        <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-blush-dark">{CONTACT_INFO.phone}</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blush-dark shadow-sm shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">Email</p>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-blush-dark">{CONTACT_INFO.email}</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blush-dark shadow-sm shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">Studio</p>
                        <a href={CONTACT_INFO.mapLink} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blush-dark">
                          {CONTACT_INFO.address}<br/>
                          {CONTACT_INFO.city}
                        </a>
                      </div>
                  </div>
              </Reveal>

              {/* Form */}
              <Reveal animation="fade-in-up" delay="delay-200">
                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <h2 className="font-serif text-2xl mb-6 text-charcoal">Send a Message</h2>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blush focus:ring-2 focus:ring-blush/20 outline-none transition-all"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blush focus:ring-2 focus:ring-blush/20 outline-none transition-all"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blush focus:ring-2 focus:ring-blush/20 outline-none transition-all bg-white">
                        <option>Blonde Transformation</option>
                        <option>Weft Extensions</option>
                        <option>Style Cut</option>
                        <option>Extension Consultation</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea 
                        rows={3} 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blush focus:ring-2 focus:ring-blush/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your current hair and goals..."
                      ></textarea>
                    </div>
                    <button className="w-full bg-charcoal text-white font-medium py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                      Send Message
                    </button>
                  </form>
                </div>
              </Reveal>

              {/* Hours */}
              <Reveal animation="fade-in-up" delay="delay-300">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-serif text-xl mb-4 text-charcoal">Opening Hours</h3>
                  <div className="space-y-2">
                    {CONTACT_INFO.hours.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm border-b border-gray-50 last:border-0 py-2">
                        <span className="text-gray-500">{item.day}</span>
                        <span className="font-medium text-charcoal">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;