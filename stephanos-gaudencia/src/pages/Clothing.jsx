import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import clothing item components
import RoyalCrownSuit from "../components/clothing/RoyalCrownSuit";
import VictorySilkSet from "../components/clothing/VictorySilkSet";
import IvoryRegalDress from "../components/clothing/IvoryRegalDress";
import GoldenMonarchOutfit from "../components/clothing/GoldenMonarchOutfit";

const clothes = [
  { name: "Royal Crown Suit", id: "royal-crown-suit", component: RoyalCrownSuit },
  { name: "Victory Silk Set", id: "victory-silk-set", component: VictorySilkSet },
  { name: "Ivory Regal Dress", id: "ivory-regal-dress", component: IvoryRegalDress },
  { name: "Golden Monarch Outfit", id: "golden-monarch-outfit", component: GoldenMonarchOutfit }
];

function Clothing() {
  const [selectedId, setSelectedId] = useState(null);

  const SelectedComponent = selectedId ? clothes.find(c => c.id === selectedId)?.component : null;

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 min-h-[70vh]">
      <AnimatePresence mode="wait">
        {!selectedId ? (
          <motion.div
            key="clothing-selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-serif text-gold mb-4 text-center">Clothing Collection</h1>
            <p className="text-ivory/60 text-center mb-16 max-w-lg mx-auto font-light text-lg">
              Explore our hand-crafted masterpieces designed for victory and bliss.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {clothes.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px -20px rgba(212, 175, 55, 0.4)" 
                  }}
                  className="group cursor-pointer border border-gold/20 bg-[#111] overflow-hidden rounded-sm transition-all hover:border-gold"
                  onClick={() => setSelectedId(item.id)}
                >
                  <div className="p-10 flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                      <span className="text-gold group-hover:text-onyx text-2xl font-serif">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <h2 className="text-xl font-serif text-ivory/90 group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h2>
                    <div className="w-8 h-px bg-gold/30 group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="item-view"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            {SelectedComponent && <SelectedComponent onBack={() => setSelectedId(null)} />}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Clothing;