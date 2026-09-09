import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const points = [
  'Growing infrastructure requirements',
  'Sustained construction demand',
  'Commercial and industrial development',
  'Expansion of project opportunities',
  'Increasing execution requirements',
  'Opportunity to scale through additional working capital and capacity',
];

export default function MarketOpportunity() {
  return (
    <section id="growth" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
              Market Outlook
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">
              Opportunity Ahead
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Construction and infrastructure remain foundational to economic development. As demand
              for built assets continues, execution-focused contractors are positioned to capture
              expanding project opportunities.
            </p>

            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle size={22} className="text-brand-rust shrink-0 mt-0.5" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/investment#funding"
              className="inline-flex items-center gap-2 mt-10 text-brand-rust hover:text-brand-orange font-semibold transition-colors"
            >
              SEE THE FUNDING PLAN <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="h-96 bg-gradient-to-br from-slate-800 to-slate-900 relative">
              <svg
                viewBox="0 0 600 500"
                className="w-full h-full opacity-40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 400 Q100 360 200 400 T400 400 T600 400" stroke="#E8734A" strokeWidth="3" />
                <path d="M0 420 Q120 380 240 420 T480 420" stroke="#C43F2E" strokeWidth="2" />
                <path d="M0 440 Q80 410 160 440 T320 440" stroke="#E8734A" strokeWidth="2" />
                <circle cx="80" cy="120" r="6" fill="#E8734A" />
                <circle cx="140" cy="90" r="6" fill="#E8734A" />
                <circle cx="220" cy="70" r="6" fill="#E8734A" />
                <circle cx="320" cy="60" r="6" fill="#E8734A" />
                <circle cx="440" cy="80" r="6" fill="#E8734A" />
                <circle cx="540" cy="110" r="6" fill="#E8734A" />
                <path d="M80 120 L140 90 L220 70 L320 60 L440 80 L540 110" stroke="#E8734A" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">Growth</p>
                  <p className="text-slate-300 text-lg">Driven by fundamentals</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
