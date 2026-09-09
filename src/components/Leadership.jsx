import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function Leadership() {
  return (
    <section className="py-20 md:py-28 bg-white">
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
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl break-words leading-tight font-bold text-brand-navy mb-2">
              Masud Mumtajkhan Khan
            </h3>
            <p className="text-xl text-slate-500 font-medium mb-6">Director</p>
            <p className="text-slate-600 leading-relaxed mb-6">
              A professional biography will be updated here once verified information is provided.
              The leadership team is responsible for the company&apos;s execution, operations and
              growth strategy.
            </p>

            <div className="p-5 bg-brand-sand rounded-xl border-l-4 border-brand-rust">
              <p className="text-slate-700 font-medium">
                &ldquo;Placeholder for verified quote or leadership vision. To be updated from the
                company profile.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="w-64 h-80 md:w-80 md:h-[26rem] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-slate-500">
                <div className="w-24 h-24 rounded-full bg-slate-400/30 flex items-center justify-center mx-auto mb-4">
                  <User size={48} />
                </div>
                <p className="font-semibold">Portrait placeholder</p>
                <p className="text-sm">Replace with professional image</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
