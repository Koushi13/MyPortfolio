import { Palette, Type, Circle, Square } from 'lucide-react';
import { motion } from 'motion/react';

export function DesignSystem() {
  const colors = [
    { name: 'Pastel Blue', hex: '#daecff', usage: 'Background' },
    { name: 'Deep Purple', hex: '#7c56a3', usage: 'Primary Brand' },
    { name: 'Blue Purple', hex: '#7179bc', usage: 'Secondary' },
    { name: 'Magenta', hex: '#a44e9f', usage: 'Accent' },
    { name: 'Orange', hex: '#eb713a', usage: 'Highlight' }
  ];

  const buttons = [
    { label: 'Primary', style: 'bg-gradient-to-r from-[#7c56a3] to-[#7179bc] text-white' },
    { label: 'Secondary', style: 'bg-[#a44e9f] text-white' },
    { label: 'Action', style: 'bg-gradient-to-r from-[#eb713a] to-[#a44e9f] text-white' },
    { label: 'Outline', style: 'border-2 border-[#7c56a3] text-[#7c56a3] bg-transparent' }
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-[#daecff] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full mb-6">
            <Palette className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">Foundation</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Design System
          </h2>
          <p className="text-xl text-[#7179bc] max-w-3xl mx-auto leading-relaxed">
            A comprehensive design language ensuring consistency, scalability,
            and maintainability across all touchpoints.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#1a1a2e]/5">
              <div className="flex items-center gap-3 mb-8">
                <Palette className="w-8 h-8 text-[#a44e9f]" />
                <h3 className="text-3xl font-bold text-[#1a1a2e]" style={{ fontFamily: 'Montserrat' }}>
                  Color Palette
                </h3>
              </div>
              <div className="space-y-4">
                {colors.map((color, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-2xl shadow-lg"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div className="flex-1">
                      <p className="font-bold text-[#1a1a2e]">{color.name}</p>
                      <p className="text-sm text-[#7179bc]">{color.hex}</p>
                      <p className="text-xs text-[#a44e9f]">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#1a1a2e]/5">
              <div className="flex items-center gap-3 mb-8">
                <Type className="w-8 h-8 text-[#a44e9f]" />
                <h3 className="text-3xl font-bold text-[#1a1a2e]" style={{ fontFamily: 'Montserrat' }}>
                  Typography
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-[#7179bc] mb-2">Headings - Montserrat</p>
                  <p className="text-4xl font-bold text-[#1a1a2e]" style={{ fontFamily: 'Montserrat' }}>
                    Heading
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#7179bc] mb-2">Body - Rubik</p>
                  <p className="text-lg text-[#1a1a2e]" style={{ fontFamily: 'Rubik' }}>
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-4 pt-4">
                  {['3xl', '2xl', 'xl', 'lg'].map((size, index) => (
                    <div key={index} className="text-center">
                      <p className={`text-${size} font-bold text-[#1a1a2e]`}>Aa</p>
                      <p className="text-xs text-[#7179bc] mt-1">{size}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 shadow-lg border border-[#1a1a2e]/5 mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <Circle className="w-8 h-8 text-[#a44e9f]" />
            <h3 className="text-3xl font-bold text-[#1a1a2e]" style={{ fontFamily: 'Montserrat' }}>
              Components
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-[#7179bc] mb-4 font-medium">Buttons</p>
              <div className="space-y-3">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`w-full px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg ${button.style}`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-[#7179bc] mb-4 font-medium">Input Fields</p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter destination"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#a44e9f] outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Search location"
                  className="w-full px-4 py-3 rounded-2xl bg-[#daecff] border-2 border-transparent focus:border-[#a44e9f] outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <p className="text-sm text-[#7179bc] mb-4 font-medium">Cards</p>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-br from-[#daecff] to-white rounded-2xl border border-[#1a1a2e]/10">
                  <p className="font-medium text-[#1a1a2e]">Card Title</p>
                  <p className="text-sm text-[#7179bc]">Card content</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
