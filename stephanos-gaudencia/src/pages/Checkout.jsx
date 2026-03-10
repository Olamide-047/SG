import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { cart, cartTotal, formatPrice, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
  const [paymentMethod, setPaymentMethod] = useState("paystack");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const orderId = useState(() => `SG-${Math.floor(Math.random() * 1000000)}`)[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitShipping = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePayment = () => {
    // Mock payment processing
    setStep(3);
    clearCart();
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="max-w-7xl mx-auto py-32 px-6 text-center space-y-8">
        <h1 className="text-5xl font-serif text-gold">Checkout Empty</h1>
        <p className="text-ivory/60 max-w-md mx-auto italic">
          You don't have any pieces to checkout yet.
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
    <div className="max-w-7xl mx-auto py-20 px-6 min-h-[80vh]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
        <h1 className="text-4xl font-serif text-gold">Secure Checkout</h1>
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest">
          <span className={step >= 1 ? "text-gold font-bold" : "text-ivory/30"}>Shipping</span>
          <div className="w-8 h-px bg-gold/20" />
          <span className={step >= 2 ? "text-gold font-bold" : "text-ivory/30"}>Payment</span>
          <div className="w-8 h-px bg-gold/20" />
          <span className={step >= 3 ? "text-gold font-bold" : "text-ivory/30"}>Confirmation</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Form Area */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="shipping"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                <form onSubmit={handleSubmitShipping} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold/60 font-medium">First Name</label>
                      <input 
                        required
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-onyx/40 border border-gold/10 rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold/60 font-medium">Last Name</label>
                      <input 
                        required
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-onyx/40 border border-gold/10 rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold/60 font-medium">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-onyx/40 border border-gold/10 rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gold/60 font-medium">Shipping Address</label>
                    <input 
                      required
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full bg-onyx/40 border border-gold/10 rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                      placeholder="123 Luxury Ave"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold/60 font-medium">City</label>
                      <input 
                        required
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-onyx/40 border border-gold/10 rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                        placeholder="Lagos"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold/60 font-medium">Postal Code</label>
                      <input 
                        required
                        type="text" 
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full bg-onyx/40 border border-gold/10 rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                        placeholder="100001"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gold text-onyx py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all mt-8"
                  >
                    Continue to Payment
                  </button>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h3 className="text-xl font-serif text-gold-light">Select Payment Method</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button 
                      onClick={() => setPaymentMethod("paystack")}
                      className={`flex flex-col items-center justify-center p-8 border rounded-lg transition-all ${paymentMethod === "paystack" ? "border-gold bg-gold/5" : "border-gold/10 hover:border-gold/30"}`}
                    >
                      <div className="w-12 h-12 mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <span className="font-bold uppercase tracking-widest text-[10px]">Paystack Online</span>
                      <span className="text-[9px] text-ivory/40 mt-1">Cards, Transfer, USSD</span>
                    </button>

                    <button 
                      onClick={() => setPaymentMethod("crypto")}
                      className={`flex flex-col items-center justify-center p-8 border rounded-lg transition-all ${paymentMethod === "crypto" ? "border-gold bg-gold/5" : "border-gold/10 hover:border-gold/30"}`}
                    >
                      <div className="w-12 h-12 mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="font-bold uppercase tracking-widest text-[10px]">Crypto Wallet</span>
                      <span className="text-[9px] text-ivory/40 mt-1">BTC, ETH, USDT</span>
                    </button>
                  </div>

                  {paymentMethod === "crypto" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-onyx/60 border border-gold/10 p-6 rounded-lg text-center space-y-4"
                    >
                      <p className="text-xs text-ivory/60 uppercase tracking-widest">Send specialized amount to:</p>
                      <div className="bg-onyx p-4 rounded border border-gold/5 break-all font-mono text-gold text-sm uppercase">
                        0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                      </div>
                      <p className="text-[10px] text-ivory/40 italic">Transaction will be verified automatically after confirmation.</p>
                    </motion.div>
                  )}

                  <div className="flex gap-4 pt-6">
                    <button 
                      onClick={() => setStep(1)}
                      className="flex-1 border border-gold/20 text-ivory/60 py-4 rounded font-bold uppercase tracking-widest text-xs hover:border-gold transition-all"
                    >
                      Back to Shipping
                    </button>
                    <button 
                      onClick={handlePayment}
                      className="flex-2 bg-gold text-onyx py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all shadow-lg shadow-gold/10"
                    >
                      {paymentMethod === "paystack" ? "Complete with Paystack" : "Confirm Crypto Payment"}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8 py-10"
              >
                <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-12 h-12 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-4">
                  <h1 className="text-5xl font-serif text-gold">Order Confirmed</h1>
                  <p className="text-ivory/60 max-w-md mx-auto italic">
                    Thank you for choosing Stephanos Gaudencia. Your collection is being curated and will be dispatched shortly.
                  </p>
                </div>
                <p className="text-[10px] text-ivory/40 uppercase tracking-[0.3em]">Order #{orderId}</p>
                <Link 
                  to="/"
                  className="inline-block bg-gold text-onyx px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all mt-10"
                >
                  Return to Home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Order Summary Sidebar */}
        {step !== 3 && (
          <div className="lg:col-span-1">
            <div className="bg-onyx/60 border border-gold/10 p-8 rounded-lg sticky top-28 space-y-8">
              <h2 className="text-2xl font-serif text-gold border-b border-gold/10 pb-4">Order Summary</h2>
              
              <div className="space-y-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.color}-${item.size}`} className="flex gap-4">
                    <div className="w-16 h-20 bg-onyx/80 rounded overflow-hidden shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name} 
                        className="w-full h-full object-cover opacity-60"
                        onError={(e) => {
                          e.target.src = "https://placehold.co/100x130/0f0f0f/d4af37?text=SG";
                        }}
                      />
                    </div>
                    <div className="grow">
                      <h4 className="text-sm font-medium text-ivory">{item.name}</h4>
                      <p className="text-[10px] text-ivory/40 uppercase tracking-widest mt-1">
                        {item.color} / {item.size} x {item.quantity}
                      </p>
                      <p className="text-xs text-gold font-bold mt-1">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4 border-t border-gold/10">
                <div className="flex justify-between text-ivory/70 text-sm">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-ivory/70 text-sm">
                  <span>Shipping</span>
                  <span>Complimentary</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gold-light pt-4 border-t border-gold/10">
                  <span>Total</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
