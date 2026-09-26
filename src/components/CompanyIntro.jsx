import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import projectImage from '../../public/project.jpg';

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
              to="/about"
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={projectImage}
                alt="Modern residential building construction in India"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
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
