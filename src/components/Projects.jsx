import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, X } from 'lucide-react';
import ProjectModal from './ProjectModal';

const filters = ['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Other'];

const projects = [
  {
    name: 'Project Name (To Be Updated)',
    type: 'Commercial',
    location: 'Location',
    scope: 'Scope of work to be provided from company records.',
    status: 'Status',
    year: 'Year',
    category: 'Commercial',
    overview: 'Project overview to be added.',
  },
  {
    name: 'Project Name (To Be Updated)',
    type: 'Residential',
    location: 'Location',
    scope: 'Scope of work to be provided from company records.',
    status: 'Status',
    year: 'Year',
    category: 'Residential',
    overview: 'Project overview to be added.',
  },
  {
    name: 'Project Name (To Be Updated)',
    type: 'Infrastructure',
    location: 'Location',
    scope: 'Scope of work to be provided from company records.',
    status: 'Status',
    year: 'Year',
    category: 'Infrastructure',
    overview: 'Project overview to be added.',
  },
  {
    name: 'Project Name (To Be Updated)',
    type: 'Industrial',
    location: 'Location',
    scope: 'Scope of work to be provided from company records.',
    status: 'Status',
    year: 'Year',
    category: 'Industrial',
    overview: 'Project overview to be added.',
  },
];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
            Portfolio
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold text-brand-navy mb-4">
            Our Projects
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl">
            Delivering projects with a focus on quality, execution and client requirements.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                active === filter
                  ? 'bg-brand-rust text-white border-brand-rust'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-brand-rust hover:text-brand-rust'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group rounded-2xl overflow-hidden bg-brand-navy text-white shadow-xl min-w-0"
              >
                <div className="h-44 bg-gradient-to-br from-slate-700 to-slate-900 relative">
                  <div className="absolute inset-0 opacity-30">
                    <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="40" y="110" width="70" height="100" stroke="#E8734A" strokeWidth="1.5" />
                      <rect x="140" y="80" width="90" height="130" stroke="#94a3b8" strokeWidth="1.5" />
                      <rect x="260" y="100" width="80" height="110" stroke="#E8734A" strokeWidth="1.5" />
                      <line x1="0" y1="210" x2="400" y2="210" stroke="#E8734A" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1 break-words leading-tight">{project.name}</h3>
                      <p className="text-slate-400 text-sm">{project.type}</p>
                    </div>
                    <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full text-slate-300">
                      {project.status}
                    </span>
                  </div>
                  <p className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                    <MapPin size={16} /> {project.location} · {project.year}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.scope}</p>
                  <button
                    onClick={() => setSelected(project)}
                    className="inline-flex items-center gap-2 text-brand-orange hover:text-white font-semibold transition-colors text-sm"
                  >
                    View Project <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
