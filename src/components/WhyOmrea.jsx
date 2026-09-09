import { motion } from 'framer-motion';
import { Award, Clock, Users, Briefcase, TrendingUp, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Quality Focus',
    text: 'Commitment to maintaining professional standards throughout project execution.',
  },
  {
    icon: Clock,
    title: 'Reliable Execution',
    text: 'A structured approach to construction and project delivery.',
  },
  {
    icon: Users,
    title: 'Client Centric',
    text: 'Understanding project requirements and working closely with clients.',
  },
  {
    icon: Briefcase,
    title: 'Professional Approach',
    text: 'Focused on planning, coordination and efficient execution.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Oriented',
    text: 'Continuously developing capabilities and expanding opportunities.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Relationships',
    text: 'Focused on building lasting relationships with clients and business partners.',
  },
];

export default function WhyOmrea() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
            Why Work With Us
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold text-brand-navy mb-4">
            Why Choose Omrea?
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            A professional construction partner focused on quality, reliability and lasting
            relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-brand-sand border border-slate-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1 group min-w-0"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-rust mb-6 group-hover:bg-brand-rust group-hover:text-white transition-colors">
                <reason.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3 break-words leading-tight">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
