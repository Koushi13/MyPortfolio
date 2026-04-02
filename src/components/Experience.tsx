import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const experiences = [
    {
      title: '🎯 UI/UX Intern',
      company: 'AmasQIS',
      duration: '2026 - Present',
      location: 'India',
      color: '#C4B5FD',
      achievements: [
        'Designed user-centric UI screens and created structured wireframes in Figma.',
        'Built interactive prototypes and refined flows to improve clarity and usability.',
        'Used AI-driven prompts and vibe coding in VS Code to support frontend implementation with basic GitHub version control.',
      ],
    },
    {
      title: '🎯 Project Management & Social Media Manager',
      company: 'Brand Ventures',
      duration: 'Jan 2024 - Jan 2025',
      location: 'India',
      color: '#B8D4E8',
      achievements: [
        'Managed social media accounts and designed creatives using Canva.',
        'Improved local visibility through Google My Business optimization.',
        'Created and managed blog content to support audience engagement and brand communication.',
      ],
    },
    {
      title: 'Customer Care Executive',
      company: 'Maniraj Cotton Mills',
      duration: 'Feb 2025 - Jul 2025',
      location: 'India',
      color: '#A8D5BA',
      achievements: [
        'Managed attendance and employee records with process accuracy.',
        'Handled invoice and payment-related customer queries with clear communication.',
        'Tracked expenses and strengthened organization, communication, and problem-solving skills.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-12 lg:py-16 bg-gradient-to-b from-white via-[#F5F3EF] to-[#FAFAF9] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <motion.div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(253, 180, 200, 0.08) 0%, transparent 70%)',
          y,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div style={{ opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <motion.span
              className="text-[2.5rem] sm:text-[3rem] bg-gradient-to-r from-[#C4B5FD] via-[#B8D4E8] to-[#A8D5BA] bg-clip-text text-transparent inline-block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              💼 WORK EXPERIENCE
            </motion.span>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-[#A8D5BA] to-[#C4B5FD] mx-auto mt-4 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-[#9CA3AF] max-w-2xl mx-auto mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My professional journey across UI/UX, design execution, and communication-focused roles
            </motion.p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Animated Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C4B5FD] via-[#B8D4E8] via-[#A8D5BA] to-[#FDB4C8] hidden md:block rounded-full">
                <motion.div
                  className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white to-transparent"
                  style={{
                    height: useTransform(scrollYProgress, [0, 0.5], ['100%', '0%']),
                  }}
                />
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-8 top-8 w-6 h-6 rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 hidden md:block z-10"
                      style={{ backgroundColor: exp.color }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15, type: 'spring' }}
                      whileHover={{ scale: 1.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: exp.color }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>

                    <motion.div
                      className="md:ml-20 bg-white/80 backdrop-blur-sm rounded-3xl p-5 lg:p-6 border border-[#E8E6E1] hover:border-[#C4B5FD]/50 hover:shadow-2xl hover:shadow-[#C4B5FD]/10 transition-all"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header with gradient accent */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
                        style={{
                          background: `linear-gradient(90deg, ${exp.color} 0%, ${exp.color}66 100%)`,
                        }}
                      />

                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">
                        <div>
                          <motion.h3
                            className="text-[#374151] mb-2"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
                          >
                            {exp.title}
                          </motion.h3>
                          <motion.div
                            className="flex items-center gap-2 mb-1"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 + 0.15 }}
                          >
                            <Briefcase className="h-4 w-4" style={{ color: exp.color }} />
                            <span className="text-[#374151]">{exp.company}</span>
                          </motion.div>
                        </div>
                        <div className="flex flex-col gap-1.5 lg:text-right">
                          <motion.div
                            className="flex items-center gap-2 text-[#9CA3AF]"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                          >
                            <Calendar className="h-4 w-4" />
                            <span className="text-[0.9rem]">{exp.duration}</span>
                          </motion.div>
                          <motion.div
                            className="flex items-center gap-2 text-[#9CA3AF]"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 + 0.25 }}
                          >
                            <MapPin className="h-4 w-4" />
                            <span className="text-[0.9rem]">{exp.location}</span>
                          </motion.div>
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.15 + achIndex * 0.05,
                            }}
                            className="flex items-start gap-3 group/item"
                          >
                            <motion.div
                              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: exp.color }}
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="text-[#9CA3AF] text-[0.95rem] leading-relaxed group-hover/item:text-[#374151] transition-colors">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}