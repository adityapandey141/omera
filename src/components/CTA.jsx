import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

export default function CTA({ openModal }) {
  return (
    <section className="py-20 md:py-28 bg-brand-rust text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold mb-6">
            Let&apos;s Build Something Together.
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10">
            Have a construction or infrastructure requirement? Connect with the Omrea Infrastructure
            team to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-rust hover:bg-slate-100 font-semibold px-8 py-4 rounded-md transition-colors shadow-lg"
            >
              GET IN TOUCH <ArrowRight size={18} />
            </button>
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-md transition-colors"
            >
              REQUEST A QUOTE <FileText size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
