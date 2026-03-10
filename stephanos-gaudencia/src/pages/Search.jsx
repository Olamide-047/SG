import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import shopData from "../data/shop.json";
import ShopItem from "../components/shop/ShopItem";

function Search() {
  const [query, setQuery] = useState("");
  
  const results = query 
    ? shopData.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="max-w-7xl mx-auto py-20 px-6 min-h-[70vh]">
      <div className="max-w-2xl mx-auto text-center mb-16 space-y-8">
        <h1 className="text-5xl font-serif text-gold">Search</h1>
        <div className="relative">
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search our collection..."
            className="w-full bg-onyx/40 border-b border-gold/30 p-4 text-xl font-light text-ivory placeholder:text-ivory/20 focus:outline-none focus:border-gold transition-all"
            autoFocus
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>
        {!query && (
          <p className="text-ivory/40 text-sm italic">Enter a keyword to explore our signature pieces.</p>
        )}
      </div>

      <AnimatePresence mode="popLayout">
        {query && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-10"
          >
            <h2 className="text-gold text-xs uppercase tracking-[0.3em] border-b border-gold/10 pb-4">
              Found {results.length} {results.length === 1 ? 'result' : 'results'}
            </h2>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {results.map((product) => (
                  <ShopItem key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-2xl font-serif text-ivory/40 italic">No pieces matching your inquiry were found.</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Search;
