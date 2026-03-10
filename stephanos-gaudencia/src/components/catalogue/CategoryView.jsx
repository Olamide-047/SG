import { motion } from "framer-motion";

function CategoryView({ title, data, onBack }) {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-serif text-gold">{title}</h2>
        <button 
          onClick={onBack}
          className="text-ivory/60 hover:text-gold transition-colors uppercase tracking-widest text-xs font-bold"
        >
          &larr; Back to Styles
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg aspect-4/5 bg-onyx/50 border border-gold/10 group-hover:border-gold/30 transition-all">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                onError={(e) => {
                  e.target.src = "https://placehold.co/600x800/0f0f0f/d4af37?text=" + encodeURIComponent(item.title);
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-onyx via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif text-gold-light mb-2">{item.title}</h3>
                <p className="text-sm text-ivory/80 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CategoryView;
