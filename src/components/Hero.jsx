import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
    tagline: 'Construction & Infrastructure',
    heading: (
      <>
        Building with Precision.
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-rust">
          Delivering with Confidence.
        </span>
      </>
    ),
    text: 'Professional construction contracting and project execution services focused on quality, coordination and client satisfaction.',
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80',
    tagline: 'Quality Execution',
    heading: (
      <>
        From Foundation
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-rust">
          To Finish.
        </span>
      </>
    ),
    text: 'End-to-end construction support with a structured approach to planning, execution and delivery.',
  },
  {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80',
    tagline: 'Reliable Partnerships',
    heading: (
      <>
        Built on Trust.
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-rust">
          Driven by Excellence.
        </span>
      </>
    ),
    text: 'Long-term relationships with clients, partners and stakeholders through dependable project delivery.',
  },
];

export default function Hero({ openModal }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  const slide = slides[current];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-brand-navy">
      {/* Background images */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full section-padding max-w-7xl mx-auto pt-24 pb-16">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/90 text-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                  {slide.tagline}
                </div>

                {/* Company name highlight */}
                <p className="text-brand-orange font-bold tracking-widest text-sm uppercase">
                  OMREA INFRASTRUCTURE PRIVATE LIMITED
                </p>

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight break-words">
                  {slide.heading}
                </h1>

                {/* Description */}
                <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  {slide.text}
                </p>

                {/* CTA */}
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 bg-brand-rust hover:bg-brand-orange text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-all shadow-lg hover:shadow-xl"
                >
                  GET IN TOUCH <ArrowRight size={16} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-10 h-3 bg-brand-rust'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
        <motion.div
          key={current}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: 'linear' }}
          className="h-full bg-brand-rust"
        />
      </div>
    </section>
  );
}
