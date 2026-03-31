import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import {
  Code2,
  Brain,
  Wrench,
  BarChart3,
  Database,
  Palette,
  Sparkles,
  Globe,
} from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skillCategories = [
    {
      category: 'UI/UX Fundamentals',
      icon: <Code2 className="h-6 w-6" />,
      skills: ['User Research', 'Wireframing', 'Prototyping', 'User Flows', 'Usability Testing', 'Interaction Design'],
      color: '#C4B5FD',
    },
    {
      category: 'UX Process',
      icon: <Brain className="h-6 w-6" />,
      skills: ['Problem Framing', 'User Journey Mapping', 'Information Architecture', 'Low-Fidelity Prototypes', 'Feedback Iteration', 'Design Thinking'],
      color: '#B8D4E8',
    },
    {
      category: 'Interface Design',
      icon: <Sparkles className="h-6 w-6" />,
      skills: ['Typography', 'Color Theory', 'Layout Systems', 'Spacing and Hierarchy', 'Component Styling', 'Responsive UI'],
      color: '#A8D5BA',
    },
    {
      category: 'Graphic Design',
      icon: <Globe className="h-6 w-6" />,
      skills: ['Brand Visuals', 'Social Creatives', 'Poster Design', 'Visual Composition', 'Image Editing', 'Design Consistency'],
      color: '#FDB4C8',
    },
    {
      category: 'Tools',
      icon: <BarChart3 className="h-6 w-6" />,
      skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Miro', 'Google Workspace'],
      color: '#FFD5C2',
    },
    {
      category: 'Design Delivery',
      icon: <Wrench className="h-6 w-6" />,
      skills: ['Design Documentation', 'Design Handoff', 'Component Guidelines', 'Visual QA', 'Cross-Team Communication', 'Iteration Cycles'],
      color: '#C4B5FD',
    },
    {
      category: 'Basic Frontend',
      icon: <Database className="h-6 w-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Markup', 'UI Feasibility', 'Developer Collaboration'],
      color: '#B8D4E8',
    },
    {
      category: 'Professional Skills',
      icon: <Palette className="h-6 w-6" />,
      skills: ['Communication', 'Presentation', 'Time Management', 'Team Collaboration', 'Attention to Detail', 'Adaptability'],
      color: '#A8D5BA',
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-12 lg:py-16 bg-gradient-to-b from-[#F5F3EF] via-white to-[#FAFAF9] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 left-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(184, 212, 232, 0.1) 0%, transparent 70%)',
          y,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 213, 186, 0.1) 0%, transparent 70%)',
          y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
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
              Skills & Expertise
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
              A practical skill set for creating clean, user-centered digital experiences
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white/80 backdrop-blur-sm border border-[#E8E6E1] rounded-2xl p-4 hover:border-[#C4B5FD]/50 hover:shadow-2xl hover:shadow-[#C4B5FD]/10 transition-all overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}10 0%, transparent 100%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      style={{ color: category.color }}
                      className="group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-[#374151]">{category.category}</h3>
                  </div>
                  <div className="space-y-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.05 + skillIndex * 0.03,
                        }}
                        className="flex items-center gap-2 group/item"
                      >
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: category.color }}
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-[#9CA3AF] text-[0.9rem] group-hover/item:text-[#374151] transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Competencies with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-white via-[#F5F3EF] to-white p-6 lg:p-8 rounded-3xl shadow-2xl border border-[#E8E6E1]"
          >
            <h3 className="text-[#374151] mb-6 text-center text-[1.5rem]">Core Competencies</h3>
            <div className="space-y-4">
              {[
                { name: 'UI/UX Design', level: 90, color: '#C4B5FD' },
                { name: 'Wireframing & Prototyping', level: 88, color: '#B8D4E8' },
                { name: 'Visual Design', level: 85, color: '#A8D5BA' },
                { name: 'Usability & User Flows', level: 82, color: '#FDB4C8' },
                { name: 'Basic Frontend (HTML, CSS, JavaScript)', level: 76, color: '#FFD5C2' },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-[#374151]">{skill.name}</span>
                    <motion.span
                      className="text-[#9CA3AF]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-3 bg-[#E8E6E1] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full relative"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}99 100%)`,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}