import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    sub: [
      { label: 'Leadership', to: '/leadership' },
      { label: 'Why Omrea', to: '/why-omrea' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    sub: [
      { label: 'Our Services', to: '/services' },
      { label: 'Our Capabilities', to: '/capabilities' },
    ],
  },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

function isActive(item, pathname) {
  if (pathname === item.to) return true;
  return item.sub?.some((s) => pathname === s.to) || false;
}

export default function Navbar({ openModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileSub, setOpenMobileSub] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenMobileSub(null);
  }, [pathname]);

  const toggleMobileSub = (label) => {
    setOpenMobileSub(openMobileSub === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-slate-200/60 shadow-sm'
          : 'bg-white/90 backdrop-blur border-white/10'
      }`}
    >
      <nav className="flex items-center justify-between h-20 section-padding max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src="/logo.png" alt="Omrea Infrastructure" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.sub && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.to}
                className={`flex items-center gap-1 py-1 transition-colors ${
                  isActive(item, pathname) ? 'text-brand-rust' : 'hover:text-brand-rust'
                }`}
              >
                {item.label}
                {item.sub && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Link>

              {item.sub && (
                <div
                  className={`absolute top-full left-0 min-w-[15rem] pt-2 transition-all duration-200 ${
                    openDropdown === item.label
                      ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2">
                    {item.sub.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className={`block px-3 py-2 rounded-lg text-slate-700 hover:bg-brand-sand hover:text-brand-rust transition-colors ${
                          pathname === sub.to ? 'text-brand-rust bg-brand-sand' : ''
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 bg-brand-rust hover:bg-brand-orange text-white text-sm font-semibold px-6 py-3 rounded-md transition-all shadow-md hover:shadow-lg"
          >
            GET IN TOUCH
          </button>
        </div>

        {/* Mobile toggles */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={openModal}
            className="bg-brand-rust text-white text-xs font-semibold px-4 py-2 rounded-md"
          >
            GET IN TOUCH
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 inset-x-0 bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="py-4 section-padding space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    className={`flex-1 py-3 font-semibold ${
                      isActive(item, pathname) ? 'text-brand-rust' : 'text-slate-800 hover:text-brand-rust'
                    }`}
                    onClick={() => !item.sub && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.sub && (
                    <button
                      onClick={() => toggleMobileSub(item.label)}
                      className="p-2 text-slate-500"
                      aria-label={`Toggle ${item.label}`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${openMobileSub === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>

                {item.sub && openMobileSub === item.label && (
                  <div className="pl-4 border-l-2 border-slate-100 ml-2 mb-2 space-y-1">
                    {item.sub.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className={`block px-3 py-2 rounded-md ${
                          pathname === sub.to ? 'text-brand-rust' : 'text-slate-600 hover:text-brand-rust'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
