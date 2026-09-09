import { motion } from 'framer-motion';
import { HardHat, Ruler, ClipboardList, Truck, Users, Shield } from 'lucide-react';

const capabilities = [
  {
    icon: HardHat,
    title: 'Professional Project Execution',
    text: 'Disciplined execution focused on project requirements and delivery.',
  },
  {
    icon: Ruler,
    title: 'Quality-Focused Approach',
    text: 'Emphasis on maintaining professional standards across every phase.',
  },
  {
    icon: ClipboardList,
    title: 'Timely Coordination',
    text: 'Coordinated planning and execution to keep projects aligned.',
  },
  {
    icon: Truck,
    title: 'Skilled Workforce',
    text: 'Access to capable teams and execution resources for construction projects.',
  },
  {
    icon: Users,
    title: 'Project Management',
    text: 'Structured management of resources, timelines and project activities.',
  },
  {
    icon: Shield,
    title: 'Client-Centric Delivery',
    text: 'Working closely with clients to understand and respond to project needs.',
  },
];

export default function Capabilities() {
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
            How We Deliver
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold text-brand-navy mb-4">
            Built Around Strong Execution
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Core capabilities that support quality construction and project delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group min-w-0"
            >
              <div className="w-14 h-14 rounded-full bg-brand-sand flex items-center justify-center text-brand-rust mb-6 group-hover:bg-brand-rust group-hover:text-white transition-colors">
                <cap.icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3 break-words leading-tight">{cap.title}</h3>
              <p className="text-slate-600 leading-relaxed">{cap.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
