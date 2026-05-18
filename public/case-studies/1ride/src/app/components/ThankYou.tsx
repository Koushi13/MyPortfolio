import { Smartphone, Mail, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export function ThankYou() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-[#7c56a3] via-[#a44e9f] to-[#7179bc] overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex justify-center mb-8">
              <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-[#a44e9f] to-[#7179bc] flex items-center justify-center shadow-2xl">
                <Smartphone className="w-16 h-16 text-[#daecff]" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[#daecff] mb-6" style={{ fontFamily: 'Montserrat' }}>
              Thank You
            </h1>
            <p className="text-2xl text-[#a44e9f] mb-4">
              One Ride UX Case Study
            </p>
            <p className="text-lg text-[#daecff]/70 max-w-2xl mx-auto leading-relaxed">
              This project showcases the power of user-centered design in solving
              real-world problems and creating meaningful digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 mb-12"
          >
            <h2 className="text-3xl font-bold text-[#daecff] mb-8" style={{ fontFamily: 'Montserrat' }}>
              Project Details
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Role', value: 'Product Designer' },
                { label: 'Duration', value: '12 Weeks' },
                { label: 'Tools', value: 'Figma, FigJam' },
                { label: 'Year', value: '2024' }
              ].map((detail, index) => (
                <div key={index} className="text-center">
                  <p className="mb-2 text-[#ffffff]">{detail.label}</p>
                  <p className="text-[#daecff] text-lg font-medium">{detail.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-[#daecff] mb-6" style={{ fontFamily: 'Montserrat' }}>
              Let's Connect
            </h3>
            <div className="flex justify-center gap-6">
              {[
                { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/10 hover:scale-110"
                >
                  <social.icon className="w-6 h-6 text-white group-hover:text-[#daecff] transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-[#daecff]/60 text-sm">
              Designed with attention to detail and a passion for great user experiences
            </p>
            <p className="text-[#a44e9f]/60 text-xs mt-2">
              © 2024 One Ride Case Study. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#eb713a] to-[#a44e9f] px-6 py-3 rounded-full">
              <Smartphone className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">View More Projects</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
