import React, { useState } from 'react';
import { SERVICES_DATA, FAQ_DATA, POLICIES_DATA, BOOKING_URL } from '../constants';
import { ChevronDown, ChevronUp, AlertCircle, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

interface ServicesProps {
  onBookingClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBookingClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-sand pb-24">
      
      {/* Service Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden mb-16">
         <img 
          src="/images/hero-blonde.jpg" 
          alt="Hair washing service" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
         />
         <div className="absolute inset-0 bg-black/40"></div>
         <Reveal animation="fade-in-up" className="relative z-10 text-center text-white px-4">
            <h1 className="font-serif text-4xl md:text-6xl mb-4">Services & Pricing</h1>
            <p className="font-sans text-white/90 max-w-xl mx-auto text-lg font-light">
              Transparent pricing for exceptional results. Click any service to book via Square.
            </p>
         </Reveal>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Pricing Lists */}
        <div className="space-y-12">
          {SERVICES_DATA.map((category, idx) => (
            <Reveal key={idx} animation="fade-in-up" delay={`delay-${(idx + 1) * 100}`}>
              <div className={`rounded-2xl p-8 shadow-sm border ${
                  category.title.includes('Package') 
                    ? 'bg-white border-blush/30 ring-1 ring-blush/20 relative overflow-hidden' 
                    : 'bg-white border-charcoal/5'
                }`}>
                
                {/* Highlight for Packages */}
                {category.title.includes('Package') && (
                    <div className="absolute top-0 right-0 bg-blush text-dark-cta text-xs font-bold px-3 py-1 rounded-bl-lg font-sans uppercase tracking-wider">
                        Best Value
                    </div>
                )}

                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-sand">
                   <div className={`w-2 h-8 rounded-full ${category.title.includes('Package') ? 'bg-blush' : 'bg-charcoal/50'}`}></div>
                   <h2 className="font-serif text-2xl text-charcoal">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <button 
                      key={item.id} 
                      onClick={onBookingClick}
                      className="block group hover:bg-sand/30 p-4 rounded-lg transition-colors -mx-4 border border-transparent hover:border-sand w-full text-left"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <div className="mb-2 sm:mb-0 pr-4">
                          <h3 className="font-medium text-lg text-charcoal flex items-center gap-2 group-hover:text-blush-dark transition-colors">
                            {item.name}
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blush-dark" />
                          </h3>
                          {item.description && (
                            <p className="text-sm text-gray-500 mt-1 max-w-md leading-relaxed">{item.description}</p>
                          )}
                        </div>
                        <div className="flex flex-col items-end flex-shrink-0">
                          <span className="font-serif text-lg text-charcoal/80 whitespace-nowrap font-medium bg-sand/50 px-3 py-1 rounded-md group-hover:bg-white transition-colors">
                              {item.price}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Booking CTA */}
        <Reveal animation="zoom-in" className="my-20 text-center bg-charcoal text-white py-12 px-6 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
             <h3 className="font-serif text-2xl mb-4">Ready for your transformation?</h3>
             <p className="font-sans text-white/70 mb-8 max-w-md mx-auto">
               We use Square Bookings for seamless scheduling. No account creation required.
             </p>
             <button 
               onClick={onBookingClick}
               className="inline-block bg-blush text-dark-cta px-10 py-4 rounded-full font-medium hover:bg-white transition-colors shadow-lg"
             >
               Book Online Now
             </button>
          </div>
        </Reveal>

        {/* Policies Section */}
        <div className="mb-20">
            <Reveal animation="fade-in-up">
                <h2 className="font-serif text-3xl text-center mb-10 text-charcoal">Salon Policies</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {POLICIES_DATA.map((policy, idx) => (
                    <Reveal key={idx} animation="fade-in-up" delay={`delay-${idx * 100}`} className="bg-white p-6 rounded-xl border border-charcoal/5 shadow-sm">
                        <div className="flex items-center gap-3 mb-3 text-blush-dark">
                            <AlertCircle size={20} />
                            <h3 className="font-serif font-bold text-charcoal text-lg">{policy.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {policy.content}
                        </p>
                    </Reveal>
                ))}
            </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto">
          <Reveal animation="fade-in-up">
            <h2 className="font-serif text-3xl text-center mb-8">Frequently Asked Questions</h2>
          </Reveal>
          
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <Reveal key={index} animation="fade-in-up" delay={`delay-${index * 100}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-charcoal/5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-charcoal text-lg">{faq.question}</span>
                    {openFaq === index ? <ChevronUp size={20} className="text-blush-dark" /> : <ChevronDown size={20} className="text-gray-400" />}
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-sand/20 ${
                      openFaq === index ? 'max-h-48 py-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;