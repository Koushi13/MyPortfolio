import { Pencil } from 'lucide-react';
import { motion } from 'motion/react';

export function Wireframes() {
  const wireframes = [
    { title: 'Home Screen', screens: 3 },
    { title: 'Search Flow', screens: 2 },
    { title: 'Comparison View', screens: 2 },
    { title: 'Checkout Flow', screens: 3 }
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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-full mb-6">
            <Pencil className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">Ideation</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Low-Fidelity Wireframes
          </h2>
          <p className="text-xl text-[#7179bc] max-w-3xl mx-auto leading-relaxed">
            Early sketches exploring layout concepts, user flows, and
            interaction patterns before moving to high-fidelity design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wireframes.map((wireframe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg border-2 border-dashed border-gray-300 hover:border-[#a44e9f] transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6 flex items-center gap-3" style={{ fontFamily: 'Montserrat' }}>
                  <Pencil className="w-6 h-6 text-[#a44e9f]" />
                  {wireframe.title}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: wireframe.screens }).map((_, screenIndex) => (
                    <div key={screenIndex} className="aspect-[412/917] bg-white rounded-2xl p-4 border-2 border-gray-300 shadow-inner">
                      <div className="w-full h-2 bg-gray-300 rounded-full mb-3"></div>
                      <div className="space-y-3">
                        <div className="h-16 bg-gray-200 rounded-lg"></div>
                        <div className="h-8 bg-gray-200 rounded"></div>
                        <div className="h-8 bg-gray-200 rounded"></div>
                        <div className="h-8 bg-gray-200 rounded"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-12 bg-gray-300 rounded"></div>
                          <div className="h-12 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">{wireframe.screens} screen variations</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-[#daecff] to-white rounded-3xl p-10 border border-[#1a1a2e]/10"
        >
          <p className="text-center text-lg text-[#7179bc] italic">
            "Wireframes helped validate core user flows and navigation patterns before investing
            in visual design. Multiple iterations based on team feedback refined the experience."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
