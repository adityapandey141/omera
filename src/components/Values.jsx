import { motion } from 'framer-motion';
import { Shield, Award, Handshake, HardHat, Users, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    text: 'We believe in transparent and responsible business practices.',
  },
  {
    icon: Award,
    title: 'Quality',
    text: 'We maintain a strong focus on quality across our work.',
  },
  {
    icon: Handshake,
    title: 'Reliability',
    text: 'We value dependable execution and professional commitments.',
  },
  {
    icon: HardHat,
    title: 'Safety',
    text: 'We promote responsible construction practices and workplace safety.',
  },
  {
    icon: Users,
    title: 'Client Focus',
    text: 'We prioritize understanding and responding to client requirements.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    text: 'We continuously work to improve our capabilities and processes.',
  },
];

export default function Values() {
  return (
    <section className="py-20 md:py-28 bg-brand-sand">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
            What We Stand For
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold text-brand-navy mb-4">
            Our Values
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Principles that guide our work, relationships and approach to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-slate-100 p-8 shadow-sm hover:shadow-lg transition-all min-w-0"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-sand text-brand-rust flex items-center justify-center mb-6">
                <value.icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3 break-words leading-tight">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
