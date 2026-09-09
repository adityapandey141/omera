import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Coins, HardHat, Truck, TrendingUp, Target } from 'lucide-react';

const uses = [
  { num: '01', icon: Briefcase, title: 'Business Expansion' },
  { num: '02', icon: Coins, title: 'Working Capital' },
  { num: '03', icon: HardHat, title: 'Project Execution Capacity' },
  { num: '04', icon: Truck, title: 'Equipment / Operational Capacity' },
  { num: '05', icon: TrendingUp, title: 'Business Development' },
  { num: '06', icon: Target, title: 'New Project Opportunities' },
];

export default function FundingOpportunity({ openModal }) {
  return (
    <section id="funding" className="py-20 md:py-28 bg-brand-sand">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
            Investment Terms
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Funding Opportunity
          </h2>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-navy mb-2 break-words leading-tight text-balance">
            ₹1.5 CRORE
          </div>
          <p className="text-xl text-slate-600 font-medium mb-4">Growth &amp; Expansion Capital</p>
          <p className="text-slate-600 leading-relaxed">
            Omrea Infrastructure Private Limited is seeking ₹1.5 Crore in capital to accelerate its
            next phase of growth.
          </p>
        </motion.div>

        <div className="mb-16">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
            Proposed Use of Funds
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uses.map((use, i) => (
              <motion.div
                key={use.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-navy text-white font-bold shrink-0">
                  {use.num}
                </div>
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-sand text-brand-rust flex items-center justify-center mb-3">
                    <use.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">{use.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">Allocation to be finalized</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 bg-brand-rust hover:bg-brand-orange text-white font-semibold px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-xl"
          >
            REQUEST INVESTOR DECK <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
