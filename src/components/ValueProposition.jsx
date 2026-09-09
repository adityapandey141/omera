import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const points = [
  'Existing operating business',
  'Revenue-stage company',
  'Clear expansion requirement',
  'Construction and infrastructure exposure',
  'Defined use of growth capital',
  'Opportunity to participate in the company\'s next growth phase',
];

export default function ValueProposition() {
  return (
    <section id="value-proposition" className="py-20 md:py-28 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-brand-orange font-semibold tracking-widest text-sm uppercase mb-2">
              Investor Value Proposition
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Why Consider the Opportunity?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Omrea Infrastructure offers a transparent, execution-led investment opportunity in a
              fundamental sector. The company is seeking capital to accelerate its next phase of growth
              in a clearly communicated manner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <CheckCircle size={22} className="text-brand-orange shrink-0 mt-0.5" />
                <span className="font-medium leading-snug">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
