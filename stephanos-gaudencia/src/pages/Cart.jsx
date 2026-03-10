import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart, formatPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-32 px-6 text-center space-y-8">
        <h1 className="text-5xl font-serif text-gold">Your Cart is Empty</h1>
        <p className="text-ivory/60 max-w-md mx-auto italic">
          It seems you haven't added any pieces to your collection yet.
        </p>
        <Link 
          to="/shop"
          className="inline-block bg-gold text-onyx px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-gold-light"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-serif text-gold mb-8 md:mb-12">Shopping Collection</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Cart items list */}
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item) => (
            <motion.div 
              key={`${item.id}-${item.color}-${item.size}`}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-6 border-b border-gold/10 pb-8 group"
            >
              <div className="w-24 h-32 bg-onyx/50 rounded overflow-hidden shrink-0">
                <img 
                  src={item.images[0]} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/100x130/0f0f0f/d4af37?text=SG";
                  }}
                />
              </div>

              <div className="grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-gold-light">{item.name}</h3>
                    <p className="text-lg font-bold">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                  <div className="flex gap-4 text-xs text-ivory/50 uppercase tracking-widest">
                    <span>Color: <span className="text-ivory">{item.color}</span></span>
                    <span>Size: <span className="text-ivory">{item.size}</span></span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center border border-gold/20 rounded">
                    <button 
                      onClick={() => updateQuantity(item.id, item.color, item.size, -1)}
                      className="px-3 py-1 text-gold hover:bg-gold/10 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-sm border-x border-gold/20">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.color, item.size, 1)}
                      className="px-3 py-1 text-gold hover:bg-gold/10 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id, item.color, item.size)}
                    className="text-[10px] uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors"
                  >
                    Remove Piece
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          <button 
            onClick={clearCart}
            className="text-[10px] uppercase tracking-widest text-ivory/40 hover:text-red-400 transition-colors"
          >
            Clear Entire Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-onyx/60 border border-gold/10 p-8 rounded-lg sticky top-28">
            <h2 className="text-2xl font-serif text-gold mb-6 border-b border-gold/10 pb-4">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-ivory/70 font-light">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-ivory/70 font-light">
                <span>Shipping</span>
                <span>Complimentary</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gold-light pt-4 border-t border-gold/10">
                <span>Total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
            </div>

            <Link to="/checkout" className="block w-full">
              <button className="w-full bg-gold text-onyx py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all shadow-[0_10px_30px_-10px_rgba(212,175,55,0.4)] text-center">
                Proceed to Checkout
              </button>
            </Link>
            <p className="mt-4 text-[10px] text-ivory/40 text-center uppercase tracking-tighter italic">
              Experience the pinnacle of luxury commerce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
