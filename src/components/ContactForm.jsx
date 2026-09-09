import { useState } from 'react';

const projectTypes = [
  'Residential',
  'Commercial',
  'Industrial',
  'Infrastructure',
  'Other',
];

export default function ContactForm({ minimal = false }) {
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    projectLocation: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-brand-navy mb-2">Thank you.</h4>
        <p className="text-slate-600">
          Thank you for contacting Omrea Infrastructure. Our team will get in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Full Name <span className="text-brand-rust">*</span>
          </label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800"
            placeholder="Full name"
          />
          {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Company Name
          </label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800"
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email <span className="text-brand-rust">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800"
            placeholder="email@example.com"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800"
            placeholder="Phone number"
          />
        </div>
      </div>

      {!minimal && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Project Type
            </label>
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 bg-white"
            >
              <option value="">Select project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Project Location
            </label>
            <input
              name="projectLocation"
              value={form.projectLocation}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800"
              placeholder="Project location"
            />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800"
          placeholder="Your message"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brand-rust hover:bg-brand-orange text-white font-semibold py-4 rounded-lg transition-colors shadow-lg"
      >
        SUBMIT ENQUIRY
      </button>

      <p className="text-xs text-slate-500 text-center">
        This form is ready to connect to an email/API/backend later.
      </p>
    </form>
  );
}
