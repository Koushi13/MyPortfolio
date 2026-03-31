import { motion } from 'motion/react';
import { Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

function BehanceIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8.69 11.697c.488-.237.894-.566 1.216-.986.322-.42.483-.95.483-1.589 0-.79-.2-1.433-.6-1.928-.399-.495-.93-.837-1.593-1.025a5.154 5.154 0 0 0-1.286-.164H2v12h5.108c.674 0 1.277-.084 1.81-.253.533-.168.982-.415 1.35-.738.367-.325.648-.731.844-1.22.195-.487.293-1.053.293-1.697 0-.765-.162-1.41-.486-1.934a3.165 3.165 0 0 0-1.229-1.166zM4.56 8.14h2.24c.382 0 .692.096.929.29.237.193.356.51.356.95 0 .475-.119.804-.356.987-.237.184-.547.276-.929.276H4.56V8.14zm2.536 7.725H4.56v-3.148h2.536c.482 0 .861.126 1.136.378.275.252.413.647.413 1.187 0 .529-.138.926-.413 1.19-.275.262-.654.393-1.136.393zM14.06 8.7h5.88v1.43h-5.88zM18.236 11.345c-.86 0-1.588.139-2.185.417-.597.278-1.084.654-1.462 1.129a4.57 4.57 0 0 0-.836 1.623 6.785 6.785 0 0 0-.265 1.89c0 .644.091 1.253.274 1.826.183.573.468 1.072.856 1.497.387.425.88.762 1.478 1.011.599.25 1.312.375 2.141.375 1.16 0 2.12-.27 2.88-.81.758-.54 1.262-1.35 1.512-2.431h-2.361c-.086.303-.287.588-.603.853-.316.267-.773.4-1.369.4-.658 0-1.163-.164-1.517-.49-.354-.326-.558-.86-.612-1.601H22.8c.043-.701-.01-1.375-.16-2.024a4.72 4.72 0 0 0-.701-1.717 3.642 3.642 0 0 0-1.413-1.194c-.58-.292-1.344-.438-2.29-.438zm-2.055 3.59c.011-.197.053-.412.127-.645.075-.232.19-.448.346-.645.156-.198.36-.365.612-.501.253-.136.568-.204.946-.204.572 0 1.003.15 1.293.45.291.3.477.816.557 1.545h-3.881z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <BehanceIcon size={20} />,
      href: 'https://www.behance.net/koushika',
      label: 'Behance',
      color: '#C4B5FD',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/koushika1312/',
      label: 'LinkedIn',
      color: '#B8D4E8',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:koushikamahendran2003@gmail.com',
      label: 'Email',
      color: '#A8D5BA',
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-[#F5F3EF] py-12 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#C4B5FD]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#A8D5BA]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[1.5rem] mb-3 bg-gradient-to-r from-[#C4B5FD] to-[#A8D5BA] bg-clip-text text-transparent">
              Koushika M
            </h3>
            <p className="text-[#9CA3AF] mb-4 leading-relaxed">
              UI/UX & Graphic Designer creating clean, practical, and user-focused digital experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2.5 bg-white/80 backdrop-blur-sm rounded-xl border border-[#E8E6E1] hover:border-[#C4B5FD]/50 hover:shadow-lg transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div
                    className="transition-colors"
                    style={{
                      color: '#9CA3AF',
                    }}
                  >
                    {link.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-[#374151] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-[#9CA3AF] hover:text-[#C4B5FD] transition-colors text-left group flex items-center gap-2"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-[#C4B5FD] group-hover:w-4 transition-all duration-300"
                    />
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-[#374151] mb-4">Get in Touch</h4>
            <p className="text-[#9CA3AF] mb-4 leading-relaxed">
              Need UI/UX support for your next website or app? Let's create an experience your users will enjoy.
            </p>
            <motion.a
              href="mailto:koushikamahendran2003@gmail.com"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#C4B5FD] to-[#B8D4E8] hover:from-[#B8A5ED] hover:to-[#A8C4D8] text-[#374151] rounded-xl transition-all shadow-lg shadow-[#C4B5FD]/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#C4B5FD]/30 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#9CA3AF] text-[0.9rem]">
            © {currentYear} Koushika M. All rights reserved.
          </p>
          <p className="text-[#9CA3AF] text-[0.9rem] flex items-center gap-2">
            Crafted with <Heart size={16} className="text-[#FDB4C8]" /> using React & Tailwind CSS
          </p>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-[#C4B5FD] to-[#B8D4E8] text-white rounded-full shadow-2xl shadow-[#C4B5FD]/30 hover:shadow-[#C4B5FD]/50 transition-all z-50"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-[#374151]" />
        </motion.button>
      </div>
    </footer>
  );
}
