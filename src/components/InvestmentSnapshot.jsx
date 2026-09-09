import { motion } from 'framer-motion';

const metrics = [
  { value: '₹1.5 Cr', label: 'Funding Requirement' },
  { value: 'Revenue / Growth', label: 'Current Stage' },
  { value: 'Construction & Infrastructure', label: 'Industry' },
  { value: 'Growth & Expansion', label: 'Capital Purpose' },
];

export default function InvestmentSnapshot() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
            At a Glance
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy">
            Investment Snapshot
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 min-w-0"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy mb-2 group-hover:text-brand-rust transition-colors break-words leading-tight text-balance">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
