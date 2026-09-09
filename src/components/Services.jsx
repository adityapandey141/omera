import { motion } from 'framer-motion';
import { HardHat, Ruler, ClipboardList, Building2, Truck, Layers } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: HardHat,
    title: 'Construction Contracting',
    text: 'Professional construction contracting solutions with a focus on quality, execution and project requirements.',
  },
  {
    num: '02',
    icon: Ruler,
    title: 'Civil Construction',
    text: 'Construction and civil execution capabilities for diverse project requirements.',
  },
  {
    num: '03',
    icon: ClipboardList,
    title: 'Project Execution',
    text: 'Structured execution focused on timelines, coordination, quality and efficient delivery.',
  },
  {
    num: '04',
    icon: Building2,
    title: 'Infrastructure Development',
    text: 'Supporting infrastructure and development requirements through professional execution capabilities.',
  },
  {
    num: '05',
    icon: Truck,
    title: 'Project Management',
    text: 'Coordinated project management with attention to planning, execution and quality.',
  },
  {
    num: '06',
    icon: Layers,
    title: 'End-to-End Construction Support',
    text: 'Integrated support across different stages of construction and project execution.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
            What We Offer
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold text-brand-navy mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Professional construction and infrastructure services built around quality, execution and
            client requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-brand-sand border border-slate-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1 min-w-0"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-rust group-hover:bg-brand-rust group-hover:text-white transition-colors shadow-sm">
                  <service.icon size={26} />
                </div>
                <span className="text-2xl font-bold text-slate-200 group-hover:text-brand-rust transition-colors">
                  {service.num}
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3 break-words leading-tight">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
