import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/* All images are from India — verified Unsplash sources */
const featured = [
  {
    /* Glass building under construction, Hi-Tech City, Hyderabad */
    image: 'https://images.unsplash.com/photo-1665669877756-5f2e42426e81?w=800&q=80',
    label: 'Commercial',
    title: 'Commercial High-Rise',
    desc: 'Modern glass-facade commercial tower under construction in an Indian metro city.',
  },
  {
    /* Residential towers, Hyderabad aerial */
    image: 'https://images.unsplash.com/photo-1688824707674-bb91aa628fdd?w=800&q=80',
    label: 'Residential',
    title: 'Residential Tower Project',
    desc: 'Multi-storey residential apartment buildings rising across the Indian urban landscape.',
  },
  {
    /* Mumbai Lower Parel skyline — skyscrapers under construction */
    image: 'https://images.unsplash.com/photo-1764118811041-712974fea74c?w=800&q=80',
    label: 'Infrastructure',
    title: 'Urban Infrastructure',
    desc: 'High-rise infrastructure development shaping the skyline of modern Indian cities.',
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-20 md:py-28 bg-brand-sand">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
              Featured Work
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold text-brand-navy">
              Projects That Define Us
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-brand-rust hover:text-brand-orange font-semibold transition-colors shrink-0"
          >
            VIEW ALL PROJECTS <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-xl min-w-0"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-rust/90 text-white text-xs font-semibold uppercase tracking-wide mb-3">
                  {item.label}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 break-words leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
