import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Clock, Users } from 'lucide-react';

const placeholders = [
  { icon: TrendingUp, label: 'Revenue', value: 'To be provided' },
  { icon: BarChart3, label: 'Projects Completed', value: 'To be provided' },
  { icon: Clock, label: 'Active Projects', value: 'To be provided' },
  { icon: Users, label: 'Clients', value: 'To be provided' },
];

export default function Traction() {
  return (
    <section className="py-20 md:py-28 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-brand-orange font-semibold tracking-widest text-sm uppercase mb-2">
            Business Traction
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Operating Today. Scaling Tomorrow.
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            Verified operating metrics will be displayed here once they are shared from the company
            pitch deck.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-rust/20 text-brand-orange flex items-center justify-center mb-6">
                <item.icon size={24} />
              </div>
              <p className="text-sm text-slate-400 uppercase tracking-wide mb-2">{item.label}</p>
              <p className="text-xl font-semibold">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500 italic">
          * Metrics will be updated from verified pitch deck data. No financial numbers are invented.
        </p>
      </div>
    </section>
  );
}
