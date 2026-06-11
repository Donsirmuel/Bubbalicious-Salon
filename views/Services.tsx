import React, { useEffect, useState } from 'react';
import { SERVICES_DATA, FAQ_DATA, POLICIES_DATA } from '../constants';
import { ChevronDown, ChevronUp, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import Reveal from '../components/Reveal';

interface ServicesProps {
  onBookingClick: () => void;
}

const CATEGORY_VISUALS: Record<string, { hero: string; detail: string; mood: string }> = {
  'Colour Book': {
    hero: '/images/gallery-caramel.jpg',
    detail: '/images/gallery-corrective.jpg',
    mood: 'Dimensional colour crafted for depth and glow.'
  },
  'Keratin Smoothing': {
    hero: '/images/gallery-volume.jpg',
    detail: '/images/hero-salon.jpg',
    mood: 'Silk-finish smoothing with a soft, natural movement.'
  },
  'Hair Extensions': {
    hero: '/images/hero-extensions.jpg',
    detail: '/images/gallery-extensions.jpg',
    mood: 'Luxury length and fullness, custom-blended to your tone.'
  },
  Foils: {
    hero: '/images/gallery-blonde.jpg',
    detail: '/images/gallery-faceframe.jpg',
    mood: 'Precision foiling for bright ribbons and seamless blend.'
  },
  Balayage: {
    hero: '/images/gallery-balayage.jpg',
    detail: '/images/gallery-banding.jpg',
    mood: 'Hand-painted softness that grows out beautifully.'
  },
  'Blowdry & Styling': {
    hero: '/images/hero-blonde.jpg',
    detail: '/images/hero-salon.jpg',
    mood: 'Polished, bouncy finish designed to last all day.'
  }
};

const INSPIRATION_IMAGES = [
  {
    src: '/images/gallery-blonde.jpg',
    title: 'Signature Blonde',
    caption: 'Clean lift with creamy finish.'
  },
  {
    src: '/images/gallery-balayage.jpg',
    title: 'Lived-In Balayage',
    caption: 'Soft root melt and sun-kissed pieces.'
  },
  {
    src: '/images/gallery-extensions.jpg',
    title: 'Seamless Extensions',
    caption: 'Invisible blends, high-impact volume.'
  }
];

const Services: React.FC<ServicesProps> = ({ onBookingClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const selectedCategory = SERVICES_DATA[activeCategory];
  const selectedVisual = CATEGORY_VISUALS[selectedCategory.title] ?? {
    hero: '/images/hero-blonde.jpg',
    detail: '/images/hero-salon.jpg',
    mood: 'Tailored appointments designed around your hair goals.'
  };
  const visibleServices = showAllServices ? selectedCategory.items : selectedCategory.items.slice(0, 8);
  const hiddenServiceCount = selectedCategory.items.length - visibleServices.length;

  useEffect(() => {
    setShowAllServices(false);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-sand pb-24">
      
      {/* Service Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden mb-16">
         <img 
          src="/images/hero-blonde.jpg" 
          alt="Hair washing service" 
         className="absolute inset-0 w-full h-full object-cover opacity-95"
         />
        <div className="absolute inset-0 bg-black/28"></div>
        <Reveal animation="fade-in-up" className="relative z-10 text-center text-white px-4">
          <div className="mx-auto max-w-2xl rounded-3xl bg-black/35 px-6 py-6 sm:px-8 sm:py-8 shadow-2xl">
            <h1 className="font-serif text-4xl md:text-6xl mb-4 text-white" style={{ textShadow: '0 12px 28px rgba(143, 140, 140, 0.75)' }}>
              Services & Pricing
            </h1>
            <p className="font-sans text-white/95 max-w-xl mx-auto text-base sm:text-lg font-light leading-relaxed" style={{ textShadow: '0 8px 18px rgba(0, 0, 0, 0.65)' }}>
              Transparent pricing for exceptional results. Click any service to book via Square.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Category Navigation */}
        <Reveal animation="fade-in-up">
          <section className="mb-12 bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/60 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="font-serif text-2xl text-charcoal">Browse by Experience</h2>
              <span className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal/60 font-medium">
                <Sparkles size={14} />
                Signature Menu
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {SERVICES_DATA.map((category, idx) => (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(idx)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    activeCategory === idx
                      ? 'bg-charcoal text-white border-charcoal shadow-md'
                      : 'bg-white text-charcoal border-charcoal/10 hover:border-blush/50 hover:text-blush-dark'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Inspiration Rail */}
        <Reveal animation="fade-in-up" delay="delay-75">
          <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {INSPIRATION_IMAGES.map((image) => (
              <article
                key={image.title}
                className="relative overflow-hidden rounded-3xl min-h-[190px] sm:min-h-[220px] group"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-110 saturate-110 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/22 to-black/16" />
                <div className="relative z-10 p-5 h-full flex flex-col justify-end text-white">
                  <div className="max-w-[92%] rounded-2xl bg-black/28 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/80 mb-2">Inspiration</p>
                    <h3 className="font-serif text-2xl mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.caption}</p>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </Reveal>

        {/* Focused Service Section */}
        <Reveal animation="fade-in-up" delay="delay-100">
          <section className="mb-16 rounded-3xl border border-charcoal/10 bg-white overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.35fr]">
              <div className="relative min-h-[360px] md:min-h-[440px] p-5 sm:p-6 md:p-8 bg-charcoal text-white overflow-hidden">
                <img
                  src={selectedVisual.hero}
                  alt={`${selectedCategory.title} service inspiration`}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 brightness-110 saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal/62 via-charcoal/30 to-charcoal/48" />
                <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="max-w-md rounded-2xl bg-black/25 px-4 py-4">
                    <p className="text-white/80 text-xs uppercase tracking-[0.2em] mb-3 font-medium">Currently Viewing</p>
                    <h3 className="font-serif text-3xl md:text-4xl mb-4">{selectedCategory.title}</h3>
                    <p className="text-white/90 max-w-sm leading-relaxed">{selectedVisual.mood}</p>
                  </div>
                  <div className="relative mt-8 max-w-[170px] sm:max-w-[220px] ml-auto rounded-2xl overflow-hidden border border-white/45 shadow-2xl">
                    <img
                      src={selectedVisual.detail}
                      alt={`${selectedCategory.title} close-up result`}
                      className="w-full h-40 object-cover brightness-105"
                    />
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-charcoal/55 font-medium">Signature Menu</p>
                  <button
                    onClick={onBookingClick}
                    className="text-sm font-medium text-blush-dark hover:text-charcoal transition-colors"
                  >
                    Open booking portal
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {visibleServices.map((item) => (
                    <button
                      key={item.id}
                      onClick={onBookingClick}
                      className="group text-left bg-sand/30 border border-transparent hover:border-blush/40 hover:bg-sand/60 rounded-2xl p-4 sm:p-5 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="font-medium text-base sm:text-lg text-charcoal group-hover:text-blush-dark transition-colors">
                          {item.name}
                        </h4>
                        <span className="font-serif text-charcoal/80 whitespace-nowrap bg-white px-3 py-1 rounded-md text-sm">
                          {item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
                      )}
                      <span className="inline-flex items-center gap-2 text-sm text-blush-dark font-medium">
                        Book this service
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </button>
                  ))}
                </div>

                {hiddenServiceCount > 0 && (
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={() => setShowAllServices(true)}
                      className="px-6 py-3 rounded-full border border-charcoal/15 text-sm font-medium text-charcoal hover:border-blush/40 hover:text-blush-dark transition-colors"
                    >
                      Show {hiddenServiceCount} more services
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Compact Category Glance */}
        <Reveal animation="fade-in-up" delay="delay-200">
          <section className="mb-20 rounded-3xl bg-white p-6 md:p-8 border border-charcoal/5 shadow-sm">
            <h3 className="font-serif text-2xl text-charcoal mb-6">At a Glance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SERVICES_DATA.map((category, idx) => (
                <button
                  key={`${category.title}-glance`}
                  onClick={() => setActiveCategory(idx)}
                  className={`relative text-left rounded-2xl p-5 border transition-all overflow-hidden ${
                    activeCategory === idx
                      ? 'border-blush/40 bg-blush/10'
                      : 'border-charcoal/10 hover:border-charcoal/30 bg-sand/20'
                  }`}
                >
                  <img
                    src={(CATEGORY_VISUALS[category.title]?.hero) ?? '/images/hero-blonde.jpg'}
                    alt={`${category.title} preview`}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 brightness-110 saturate-110"
                  />
                  <div className="relative z-10">
                    <h4 className="font-serif text-xl text-charcoal mb-2">{category.title}</h4>
                    <p className="text-sm text-gray-700">{category.items.length} services</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </Reveal>

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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {POLICIES_DATA.map((policy, idx) => (
              <Reveal key={idx} animation="fade-in-up" delay={`delay-${idx * 100}`} className="bg-white p-6 rounded-2xl border border-charcoal/5 shadow-sm hover:shadow-md transition-shadow">
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