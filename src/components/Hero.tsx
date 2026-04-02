import { motion, useScroll, useTransform } from 'motion/react';
import { Linkedin, Download, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

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

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAFAF9] via-[#F5F3EF] to-[#E8E6E1]">
      {/* High-Quality Background with Parallax */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196, 181, 253, 0.15) 0%, transparent 70%)',
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 213, 186, 0.12) 0%, transparent 70%)',
            x: -mousePosition.x,
            y: -mousePosition.y,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(184, 212, 232, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#C4B5FD] to-[#FDB4C8]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1679193559674-860ef78899bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYWJzdHJhY3QlMjBncmFkaWVudHxlbnwxfHx8fDE3NjE4NTYwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-5" />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
        style={{ opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-[3rem] sm:text-[4.5rem] lg:text-[6rem] mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-[#C4B5FD] via-[#B8D4E8] to-[#A8D5BA] bg-clip-text text-transparent">
                Koushika M
              </span>
            </motion.h1>

            <motion.h2
              className="text-[1.5rem] sm:text-[2rem] text-[#374151] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              UI/UX Designer | Graphic Designer | Prompt-Based Developer
            </motion.h2>

            <motion.p
              className="text-[#9CA3AF] max-w-2xl mx-auto mb-8 text-[1.125rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              I design clean, intuitive, and user-centered digital experiences.
              I combine UI/UX thinking, visual design, and AI-assisted frontend workflows to turn ideas into
              practical, implementation-ready products.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-[#C4B5FD] to-[#B8D4E8] hover:from-[#B8A5ED] hover:to-[#A8C4D8] text-[#374151] px-8 py-6 shadow-lg shadow-[#C4B5FD]/30"
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                className="border-2 border-[#C4B5FD] text-[#374151] hover:bg-[#C4B5FD]/10 px-8 py-6 backdrop-blur-sm bg-white/50"
              >
                <a href="/koushika%20resume.pdf" download="koushika resume.pdf" aria-label="Download resume PDF">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Linkedin, href: 'https://www.linkedin.com/in/koushika1312/', label: 'LinkedIn' },
              { icon: BehanceIcon, href: 'https://www.behance.net/koushika', label: 'Behance' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative p-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#C4B5FD]/30 hover:border-[#C4B5FD] transition-all shadow-lg hover:shadow-[#C4B5FD]/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-6 w-6 text-[#374151] group-hover:text-[#C4B5FD] transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            onClick={() => scrollToSection('about')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 text-[#C4B5FD] hover:text-[#A8D5BA] transition-colors"
            aria-label="Scroll to about section"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={32} />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}