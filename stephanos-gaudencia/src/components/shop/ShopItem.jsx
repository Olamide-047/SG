import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";

function ShopItem({ product }) {
  const { addToCart, formatPrice } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const handleBuyNow = () => {
    addToCart({ ...product, color: selectedColor, size: selectedSize });
    window.location.href = "/cart";
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-onyx/40 border border-gold/10 p-6 rounded-lg group hover:border-gold/30 transition-all"
    >
      <div className="relative aspect-4/5 overflow-hidden rounded-md mb-6">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.target.src = "https://placehold.co/400x500/0f0f0f/d4af37?text=" + encodeURIComponent(product.name);
          }}
        />
        <div className="absolute top-4 right-4 bg-onyx/80 backdrop-blur-sm border border-gold/20 px-3 py-1 text-gold text-sm font-bold">
          {formatPrice(product.price)}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-serif text-gold-light">{product.name}</h3>
          <p className="text-xs text-ivory/50 uppercase tracking-widest mt-1">{product.category}</p>
        </div>

        <p className="text-sm text-ivory/70 line-clamp-2 italic">{product.description}</p>

        {/* Color Selection */}
        <div>
          <label className="text-[10px] uppercase tracking-tighter text-ivory/40 block mb-2">Available Colors</label>
          <div className="flex gap-2">
            {product.colors.map(color => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-4 h-4 rounded-full border transition-all ${selectedColor === color ? 'border-gold scale-125' : 'border-transparent'}`}
                style={{ backgroundColor: color.toLowerCase() === 'onyx' ? '#222' : color.toLowerCase() === 'gold' ? '#D4AF37' : color.toLowerCase() === 'ivory' ? '#FAF9F6' : color.toLowerCase() }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-[10px] uppercase tracking-tighter text-ivory/40">Select Size</label>
            <button 
              onClick={() => setShowSizeGuide(!showSizeGuide)}
              className="text-[10px] uppercase tracking-tighter text-gold hover:underline"
            >
              Size Guide
            </button>
          </div>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-xs border transition-all ${selectedSize === size ? 'border-gold bg-gold text-onyx font-bold' : 'border-gold/20 text-ivory/60 hover:border-gold/50'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Size Guide Modal (Simple Inline) */}
        <AnimatePresence>
          {showSizeGuide && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-onyx/60 border-t border-b border-gold/10 my-4"
            >
              <div className="py-4 text-[11px] text-ivory/60 space-y-2">
                <p className="font-bold text-gold">Sizing Details:</p>
                <div className="grid grid-cols-2 gap-2">
                  <span>Chest: 38-40"</span>
                  <span>Waist: 30-32"</span>
                  <span>Sleeve: 33.5"</span>
                  <span>Inseam: 32"</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-2 gap-3 pt-4">
          <button 
            onClick={() => addToCart({ ...product, color: selectedColor, size: selectedSize })}
            className="border border-gold text-gold py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-onyx transition-all"
          >
            Add to Cart
          </button>
          <button 
            onClick={handleBuyNow}
            className="bg-gold text-onyx py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold-light transition-all shadow-lg shadow-gold/10"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ShopItem;
