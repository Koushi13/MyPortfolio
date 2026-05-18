import { motion } from 'motion/react';
import screen1 from '../../imports/image.png';
import screen2 from '../../imports/image-1.png';
import screen3 from '../../imports/image-2.png';
import screen4 from '../../imports/image-3.png';
import screen5 from '../../imports/image-4.png';
import screen6 from '../../imports/image-5.png';
import screen7 from '../../imports/image-6.png';
import screen8 from '../../imports/image-7.png';
import screen9 from '../../imports/image-8.png';
import screen10 from '../../imports/image-13.png';

export function UIShowcase() {
  const screens = [
    { image: screen1, title: 'Sign In', desc: 'Phone number authentication' },
    { image: screen2, title: 'Home', desc: 'Provider selection dashboard' },
    { image: screen3, title: 'Search', desc: 'Smart destination input' },
    { image: screen4, title: 'Comparison', desc: 'Multi-provider pricing' },
    { image: screen5, title: 'Requesting', desc: 'Finding nearby drivers' },
    { image: screen6, title: 'Driver Details', desc: 'OTP & ride confirmation' },
    { image: screen7, title: 'Live Tracking', desc: 'Real-time driver location' },
    { image: screen8, title: 'Driver Arrived', desc: 'Pickup confirmation' },
    { image: screen9, title: 'Boarding', desc: 'Trip start confirmation' },
    { image: screen10, title: 'Trip Started', desc: 'Active ride tracking' }
  ];

  return (
    <section className="relative py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#a44e9f] uppercase tracking-wider text-sm font-medium mb-4 block">
            Visual Design
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            High-Fidelity UI
          </h2>
          <p className="text-xl text-[#7179bc] max-w-3xl mx-auto leading-relaxed">
            Premium mobile interface showcasing the complete user journey
            with modern aesthetics and intuitive interactions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7c56a3]/10 to-[#7179bc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative aspect-[412/917] bg-gradient-to-b from-[#7c56a3] to-[#7179bc] rounded-[2.5rem] p-1 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <h4 className="font-bold text-[#1a1a2e] mb-1">{screen.title}</h4>
                <p className="text-sm text-[#7179bc]">{screen.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#7c56a3]/20 to-[#7179bc]/20 blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-[#daecff] to-white rounded-[3rem] p-12 shadow-2xl border border-[#1a1a2e]/5">
            <h3 className="text-3xl font-bold text-[#1a1a2e] mb-8 text-center" style={{ fontFamily: 'Montserrat' }}>
              Featured Screens
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  image: screen2,
                  title: 'Home Screen',
                  features: ['Provider selection', 'Current location display', 'Vehicle type filters', 'Quick search access']
                },
                {
                  image: screen4,
                  title: 'Comparison View',
                  features: ['Real-time pricing', 'Provider details', 'ETA comparison', 'Vehicle options']
                },
                {
                  image: screen10,
                  title: 'Live Tracking',
                  features: ['GPS location', 'Route preview', 'Trip progress', 'Driver contact']
                }
              ].map((featured, index) => (
                <div key={index}>
                  <div className="aspect-[412/917] bg-gradient-to-b from-[#1a1a2e] to-[#7c56a3] rounded-[2.5rem] p-1.5 mb-4 shadow-xl overflow-hidden">
                    <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#1a1a2e] mb-3" style={{ fontFamily: 'Montserrat' }}>
                    {featured.title}
                  </h4>
                  <ul className="space-y-2">
                    {featured.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-[#7179bc]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#a44e9f]"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#7c56a3] to-[#7179bc] rounded-3xl p-10 text-center"
        >
          <p className="text-2xl text-[#daecff] font-light mb-4" style={{ fontFamily: 'Montserrat' }}>
            "Every screen designed with purpose, clarity, and the user's time in mind."
          </p>
          <p className="text-[#a44e9f]">Design Philosophy</p>
        </motion.div>
      </div>
    </section>
  );
}
