import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import category components
import RoyalSuit from "../components/catalogue/RoyalSuit";
import LuxuryDress from "../components/catalogue/LuxuryDress";
import ClassicSenator from "../components/catalogue/ClassicSenator";
import ModernCasual from "../components/catalogue/ModernCasual";
import TraditionalRegal from "../components/catalogue/TraditionalRegal";

const styles = [
  { name: "Royal Suit", id: "royal-suit", component: RoyalSuit },
  { name: "Luxury Dress", id: "luxury-dress", component: LuxuryDress },
  { name: "Classic Senator", id: "classic-senator", component: ClassicSenator },
  { name: "Modern Casual", id: "modern-casual", component: ModernCasual },
  { name: "Traditional Regal", id: "traditional-regal", component: TraditionalRegal }
];

function Catalogue() {
  const [selectedId, setSelectedId] = useState(null);

  const SelectedComponent = selectedId ? styles.find(s => s.id === selectedId)?.component : null;

  return (
    <section className="max-w-6xl mx-auto py-20 px-6 min-h-[70vh]">
      <AnimatePresence mode="wait">
        {!selectedId ? (
          <motion.div
            key="selection-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-serif text-gold mb-4 text-center">Select Your Style</h1>
            <p className="text-ivory/60 text-center mb-16 max-w-lg mx-auto font-light text-lg">
              Choose a category to explore our exclusive collection of masterfully crafted attire.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {styles.map((style, index) => (
                <motion.button
                  key={style.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 10px 40px -10px rgba(212, 175, 55, 0.3)" 
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedId(style.id)}
                  className="group relative h-48 border border-gold/20 bg-[#111] overflow-hidden rounded-sm transition-all hover:border-gold hover:z-10 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-gold/5 mask-image:linear-to-b from-white-to-transparent"></div>
                  <div className="relative z-10 p-8 flex flex-col h-full justify-center items-center">
                    <span className="text-2xl font-serif text-ivory/90 group-hover:text-gold transition-colors duration-300 tracking-wide text-glow-gold">
                      {style.name}
                    </span>
                    <div className="mt-4 w-12 h-px bg-gold/30 group-hover:w-20 transition-all duration-500"></div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="category-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {SelectedComponent && <SelectedComponent onBack={() => setSelectedId(null)} />}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Catalogue;