import { motion } from 'framer-motion';
import { Briefcase, HardHat, TrendingUp, Building2 } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Briefcase,
    title: 'Capital',
    text: 'Raise strategic growth capital.',
  },
  {
    num: '02',
    icon: HardHat,
    title: 'Capacity',
    text: 'Strengthen operational and project execution capacity.',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Expansion',
    text: 'Pursue additional projects and business opportunities.',
  },
  {
    num: '04',
    icon: Building2,
    title: 'Scale',
    text: 'Build a larger, stronger and more scalable construction business.',
  },
];

export default function GrowthPlan() {
  return (
    <section id="growth-plan" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
            Roadmap
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Capital to Capacity. Capacity to Growth.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal line - desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-slate-200 -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="lg:text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-navy text-white text-xl font-bold shadow-lg mb-6">
                    {step.num}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-brand-sand text-brand-rust flex items-center justify-center mb-4 lg:mx-auto">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
