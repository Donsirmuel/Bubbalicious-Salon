
import React, { useState } from 'react';
import { GALLERY_DATA } from '../constants';
import { Instagram, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const filters = ['All', 'Blonde', 'Balayage', 'Extensions', 'Corrective'];

  const filteredImages = filter === 'All' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(img => img.category === filter);

  // Curated list of distinct images for the bottom "Instagram Strip" to avoid repetition and broken links
  const galleryStripImages = [
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop", // Extensions/Wefts
    "https://images.unsplash.com/photo-1521590832896-40226c61ebac?q=80&w=400&auto=format&fit=crop", // Salon Texture
    "https://images.unsplash.com/photo-1582095133179-bfd08d2fc6a8?q=80&w=400&auto=format&fit=crop", // Tools/Scissors
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=400&auto=format&fit=crop", // Product/Shelf
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=400&auto=format&fit=crop", // Vivid/Pink
    "https://images.unsplash.com/photo-1556228720-1987594b8d73?q=80&w=400&auto=format&fit=crop", // Styling tools
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=400&auto=format&fit=crop", // Salon Chair
    "https://images.unsplash.com/photo-1503951914875-452162b7f304?q=80&w=400&auto=format&fit=crop", // Comb/Scissor artistic
  ];

  return (
    <div className="min-h-screen bg-sand pt-10 pb-0">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        
        <Reveal animation="fade-in-down" className="text-center mb-12">
          <span className="text-blush-dark font-sans font-bold text-xs tracking-widest uppercase mb-4 block">Our Portfolio</span>
          <h1 className="font-serif text-4xl md:text-5xl mb-4 text-charcoal">Real Transformations</h1>
          <p className="font-sans text-gray-600">See the results of our colour and extension expertise.</p>
        </Reveal>

        {/* Filters */}
        <Reveal animation="fade-in" delay="delay-100" className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f 
                  ? 'bg-charcoal text-white shadow-md transform scale-105' 
                  : 'bg-white text-charcoal hover:bg-white/60 border border-transparent hover:border-charcoal/10'
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((img, idx) => (
            <Reveal key={img.id} animation="fade-in-up" delay={`delay-${(idx % 4) * 100}`}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-200 cursor-pointer shadow-sm">
                <img 
                  src={img.src} 
                  alt={img.caption}
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-white font-medium font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.caption}</span>
                  <span className="text-white/80 text-xs font-sans mt-1 uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.category}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No images found for this category.
          </div>
        )}
      </div>

      {/* Instagram Feed Section */}
      <Reveal animation="fade-in-up" className="bg-white py-16 border-t border-sand">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                <div>
                    <h2 className="font-serif text-3xl text-charcoal mb-2">Follow the Transformation</h2>
                    <a href="https://instagram.com" className="flex items-center text-blush-dark hover:text-charcoal transition-colors font-medium">
                        <Instagram size={18} className="mr-2" />
                        @bubbalicioushairandco
                    </a>
                </div>
                <a href="https://instagram.com" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest text-charcoal hover:text-blush transition-colors mt-4 md:mt-0">
                    View Full Feed <ArrowRight size={16} className="ml-2" />
                </a>
            </div>
            
            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto space-x-4 pb-8 -mx-6 px-6 scrollbar-hide snap-x">
                {galleryStripImages.map((src, i) => (
                    <div key={i} className="flex-none w-64 md:w-72 aspect-square relative group rounded-lg overflow-hidden snap-center cursor-pointer shadow-md">
                        <img 
                            src={src}
                            alt={`Gallery Strip ${i}`} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        {/* Insta Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                            <Instagram size={32} />
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="md:hidden text-center mt-4">
                 <a href="https://instagram.com" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-charcoal">
                    View Full Feed <ArrowRight size={16} className="ml-2" />
                </a>
            </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Gallery;
