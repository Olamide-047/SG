import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import shopData from "../data/shop.json";
import ShopItem from "../components/shop/ShopItem";

function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/images/hero-1.png",
      title: "Wear Your Victory",
      subtitle: "The 2026 Regal Collection",
      placeholder: "/images/hero-1.png"
    },
    {
      image: "/images/hero-2.png",
      title: "Embody Pure Bliss",
      subtitle: "Hand-crafted Silk Essentials",
      placeholder: "/images/hero-2.png"
    },
    {
      image: "/images/hero-3.png",
      title: "Timeless Heritage",
      subtitle: "Modern Tailoring, Traditional Roots",
      placeholder: "/images/hero-3.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const featuredProducts = shopData.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Carousel */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-onyx/40 z-10" />
            <img 
              src={heroSlides[currentSlide].placeholder} 
              alt="Hero" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.6em] mb-4 block font-bold drop-shadow-lg">
              {heroSlides[currentSlide].subtitle}
            </span>
            <h1 className="text-6xl md:text-9xl font-serif text-ivory mb-8 drop-shadow-2xl leading-none">
              {heroSlides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? 'text-gold italic block md:inline' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <button 
                onClick={() => navigate("/shop")}
                className="bg-gold text-onyx px-12 py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-gold-light transition-all shadow-2xl shadow-gold/20"
              >
                Shop Collection
              </button>
              <button 
                onClick={() => navigate("/about")}
                className="border border-ivory/30 text-ivory backdrop-blur-md px-12 py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-ivory hover:text-onyx transition-all"
              >
                Our Heritage
              </button>
            </div>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-12 bg-gold' : 'w-4 bg-ivory/30 hover:bg-ivory/60'}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Curated Selection</span>
            <h2 className="text-5xl font-serif text-ivory leading-tight">Featured Masterpieces</h2>
          </div>
          <button 
            onClick={() => navigate("/shop")}
            className="text-gold text-xs uppercase tracking-[0.2em] font-bold border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-all"
          >
            View Entire Shop
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <ShopItem key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* The Craft Section */}
      <section className="bg-onyx/20 py-32 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1000" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-onyx border border-gold/30 p-10 hidden md:block max-w-xs shadow-2xl">
              <span className="text-gold text-[40px] font-serif block mb-2 leading-none">100%</span>
              <p className="text-ivory/60 text-[10px] uppercase tracking-widest leading-loose">
                Hand-stitched precision in every single garment we create.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold block">The Art of Creation</span>
            <h2 className="text-5xl font-serif text-ivory leading-tight italic">Excellence in every fiber.</h2>
            <p className="text-ivory/60 font-light leading-relaxed text-lg">
              At Stephanos Gaudencia, we don't just make clothes; we weave stories of ambition and triumph. Every stitch is a testament to our dedication to luxury and the pursuit of perfection.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gold/10">
              <div>
                <h4 className="text-gold font-serif text-xl mb-2">Sustainable Silk</h4>
                <p className="text-ivory/40 text-xs leading-relaxed">Sourced from ethically managed farms.</p>
              </div>
              <div>
                <h4 className="text-gold font-serif text-xl mb-2">Artisan Guilds</h4>
                <p className="text-ivory/40 text-xs leading-relaxed">Supporting traditional tailoring communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-32 text-center px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-7xl font-serif text-ivory">Join the <span className="text-gold">Heritage</span></h2>
          <p className="text-ivory/50 max-w-xl mx-auto text-sm leading-relaxed italic">
            Be the first to experience our seasonal drops and exclusive invitation-only collections.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-onyx/40 border border-gold/20 p-4 grow text-ivory focus:outline-none focus:border-gold transition-all text-sm"
            />
            <button className="bg-gold text-onyx px-8 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-gold-light transition-all shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;