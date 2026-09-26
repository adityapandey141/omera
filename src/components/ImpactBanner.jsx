import { motion } from 'framer-motion';
import { Building2, HardHat, MapPin, Users } from 'lucide-react';

const metrics = [
  { icon: Building2, value: 'Multiple', label: 'Projects Delivered' },
  { icon: HardHat, value: 'Professional', label: 'Skilled Workforce' },
  { icon: MapPin, value: 'Maharashtra', label: 'Operating Region' },
  { icon: Users, value: 'Growing', label: 'Client Base' },
];

export default function ImpactBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background — Indian cityscape with construction, Hyderabad */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1689066647146-4b7a70a8c498?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-orange font-semibold tracking-widest text-sm uppercase mb-2">
            Our Impact
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold text-white mb-4">
            Building India&apos;s Future, One Project at a Time
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Committed to professional construction and infrastructure development across Maharashtra and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-rust/20 text-brand-orange flex items-center justify-center mx-auto mb-4">
                <metric.icon size={28} />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-1 break-words">
                {metric.value}
              </p>
              <p className="text-slate-400 text-sm uppercase tracking-wide font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
