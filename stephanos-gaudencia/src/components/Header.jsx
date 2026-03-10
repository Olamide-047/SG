import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { useCart } from "../context/CartContext";

function Header() {
  const { cartCount, currencies, currency, setCurrency } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Clothing', path: '/clothing' },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.header 
        initial={{y:-100, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.8, ease: "easeOut"}}
        className="sticky top-0 z-50 border-b border-gold/20 backdrop-blur-xl bg-onyx/80"
      >
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
          <Link to="/" className="group" onClick={() => setIsMenuOpen(false)}>
            <h1 className="text-gold text-2xl font-serif tracking-[0.3em] font-bold group-hover:text-gold-light transition-colors">
              STEPHANOS GAUDENCIA
            </h1>
          </Link>

          <nav className="hidden lg:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`relative py-2 transition-colors group ${location.pathname === item.path ? 'text-gold' : 'text-ivory/70 hover:text-gold'}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            {/* Currency Switcher */}
            <div className="hidden sm:flex items-center gap-2 border-r border-gold/20 pr-6 mr-2">
              {currencies.map((curr) => (
                <button
                  key={curr.label}
                  onClick={() => setCurrency(curr.label)}
                  className={`text-[10px] font-bold transition-all px-2 py-1 rounded ${currency === curr.label ? 'bg-gold text-onyx' : 'text-ivory/40 hover:text-gold'}`}
                >
                  {curr.label}
                </button>
              ))}
            </div>

            <Link to="/search" className="text-ivory/70 hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </Link>

            <Link to="/cart" className="relative text-ivory/70 hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-onyx text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="lg:hidden text-gold">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-onyx flex flex-col pt-32 px-10 lg:hidden"
          >
            <div className="flex flex-col gap-10 text-2xl font-serif tracking-widest">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${location.pathname === item.path ? 'text-gold' : 'text-ivory/60'}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-20 space-y-8">
              <div className="flex gap-4">
                {currencies.map((curr) => (
                  <button
                    key={curr.label}
                    onClick={() => setCurrency(curr.label)}
                    className={`text-sm font-bold px-4 py-2 border rounded ${currency === curr.label ? 'border-gold text-gold bg-gold/10' : 'border-gold/20 text-ivory/40'}`}
                  >
                    {curr.label}
                  </button>
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-[0.5em] text-gold/40">Stephanos Gaudencia Heritage</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header