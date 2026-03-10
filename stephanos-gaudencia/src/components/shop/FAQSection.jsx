import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FAQSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gold/20 bg-onyx/40 rounded-lg overflow-hidden mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gold/5 transition-colors"
      >
        <span className="text-xl font-serif text-gold tracking-wide">{title}</span>
        <div className="relative w-6 h-6 flex items-center justify-center">
          <motion.span
            animate={{ rotate: isOpen ? 0 : 90 }}
            className="absolute w-4 h-0.5 bg-gold rounded-full transition-transform"
          />
          <span className="w-4 h-0.5 bg-gold rounded-full" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-8 border-t border-gold/10 bg-linear-to-b from-transparent to-gold/5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FAQSection;
