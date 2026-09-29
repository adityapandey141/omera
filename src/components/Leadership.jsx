import { motion } from 'framer-motion';

export default function Leadership() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-brand-rust font-semibold tracking-widest text-sm uppercase mb-2">
            Leadership
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl break-words leading-tight text-balance font-bold text-brand-navy">
            Meet the Director
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl break-words leading-tight font-bold text-brand-navy mb-2">
              Maksud Patel
            </h3>
            <p className="text-xl text-slate-500 font-medium mb-6">Director</p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Maksud Patel is the Director of Omrea Infrastructure Private Limited, leading
              the company&apos;s construction contracting and infrastructure operations. With a
              strong commitment to quality execution and professional project management, he
              oversees all aspects of project delivery — from planning and resource coordination
              to on-site execution and client relationships.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              His hands-on approach and focus on building long-term partnerships with clients,
              contractors and stakeholders has been instrumental in establishing Omrea as a
              dependable name in the construction sector across Maharashtra.
            </p>

            <div className="p-5 bg-brand-sand rounded-xl border-l-4 border-brand-rust">
              <p className="text-slate-700 font-medium">
                &ldquo;Our commitment is simple — deliver every project with integrity, quality
                and professionalism. We believe in building structures that stand the test of time
                and relationships that grow stronger with every project.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <img
              src="/maksudpatel.png"
              alt="Maksud Patel"
              className="w-full max-w-md h-auto rounded-2xl shadow-2xl object-cover aspect-[3/4]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
