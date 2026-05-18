import { motion } from 'motion/react';
import logo from '../../imports/logo_1ride.png';
import screen1 from '../../imports/image.png';
import screen2 from '../../imports/image-1.png';
import screen10 from '../../imports/image-13.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#8965ad]/90 via-[#7c56a3]/95 to-[#9c56a4]/90">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="city-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#city-grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-8 flex justify-center"
        >
          <div className="bg-white rounded-3xl p-6 shadow-2xl">
            <img src={logo} alt="One Ride Logo" className="h-20 w-auto" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          One Ride
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-2xl md:text-3xl text-white/90 mb-6 font-light"
        >
          Compare. Choose. Ride Smarter.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-base text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A UX case study exploring a unified ride comparison platform
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16"
        >
          {[
            { label: 'Role', value: 'Product Designer' },
            { label: 'Duration', value: '12 Weeks' },
            { label: 'Tools', value: 'Figma' },
            { label: 'Platform', value: 'Android' }
          ].map((item, index) => (
            <div key={index} className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20">
              <p className="text-white/70 text-xs mb-1">{item.label}</p>
              <p className="text-white text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="relative flex justify-center items-end gap-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="relative group cursor-pointer"
          >
            <div className="w-48 aspect-[412/917] bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-sm rounded-[2rem] p-[3px] shadow-2xl border border-white/30 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-4 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
              <div className="w-full h-full bg-white rounded-[1.85rem] overflow-hidden">
                <img src={screen1} alt="Sign In Screen" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.25 }}
            className="relative -mt-8 group cursor-pointer"
          >
            <div className="w-56 aspect-[412/917] bg-gradient-to-b from-white/30 to-white/20 backdrop-blur-sm rounded-[2.2rem] p-[3px] shadow-2xl border border-white/40 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-6 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                <img src={screen2} alt="Home Screen" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative group cursor-pointer"
          >
            <div className="w-48 aspect-[412/917] bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-sm rounded-[2rem] p-[3px] shadow-2xl border border-white/30 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-4 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
              <div className="w-full h-full bg-white rounded-[1.85rem] overflow-hidden">
                <img src={screen10} alt="Trip Screen" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
