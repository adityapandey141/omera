import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function InvestorCTA({ openModal }) {
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Interested in the Opportunity?
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
            Request the investor deck to explore Omrea Infrastructure Private Limited&apos;s business
            model, financial information, growth strategy and funding opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-rust hover:bg-slate-100 font-semibold px-8 py-4 rounded-md transition-colors shadow-lg"
            >
              REQUEST INVESTOR DECK <ArrowRight size={18} />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-md transition-colors"
            >
              CONTACT MANAGEMENT <MessageSquare size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
