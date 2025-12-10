import React from 'react';
import { Star, ArrowRight, Sparkles, Scissors, UserCheck, Calendar, Quote } from 'lucide-react';
import { BOOKING_URL, REVIEWS_DATA } from '../constants';
import { ViewState } from '../types';
import Reveal from '../components/Reveal';
import HeroCarousel from '../components/HeroCarousel';
import InstagramFeed from '../components/InstagramFeed';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* HERO SECTION WITH CAROUSEL */}
      <HeroCarousel onNavigate={onNavigate} />

      {/* WHY BUBBALICIOUS - VISUAL CARDS */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        {/* Background Texture with Overlay */}
        <div className="absolute inset-0 -z-10">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop" 
              alt="Texture Background" 
              loading="lazy"
              className="w-full h-full object-cover opacity-5 grayscale" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-sand via-sand/95 to-sand"></div>
        </div>

        <Reveal animation="fade-in-up">
          <div className="text-center mb-16 relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-4">The Bubbalicious Experience</h2>
            <div className="w-16 h-0.5 bg-blush mx-auto mb-6"></div>
            <p className="max-w-xl mx-auto text-gray-600 font-sans leading-relaxed">We don't just do hair; we curate confidence. Here is what sets our studio apart from the rest.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Card 1 */}
          <Reveal animation="fade-in-up" delay="delay-100" className="group relative h-[450px] rounded-2xl overflow-hidden shadow-xl cursor-pointer border border-white/20">
             <img 
               src="https://images.unsplash.com/photo-1595476103518-3c8ad029e4a8?q=80&w=800&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               alt="Blonde hair"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent p-8 flex flex-col justify-end">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-6 border border-white/20 group-hover:bg-blush group-hover:text-charcoal transition-colors">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-serif text-2xl text-white mb-3 tracking-wide">Blonde Specialists</h3>
                <div className="h-0.5 w-12 bg-blush mb-4 transition-all duration-500 group-hover:w-full"></div>
                <p className="text-white/90 text-sm font-sans leading-relaxed">
                  Signature bright, creamy blondes that maintain the integrity of your hair.
                </p>
             </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal animation="fade-in-up" delay="delay-200" className="group relative h-[450px] rounded-2xl overflow-hidden shadow-xl cursor-pointer border border-white/20">
             <img 
               src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               alt="Extensions"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent p-8 flex flex-col justify-end">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-6 border border-white/20 group-hover:bg-blush group-hover:text-charcoal transition-colors">
                  <Scissors size={24} />
                </div>
                <h3 className="font-serif text-2xl text-white mb-3 tracking-wide">Weft Extensions</h3>
                <div className="h-0.5 w-12 bg-blush mb-4 transition-all duration-500 group-hover:w-full"></div>
                <p className="text-white/90 text-sm font-sans leading-relaxed">
                  Specializing in invisible bead methods for natural length and volume.
                </p>
             </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal animation="fade-in-up" delay="delay-300" className="group relative h-[450px] rounded-2xl overflow-hidden shadow-xl cursor-pointer border border-white/20">
             <img 
               src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=800&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               alt="Salon Service"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent p-8 flex flex-col justify-end">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-6 border border-white/20 group-hover:bg-blush group-hover:text-charcoal transition-colors">
                  <UserCheck size={24} />
                </div>
                <h3 className="font-serif text-2xl text-white mb-3 tracking-wide">Relaxed Vibe</h3>
                <div className="h-0.5 w-12 bg-blush mb-4 transition-all duration-500 group-hover:w-full"></div>
                <p className="text-white/90 text-sm font-sans leading-relaxed">
                   A welcoming, "bubbly" environment where you can truly unwind.
                </p>
             </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#2C2A2A_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal animation="fade-in-up" className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-5xl text-charcoal">Client Love</h2>
                <p className="mt-4 text-gray-600 font-sans">Don't just take our word for it. Read our 100+ 5-star reviews.</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {REVIEWS_DATA.map((review, idx) => (
                    <Reveal key={review.id} animation="fade-in-up" delay={`delay-${idx * 100}`}>
                        <div className="bg-sand/30 p-8 rounded-2xl shadow-sm border border-sand h-full flex flex-col relative transition-transform hover:-translate-y-1 duration-300">
                            <Quote className="text-blush/50 absolute top-6 right-6" size={40} />
                            <div className="flex text-amber-400 mb-4">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="font-sans text-charcoal/80 leading-relaxed mb-6 flex-grow italic">"{review.text}"</p>
                            <p className="font-serif font-bold text-charcoal">— {review.name}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
            <Reveal animation="fade-in-up" className="text-center mt-12">
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-charcoal hover:text-blush transition-colors">
                    Read more on Google <ArrowRight size={16} className="ml-2" />
                </a>
            </Reveal>
        </div>
      </section>

      {/* SPLIT FEATURE SECTION - Philosophy */}
      <section className="py-24 relative overflow-hidden bg-charcoal">
        {/* Distinctive Background */}
        <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1521590832896-40226c61ebac?q=80&w=2000&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-10 mix-blend-overlay" 
               alt="Background Texture"
               loading="lazy" 
             />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Composition */}
            <Reveal animation="slide-in-left" className="w-full lg:w-1/2 relative">
               <div className="relative z-10">
                  <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/20 rounded-lg pointer-events-none z-20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop" 
                    alt="Stylist working" 
                    className="rounded-lg shadow-2xl w-[90%] mx-auto lg:mx-0 object-cover aspect-[3/4]"
                    loading="lazy" 
                  />
                  {/* Floating Card */}
                  <div className="absolute bottom-10 -right-4 md:-right-10 bg-white p-6 rounded-xl shadow-xl max-w-[240px] hidden md:block animate-fade-in-up delay-500 border border-sand">
                    <div className="flex items-center space-x-2 mb-2">
                       <Star className="text-amber-400 w-4 h-4" fill="currentColor" />
                       <Star className="text-amber-400 w-4 h-4" fill="currentColor" />
                       <Star className="text-amber-400 w-4 h-4" fill="currentColor" />
                       <Star className="text-amber-400 w-4 h-4" fill="currentColor" />
                       <Star className="text-amber-400 w-4 h-4" fill="currentColor" />
                    </div>
                    <p className="font-serif italic text-charcoal text-sm">"The only place I trust with my blonde. Absolutely stunning results every time."</p>
                  </div>
               </div>
               {/* Decorative Circle */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-blush/10 rounded-full blur-3xl -z-0"></div>
            </Reveal>

            {/* Text Content */}
            <Reveal animation="slide-in-right" className="w-full lg:w-1/2 text-white">
              <span className="text-blush font-sans font-bold text-xs tracking-widest uppercase mb-4 block">Our Philosophy</span>
              <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
                We don't just do hair. <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush to-white italic pr-2">We build confidence.</span>
              </h2>
              <p className="font-sans text-white/70 mb-6 leading-relaxed text-lg">
                At Bubbalicious Hair & Co, we believe your hair is your crown. Located in the heart of Rothwell, our boutique studio offers a relaxed, welcoming environment where you can unwind while we work our magic.
              </p>
              
              <div className="space-y-6 mb-10">
                 <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-5 text-blush shadow-sm">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-white text-lg">Custom Colour</h4>
                      <p className="text-sm text-white/60 mt-1">Tailored formulations to match your skin tone and lifestyle.</p>
                    </div>
                 </div>
                 <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-5 text-blush shadow-sm">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-white text-lg">Sustainable Beauty</h4>
                      <p className="text-sm text-white/60 mt-1">We prioritize hair health with premium bond builders like K18.</p>
                    </div>
                 </div>
              </div>

              <button 
                onClick={() => onNavigate('TEAM')}
                className="group flex items-center space-x-3 text-white font-medium border-b-2 border-blush pb-1 hover:text-blush transition-colors"
              >
                <span>Meet the styling team</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <InstagramFeed />

      {/* CTA SECTION */}
      <section className="relative py-32 bg-sand text-center overflow-hidden">
         <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover grayscale" loading="lazy" />
         </div>
         <div className="relative z-10 max-w-3xl mx-auto px-6">
            <Reveal animation="zoom-in">
              <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-6">Ready for your transformation?</h2>
              <p className="text-charcoal/70 text-lg mb-10 font-sans font-light">
                Bookings fill up fast. Secure your spot today via our secure online booking system.
              </p>
              <a 
                href={BOOKING_URL} 
                className="inline-block bg-charcoal text-white font-sans font-semibold px-12 py-4 rounded-full hover:bg-blush hover:text-charcoal transition-all transform hover:scale-105 duration-300 shadow-xl"
              >
                Book Online Now
              </a>
            </Reveal>
         </div>
      </section>
    </div>
  );
};

export default Home;