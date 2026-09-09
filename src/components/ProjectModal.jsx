import { AnimatePresence, motion } from 'framer-motion';
import { X, MapPin, Calendar, Tag, Briefcase, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
          >
            <div className="h-56 bg-gradient-to-br from-slate-700 to-slate-900 relative">
              <div className="absolute inset-0 opacity-40">
                <svg viewBox="0 0 600 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="80" y="100" width="100" height="150" stroke="#E8734A" strokeWidth="2" />
                  <rect x="220" y="70" width="130" height="180" stroke="#94a3b8" strokeWidth="2" />
                  <rect x="400" y="90" width="110" height="160" stroke="#E8734A" strokeWidth="2" />
                  <line x1="0" y1="250" x2="600" y2="250" stroke="#E8734A" strokeWidth="3" />
                </svg>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2">
                {project.name}
              </h3>
              <p className="text-slate-500 font-medium mb-6">{project.type}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-brand-sand rounded-xl">
                  <MapPin size={20} className="text-brand-rust" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Location</p>
                    <p className="font-semibold text-slate-800">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-brand-sand rounded-xl">
                  <Tag size={20} className="text-brand-rust" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Status</p>
                    <p className="font-semibold text-slate-800">{project.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-brand-sand rounded-xl">
                  <Calendar size={20} className="text-brand-rust" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Year</p>
                    <p className="font-semibold text-slate-800">{project.year}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-2 flex items-center gap-2">
                    <Briefcase size={20} className="text-brand-rust" /> Project Overview
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{project.overview}</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-2">Scope of Work</h4>
                  <p className="text-slate-600 leading-relaxed">{project.scope}</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-brand-rust hover:bg-brand-orange text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                DISCUSS YOUR PROJECT <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
