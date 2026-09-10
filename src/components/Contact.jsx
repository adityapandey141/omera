import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Globe, Linkedin } from 'lucide-react';
import ContactForm from './ContactForm';

const contactItems = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'C/O Shri Mumtajkhan, Noorkhan Ansari Ward, Bhandara, Bhandara, Bhandara, Maharashtra, India, 441904.',
  },
  { icon: Mail, label: 'Email', value: 'omerainfra@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9405613323' },
  { icon: Globe, label: 'Website', value: '[Website to be updated]' },
  { icon: Linkedin, label: 'LinkedIn', value: '[LinkedIn to be updated]' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-sand">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
              Get in Touch
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold text-brand-navy mb-6">
              Contact
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              For construction and infrastructure enquiries, please reach out to the Omrea
              Infrastructure team.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">Company</p>
                <p className="text-xl font-bold text-brand-navy">Omrea Infrastructure Private Limited</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">Director</p>
                <p className="text-xl font-bold text-brand-navy">Maksud Patel</p>
              </div>
            </div>

            <div className="mt-10 space-y-5">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white text-brand-rust flex items-center justify-center shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">
                      {item.label}
                    </p>
                    <p className="text-slate-700 font-medium mt-1 break-words">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100"
          >
            <h3 className="text-xl font-bold text-brand-navy mb-6 break-words leading-tight">Send an Enquiry</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
