import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const highlights = [
  'Professional execution',
  'Quality-focused processes',
  'Reliable project delivery',
  'Client-centric approach',
  'Long-term relationships',
  'Continuous improvement',
];

export default function CompanyIntro() {
  return (
    <section id="about" className="py-20 md:py-28 bg-brand-sand">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
              About Omrea Infrastructure
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy mb-6 leading-tight text-balance break-words">
              Built on Execution. Focused on Relationships.
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
              Omrea Infrastructure Private Limited operates in the construction and infrastructure
              sector, providing professional construction contracting and project execution services.
              The company is focused on delivering dependable solutions while building long-term
              relationships with clients, partners and stakeholders.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              With a commitment to execution, quality and professional project management, Omrea aims
              to create lasting value through every project it undertakes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={20} className="text-brand-rust shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-rust hover:text-brand-orange font-semibold transition-colors"
            >
              KNOW MORE ABOUT US <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-800">
              <svg
                viewBox="0 0 600 500"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="600" height="500" fill="#1e293b" />
                <rect x="80" y="250" width="120" height="200" fill="#334155" />
                <rect x="75" y="240" width="130" height="10" fill="#E8734A" />
                <rect x="230" y="180" width="160" height="270" fill="#475569" />
                <rect x="225" y="170" width="170" height="10" fill="#C43F2E" />
                <rect x="430" y="220" width="110" height="230" fill="#334155" />
                <rect x="425" y="210" width="120" height="10" fill="#E8734A" />
                <line x1="0" y1="450" x2="600" y2="450" stroke="#94a3b8" strokeWidth="2" />
                <circle cx="520" cy="120" r="35" fill="#E8734A" opacity="0.8" />
                <path d="M0 460 Q150 440 300 460 T600 460" stroke="#475569" strokeWidth="2" fill="none" />
              </svg>
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
                <p className="text-white font-semibold text-lg">Execution-first infrastructure business</p>
                <p className="text-slate-300 text-sm">Construction contracting and project delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
