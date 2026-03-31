import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

function BehanceIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8.69 11.697c.488-.237.894-.566 1.216-.986.322-.42.483-.95.483-1.589 0-.79-.2-1.433-.6-1.928-.399-.495-.93-.837-1.593-1.025a5.154 5.154 0 0 0-1.286-.164H2v12h5.108c.674 0 1.277-.084 1.81-.253.533-.168.982-.415 1.35-.738.367-.325.648-.731.844-1.22.195-.487.293-1.053.293-1.697 0-.765-.162-1.41-.486-1.934a3.165 3.165 0 0 0-1.229-1.166zM4.56 8.14h2.24c.382 0 .692.096.929.29.237.193.356.51.356.95 0 .475-.119.804-.356.987-.237.184-.547.276-.929.276H4.56V8.14zm2.536 7.725H4.56v-3.148h2.536c.482 0 .861.126 1.136.378.275.252.413.647.413 1.187 0 .529-.138.926-.413 1.19-.275.262-.654.393-1.136.393zM14.06 8.7h5.88v1.43h-5.88zM18.236 11.345c-.86 0-1.588.139-2.185.417-.597.278-1.084.654-1.462 1.129a4.57 4.57 0 0 0-.836 1.623 6.785 6.785 0 0 0-.265 1.89c0 .644.091 1.253.274 1.826.183.573.468 1.072.856 1.497.387.425.88.762 1.478 1.011.599.25 1.312.375 2.141.375 1.16 0 2.12-.27 2.88-.81.758-.54 1.262-1.35 1.512-2.431h-2.361c-.086.303-.287.588-.603.853-.316.267-.773.4-1.369.4-.658 0-1.163-.164-1.517-.49-.354-.326-.558-.86-.612-1.601H22.8c.043-.701-.01-1.375-.16-2.024a4.72 4.72 0 0 0-.701-1.717 3.642 3.642 0 0 0-1.413-1.194c-.58-.292-1.344-.438-2.29-.438zm-2.055 3.59c.011-.197.053-.412.127-.645.075-.232.19-.448.346-.645.156-.198.36-.365.612-.501.253-.136.568-.204.946-.204.572 0 1.003.15 1.293.45.291.3.477.816.557 1.545h-3.881z" />
    </svg>
  );
}

export function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Ride Booking Mobile App - UI/UX Case Study',
      description:
        'Designed a user-friendly ride booking mobile application focused on quick booking, real-time tracking, and seamless user experience. Created structured user flows, wireframes, and high-fidelity UI screens using Figma, ensuring clarity and usability.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['Problem', 'User Flow', 'Wireframes', 'Final UI Screens', 'Prototype', 'Figma', 'Illustrator'],
      behance: 'https://www.behance.net/koushika',
      demo: '#',
      color: '#C4B5FD',
    },
    {
      title: 'Ride Booking Website - Product Information Platform',
      description:
        'Designed a responsive website to showcase the ride booking application, focusing on clear communication of features, user benefits, and easy navigation. The website highlights app functionalities, download options, and brand identity.',
      image: 'https://images.unsplash.com/photo-1517940310602-26535839fe84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['Landing Page Design', 'Features Section', 'App Showcase', 'Call-to-Action (Download App)', 'Figma (if used)'],
      behance: 'https://www.behance.net/koushika',
      demo: '#',
      color: '#B8D4E8',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-12 lg:py-16 bg-gradient-to-b from-[#FAFAF9] via-[#F5F3EF] to-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(196, 181, 253, 0.08) 0%, transparent 70%)',
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
              Featured Projects
            </motion.span>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-[#C4B5FD] to-[#A8D5BA] mx-auto mt-4 rounded-full"
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
              A showcase of UI/UX case studies and visual design explorations
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-[#E8E6E1] hover:border-[#C4B5FD]/50 hover:shadow-2xl hover:shadow-[#C4B5FD]/20 transition-all"
              >
                <div className="relative overflow-hidden aspect-video">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${project.color}dd 0%, ${project.color}66 50%, transparent 100%)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Action Buttons */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 flex gap-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      size="sm"
                      className="flex-1 bg-white/90 hover:bg-white text-[#374151] shadow-lg backdrop-blur-sm"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30 shadow-lg"
                      onClick={() => window.open(project.behance, '_blank')}
                    >
                      <BehanceIcon className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>

                <div className="p-5">
                  <h3 className="text-[#374151] mb-2">{project.title}</h3>
                  <p className="text-[#9CA3AF] mb-3 text-[0.95rem] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 rounded-full text-[0.85rem]"
                        style={{
                          backgroundColor: `${project.color}20`,
                          color: project.color.replace('FD', 'CC'),
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-2 border-[#C4B5FD] text-[#374151] hover:bg-[#C4B5FD]/10 px-8 py-6 backdrop-blur-sm bg-white/50"
                onClick={() => window.open('https://www.behance.net/koushika', '_blank')}
              >
                <BehanceIcon className="mr-2 h-5 w-5" />
                View More Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}