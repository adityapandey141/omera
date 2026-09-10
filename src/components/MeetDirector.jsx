import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function MeetDirector() {
  return (
    <section id="director" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
            Leadership
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold text-brand-navy">
            Meet the Director
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-1 flex justify-center"
          >
            <img
              src="/maksudpatel.png"
              alt="Masud Patel"
              className="w-full max-w-md h-auto rounded-2xl shadow-2xl object-cover aspect-[3/4]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-2"
          >
            <h3 className="text-2xl md:text-3xl break-words leading-tight font-bold text-brand-navy mb-2">
              Masud Patel
            </h3>
            <p className="text-xl text-slate-500 font-medium mb-6">Director</p>
            <p className="text-slate-600 leading-relaxed mb-6">
              A professional biography will be updated here once verified information is provided.
              The leadership team is responsible for the company&apos;s execution, operations and
              growth strategy.
            </p>

            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 text-brand-rust hover:text-brand-orange font-semibold transition-colors"
            >
              KNOW MORE <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
