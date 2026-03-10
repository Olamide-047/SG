import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer() {
  const linkHover = { scale: 1.03, color: "#C6A75C" }; // subtle gold hover

  return (
    <motion.footer
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="border-t border-gold bg-linear-to-t from-onyx via-[#1a1a1a] to-onyx text-ivory"
    >
      <div className="max-w-7xl mx-auto py-5 px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
        
        {/* Brand Info */}
        <div className="text-left space-y-1">
          <p className="text-gold font-semibold text-5xl">Stephanos Gaudencia</p>
          <p className="text-lg">Victory Unleashed. Bliss Embodied.</p>
          <p className="text-sm mt-1">© 2026 Stephanos Gaudencia Fashion House</p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-4 text-sm">
          
          {/* Pages */}
          <div className="flex flex-col gap-1">
            <h3 className="text-gold font-semibold uppercase tracking-wider text-xs">Pages</h3>
            {["Home", "About", "Clothing", "Catalogue", "Contact"].map((name, idx) => (
              <motion.div
                key={idx}
                whileHover={linkHover}
                className="transition-colors"
              >
                <Link
                  to={["/", "/about", "/clothing", "/catalogue", "/contact"][idx]}
                  className="hover:text-gold"
                >
                  {name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-1">
            <h3 className="text-gold font-semibold uppercase tracking-wider text-xs">Follow Us</h3>
            {["Instagram", "Facebook", "Twitter"].map((name, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={linkHover}
                className="transition-colors"
              >
                {name}
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </motion.footer>
  );
}

export default Footer;