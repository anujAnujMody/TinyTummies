"use client";

import { motion } from "framer-motion";

const partnerSchools = [
  { name: "Sunrise International School", students: "120+" },
  { name: "Little Stars Academy", students: "85+" },
  { name: "Greenfield Public School", students: "95+" },
  { name: "Maple Leaf Montessori", students: "60+" },
  { name: "Bright Future School", students: "75+" },
  { name: "Oakridge International", students: "110+" },
];

const stats = [
  { value: "500+", label: "Happy Parents" },
  { value: "12", label: "Partner Schools" },
  { value: "5,000+", label: "Meals Delivered" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function SchoolPartners() {
  return (
    <section id="partners" className="relative overflow-hidden bg-gradient-to-b from-tt-cream-light to-tt-warm py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-xs font-bold tracking-widest text-tt-orange uppercase mb-2">
            School Partnerships
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-tt-green-deep leading-tight">
            Trusted by <span className="text-tt-green">Schools</span>, Loved by Parents
          </h2>
          <p className="mt-3 text-tt-text-secondary text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            We partner with leading schools to ensure every child gets a nutritious, delicious lunch delivered right to their classroom.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
              }}
              className="text-center p-5 md:p-6 rounded-2xl bg-white shadow-sm border border-tt-green/10"
            >
              <p className="font-display text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-tt-green to-tt-lime bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-tt-text-secondary font-display font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Schools Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {partnerSchools.map((school) => (
            <motion.div
              key={school.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="flex items-center gap-3 p-4 md:p-5 rounded-xl bg-white shadow-sm border border-tt-green/10 hover:shadow-md transition-all duration-300"
            >
              {/* School icon placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-tt-green/10 to-tt-lime/10 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-tt-green">
                  <path d="M2 22h20" />
                  <path d="M6 18V6l6-4 6 4v12" />
                  <path d="M10 22V14" />
                  <path d="M14 22V14" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-display font-bold text-tt-green-deep text-sm md:text-base truncate">
                  {school.name}
                </p>
                <p className="text-xs text-tt-text-secondary">
                  {school.students} students enrolled
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-tt-text-secondary text-sm md:text-base">
            Want to partner with us?{" "}
            <a
              href="https://wa.me/917975465679?text=Hi%2C%20I%27m%20interested%20in%20partnering%20Tiny%20Tummies%20for%20our%20school"
              className="text-tt-green font-display font-bold hover:underline"
            >
              Let&apos;s talk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
