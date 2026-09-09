import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero({ openModal }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-navy"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-brand-navy to-black" />
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="0" y1="750" x2="1200" y2="750" stroke="#E8734A" strokeWidth="2" />
          <rect x="150" y="300" width="120" height="450" stroke="#475569" strokeWidth="2" />
          <rect x="290" y="220" width="160" height="530" stroke="#475569" strokeWidth="2" />
          <rect x="520" y="180" width="140" height="570" stroke="#E8734A" strokeWidth="2" />
          <rect x="700" y="260" width="180" height="490" stroke="#475569" strokeWidth="2" />
          <rect x="920" y="340" width="100" height="410" stroke="#475569" strokeWidth="2" />
          <path d="M0 600 Q300 520 600 600 T1200 600" stroke="#1e293b" strokeWidth="1.5" fill="none" />
          <path d="M0 680 Q400 600 800 680 T1600 680" stroke="#334155" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-black/40 z-[1]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full section-padding max-w-7xl mx-auto pt-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/90 text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              Construction &amp; Infrastructure
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight text-balance break-words"
            >
              Building with Precision. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-rust">
                Delivering with Confidence.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              Omrea Infrastructure Private Limited is a construction and infrastructure company
              committed to delivering quality-driven projects through professional execution, reliable
              processes and a strong focus on client requirements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-brand-rust hover:bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-all shadow-lg hover:shadow-xl"
              >
                GET IN TOUCH <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:justify-self-end w-full max-w-md"
          >
            <div className="glass-dark rounded-2xl p-8 border border-white/10 shadow-2xl">
              <p className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-2">
                Omrea Infrastructure
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 break-words">Construction Contractor</h2>
              <p className="text-slate-300 font-medium">Quality · Execution · Reliability</p>

              <hr className="border-white/10 my-6" />

              <p className="text-slate-400 text-sm leading-relaxed">
                We provide professional construction contracting and project execution services
                focused on quality, coordination and client satisfaction.
              </p>

              <Link
                to="/about"
                className="mt-6 block w-full text-center bg-brand-rust hover:bg-brand-orange text-white text-sm font-semibold py-3 rounded-md transition-colors"
              >
                KNOW MORE ABOUT US
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
