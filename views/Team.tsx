import React from 'react';
import { TEAM_DATA, BOOKING_URL, CONTACT_INFO } from '../constants';
import { MapPin, Info, Heart, Quote } from 'lucide-react';
import Reveal from '../components/Reveal';

interface TeamProps {
  onBookingClick: () => void;
}

const Team: React.FC<TeamProps> = ({ onBookingClick }) => {
  return (
    <div className="min-h-screen bg-sand pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <Reveal animation="fade-in-down">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-blush-dark font-sans font-bold text-xs tracking-widest uppercase mb-4 block">Our People & Place</span>
            <h1 className="font-serif text-4xl md:text-6xl mb-6 text-charcoal">Meet The Team</h1>
          </div>
        </Reveal>

        {/* Our Story / Philosophy Section */}
        <Reveal animation="fade-in-up" className="bg-white rounded-3xl p-8 md:p-16 shadow-lg mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blush/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <h2 className="font-serif text-3xl mb-6 text-charcoal">Simple, affordable, memorable.</h2>
                    <p className="font-sans text-gray-600 leading-relaxed mb-6 text-lg">
                        Welcome to Bubbalicious Hair & Co — where luxury meets fun, and everyone is welcome. Based in Rothwell, we specialize in extensions and colour transformations that are as bold, beautiful, and unique as you are.
                    </p>
                    <p className="font-sans text-gray-600 leading-relaxed mb-6">
                        With over 5 years of hands-on experience and extensive education in both extensions and colouring, we’re all about delivering results that are customized to you — your style, your vibe, and your lifestyle. We believe great hair starts with great care, creating personalized colour formulas and custom home care plans.
                    </p>
                    <p className="font-sans text-gray-600 leading-relaxed mb-8">
                        At Bubbalicious, it’s more than just hair — it’s an experience. Our salon is a space where you can relax, have a laugh, and walk out feeling confident, refreshed, and 100% you. Whether you're here for a total transformation or just a top-up, you're part of the Bubbalicious family.
                    </p>
                    <div className="flex items-center gap-3 text-blush-dark font-serif italic text-lg bg-sand/30 p-4 rounded-r-xl border-l-4 border-blush">
                        <Heart size={24} fill="currentColor" />
                        <span>Bold. Beautiful. Unique.</span>
                    </div>
                </div>
                <div className="relative">
                    <img 
                        src="/images/hero-salon.jpg" 
                        alt="Salon Interior" 
                        className="rounded-2xl shadow-xl w-full object-cover h-80 lg:h-96"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-charcoal p-6 rounded-lg shadow-xl max-w-xs hidden md:block text-white">
                        <Quote size={20} className="text-blush mb-2" />
                        <p className="font-serif italic text-sm">"Where luxury meets fun, and everyone is welcome."</p>
                    </div>
                </div>
            </div>
        </Reveal>

        {/* Team Grid */}
        <div className="mb-24">
            <Reveal animation="fade-in-up">
              <h2 className="font-serif text-3xl text-center mb-12">The Specialists</h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_DATA.map((member, idx) => (
                <Reveal key={member.id} animation="fade-in-up" delay={`delay-${idx * 200}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group">
                    <div className="h-96 overflow-hidden relative">
                        <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent p-6 pt-20">
                            <p className="text-white font-serif text-2xl mb-1">{member.name}</p>
                            <p className="text-blush font-sans text-sm font-medium tracking-wider uppercase">{member.role}</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="mb-4">
                            <span className="text-xs font-sans font-bold text-charcoal tracking-wider uppercase bg-sand px-3 py-1 rounded-full inline-block mb-3">
                                Specialty: {member.specialty}
                            </span>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            {member.bio}
                            </p>
                        </div>
                        <button 
                        onClick={onBookingClick}
                        className="block w-full text-center bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-white py-3 rounded-lg transition-all font-medium text-sm"
                        >
                        Book with {member.name}
                        </button>
                    </div>
                  </div>
                </Reveal>
            ))}
            </div>
        </div>

        {/* Location Section */}
        <Reveal animation="zoom-in" className="bg-charcoal text-sand rounded-3xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
            <div className="w-full md:w-1/2 relative z-10">
                <h3 className="font-serif text-3xl mb-4 text-white">Visit Our Studio</h3>
                <p className="text-sand/80 mb-8 leading-relaxed">
                    Conveniently located at Rothwell Central, our studio offers a private and relaxing space for your transformation. 
                </p>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                            <MapPin className="text-blush" size={20} />
                        </div>
                        <div>
                            <p className="font-medium text-white">Address</p>
                            <a href={CONTACT_INFO.mapLink} className="text-sand/70 hover:text-white transition-colors">
                                {CONTACT_INFO.address},<br/>{CONTACT_INFO.city}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-full">
                            <Info className="text-blush" size={20} />
                        </div>
                        <div>
                            <p className="font-medium text-white">Easy Parking</p>
                            <p className="text-sand/70">Ample free parking is available directly in front of the salon at Rothwell Central.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-80 bg-gray-600 rounded-xl overflow-hidden relative border border-white/10 group">
                {/* Simulated Map */}
                <img 
                    src="/images/map.jpg" 
                    alt="Map Location" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-110"
                />
                <a 
                    href={CONTACT_INFO.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                    <div className="bg-white px-5 py-3 rounded-lg shadow-xl flex items-center gap-2 transform group-hover:-translate-y-2 transition-transform">
                        <MapPin size={20} className="text-charcoal" />
                        <span className="font-bold text-charcoal">Get Directions</span>
                    </div>
                </a>
            </div>
        </Reveal>

      </div>
    </div>
  );
};

export default Team;