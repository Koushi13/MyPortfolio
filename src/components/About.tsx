import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GraduationCap, Target, Sparkles } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Education',
      description: [
        'UI/UX Designing Course - Pumo Technovation',
        'MSc Computer Science - Sasurie Institute (2024-2026)',
        'BSc Information Technology - First Class with Distinction (2021-2024)',
      ],
      color: '#C4B5FD',
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Focus Areas',
      description: 'User research, wireframing, prototyping, user flows, usability, and interface design in Figma.',
      color: '#B8D4E8',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Career Goals',
      description: 'Designing accessible and visually consistent products that improve user experience and deliver clear value.',
      color: '#A8D5BA',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 lg:py-16 bg-gradient-to-b from-[#FAFAF9] via-white to-[#F5F3EF] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(253, 180, 200, 0.1) 0%, transparent 70%)',
          y,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div style={{ opacity, scale }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-block mb-4"
            >
              <span className="text-[2.5rem] sm:text-[3rem] bg-gradient-to-r from-[#C4B5FD] via-[#B8D4E8] to-[#A8D5BA] bg-clip-text text-transparent">
                About Me
              </span>
            </motion.div>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-[#C4B5FD] to-[#A8D5BA] mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute -inset-6 rounded-3xl opacity-75 blur-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #C4B5FD 0%, #B8D4E8 50%, #A8D5BA 100%)',
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <div className="relative bg-white p-2 rounded-3xl shadow-2xl shadow-[#C4B5FD]/20">
                  <ImageWithFallback
                    src="/koushi-photo.jpg"
                    alt="Koushika M"
                    className="relative w-full max-w-md aspect-square object-cover rounded-2xl"
                  />

                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#C4B5FD]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="space-y-4">
                <motion.p
                  className="text-[#374151] text-[1.125rem] leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Hi! I'm Koushika M, a UI/UX intern and designer who enjoys turning ideas into clean and user-friendly
                  interfaces. I focus on understanding user needs, simplifying flows, and creating experiences that feel
                  intuitive from the first interaction.
                </motion.p>
                <motion.p
                  className="text-[#374151] text-[1.125rem] leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Along with UI/UX design, I bring basic frontend knowledge in HTML, CSS, and JavaScript, which helps me
                  create practical and implementable design solutions. I aim to craft visual systems that are consistent,
                  useful, and aligned with both user goals and product needs.
                </motion.p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 mt-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[#E8E6E1] hover:border-[#C4B5FD]/50 hover:shadow-xl hover:shadow-[#C4B5FD]/10 transition-all"
                  >
                    <motion.div
                      className="mb-3"
                      style={{ color: item.color }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-[#374151] mb-1.5">{item.title}</h3>
                    {Array.isArray(item.description) ? (
                      <ul className="list-disc list-inside space-y-1 text-[#9CA3AF] text-[0.95rem]">
                        {item.description.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[#9CA3AF] text-[0.95rem]">{item.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}