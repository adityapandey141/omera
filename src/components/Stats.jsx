import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: 'To be updated' },
  { label: 'Years of Experience', value: 'To be updated' },
  { label: 'Clients Served', value: 'To be updated' },
  { label: 'Team Strength', value: 'To be updated' },
  { label: 'Cities / Locations', value: 'To be updated' },
  { label: 'Ongoing Projects', value: 'To be updated' },
];

export default function Stats() {
  return (
    <section className="py-20 md:py-28 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-brand-orange font-semibold tracking-widest text-sm uppercase mb-2">
            At a Glance
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold mb-4">
            Company Stats
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Verified company statistics will be displayed here once available.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors min-w-0"
            >
              <p className="text-2xl md:text-3xl break-words leading-tight font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-slate-400 uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500 italic text-center">
          * Numbers will be updated from verified company records. No statistics are invented.
        </p>
      </div>
    </section>
  );
}
