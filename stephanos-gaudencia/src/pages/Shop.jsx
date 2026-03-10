import { motion } from "framer-motion";
import FAQSection from "../components/shop/FAQSection";
import ShopItem from "../components/shop/ShopItem";
import shopData from "../data/shop.json";

function Shop() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="text-gold text-xs uppercase tracking-[0.5em] mb-4 block font-medium">Summer 2026</span>
        <h1 className="text-6xl font-serif text-gold-light mb-6">Signature Collection</h1>
        <p className="text-ivory/60 max-w-2xl mx-auto font-light leading-relaxed">
          Discover our curated collection of luxury attire, blending traditional craftsmanship with contemporary elegance. Each piece is a statement of victory and bliss.
        </p>
      </motion.div>

      <div className="space-y-12">
        {/* User requested the shop grid be wrapped in an FAQ page/section */}
        <FAQSection title="SHOP OUR COLLECTION" defaultOpen={true}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {shopData.map((product) => (
              <ShopItem key={product.id} product={product} />
            ))}
          </div>
        </FAQSection>

        {/* Additional FAQs as requested */}
        <FAQSection title="SHIPPING & DELIVERY">
          <div className="space-y-4 text-ivory/70 text-sm font-light leading-relaxed">
            <p>
              We offer worldwide shipping on all orders. Each piece is hand-crafted and packaged with care at our fashion house.
            </p>
            <ul className="list-disc ml-4 space-y-2">
              <li>Domestic: 3-5 business days</li>
              <li>International: 7-14 business days</li>
              <li>Express shipping available at checkout</li>
            </ul>
          </div>
        </FAQSection>

        <FAQSection title="RETURNS & EXCHANGES">
          <p className="text-ivory/70 text-sm font-light leading-relaxed">
            Due to the exclusive nature of our hand-crafted collections, we accept returns within 14 days of delivery for store credit or exchange only. Items must be in original condition with all tags attached.
          </p>
        </FAQSection>

        <FAQSection title="CRAFTSMANSHIP">
          <p className="text-ivory/70 text-sm font-light leading-relaxed">
            Every garment at Stephanos Gaudencia is born from a commitment to excellence. We source the finest silks, velvets, and embroidery threads to ensure that your attire is not just clothing, but a masterpiece.
          </p>
        </FAQSection>
      </div>
    </div>
  );
}

export default Shop;
