import { motion } from 'framer-motion';

/* All images verified — Indian construction sites from Pexels & Unsplash */
const showcase = [
  {
    /* Construction workers with helmets at site with crane, India */
    image: 'https://images.pexels.com/photos/32826199/pexels-photo-32826199.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Active Construction Site',
    desc: 'Skilled workers coordinating on an active Indian construction site with heavy equipment.',
    tag: 'Under Construction',
  },
  {
    /* Construction workers pouring concrete on high-rise, Mumbai */
    image: 'https://images.pexels.com/photos/20591230/pexels-photo-20591230.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'On-Site Workforce',
    desc: 'Concrete pouring and structural work on a high-rise building in Mumbai.',
    tag: 'In Progress',
  },
  {
    /* Construction workers at building site, Delhi */
    image: 'https://images.pexels.com/photos/30592257/pexels-photo-30592257.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Structural Development',
    desc: 'Professional construction teams executing building projects across Indian metros.',
    tag: 'Under Construction',
  },
  {
    /* Modern apartment building, Kozhikode, Kerala */
    image: 'https://images.pexels.com/photos/33557085/pexels-photo-33557085.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Completed Structures',
    desc: 'Modern residential buildings delivered with contemporary design and quality finishing.',
    tag: 'Completed',
  },
];

export default function ConstructionShowcase() {
  return (
    <section className="py-20 md:py-28 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-brand-orange font-semibold tracking-widest text-sm uppercase mb-2">
            On the Ground
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold mb-4">
            Construction in Action
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            From foundation to finishing — a look at how we bring projects to life on site.
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Large left card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden md:row-span-2 min-h-[400px] md:min-h-0"
          >
            <img
              src={showcase[0].image}
              alt={showcase[0].title}
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/90 text-white text-xs font-semibold uppercase tracking-wide mb-3">
                {showcase[0].tag}
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-2 break-words leading-tight">{showcase[0].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{showcase[0].desc}</p>
            </div>
          </motion.div>

          {/* Right column — 3 stacked cards */}
          {showcase.slice(1).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
              className="group relative rounded-2xl overflow-hidden min-h-[220px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 md:p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-semibold uppercase tracking-wide mb-2 ${
                  item.tag === 'Completed' ? 'bg-green-600/90' : 'bg-brand-orange/90'
                }`}>
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold mb-1 break-words leading-tight">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
