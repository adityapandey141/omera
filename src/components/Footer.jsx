import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Our Capabilities', to: '/capabilities' },
  { label: 'Why Omrea', to: '/why-omrea' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Contact', to: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms & Conditions', to: '#' },
];

export default function Footer({ openModal }) {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.png" alt="Omrea Infrastructure" className="h-12 w-auto" />
            </Link>
            <p className="text-slate-400 max-w-md mb-6 leading-relaxed">
              Omrea Infrastructure Private Limited is a construction and infrastructure company
              focused on delivering quality-driven projects through professional execution.
            </p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-brand-rust hover:bg-brand-orange text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              GET IN TOUCH <ArrowRight size={18} />
            </button>
          </div>

          <div>
            <p className="font-bold text-lg mb-4">Navigation</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-lg mb-4">Legal</p>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-bold text-lg mb-4">Contact</p>
            <p className="text-slate-400 text-sm">Masud Patel</p>
            <p className="text-slate-400 text-sm">Director</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Omrea Infrastructure Private Limited. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Construction &amp; Infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}
