import { Briefcase, MapPin, Heart, Target, Smartphone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function UserPersona() {
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
          <span className="text-[#a44e9f] uppercase tracking-wider text-sm font-medium mb-4 block">
            Understanding Our Users
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            User Persona
          </h2>
          <p className="text-xl text-[#7179bc] max-w-3xl mx-auto leading-relaxed">
            Meet Rohan - our primary persona representing the urban commuter
            who values time, transparency, and convenience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#1a1a2e]/5">
            <div className="bg-gradient-to-r from-[#7c56a3] to-[#7179bc] p-12 text-white">
              <div className="flex items-start gap-8">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#a44e9f] to-[#7179bc] flex items-center justify-center shadow-xl">
                  <span className="text-6xl font-bold text-white">R</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Montserrat' }}>
                    Rohan Mehta
                  </h3>
                  <p className="text-[#daecff]/80 text-xl mb-4">27 years old, Software Engineer</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <MapPin className="w-4 h-4" />
                      <span>Bangalore, India</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Briefcase className="w-4 h-4" />
                      <span>Tech Professional</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Smartphone className="w-4 h-4" />
                      <span>High Tech Savviness</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#1a1a2e]" style={{ fontFamily: 'Montserrat' }}>
                      Goals
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Save time on daily commute',
                      'Find cheapest ride options',
                      'Avoid surge pricing surprises',
                      'Track expenses efficiently'
                    ].map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                        <span className="text-[#7179bc]">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#1a1a2e]" style={{ fontFamily: 'Montserrat' }}>
                      Pain Points
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Switching between multiple apps',
                      'Uncertainty about final fare',
                      'Time wasted comparing prices',
                      'Fragmented ride history'
                    ].map((pain, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                        <span className="text-[#7179bc]">{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#daecff] to-white rounded-2xl p-8">
                <h4 className="text-xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
                  Personality & Behavior
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Tech Savviness', value: 95 },
                    { label: 'Price Sensitivity', value: 80 },
                    { label: 'Time Consciousness', value: 90 }
                  ].map((trait, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-[#1a1a2e]">{trait.label}</span>
                        <span className="text-sm font-bold text-[#7c56a3]">{trait.value}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${trait.value}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-[#7c56a3] to-[#a44e9f] rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200/50">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h5 className="font-bold text-[#1a1a2e] mb-2">Daily Behavior</h5>
                    <p className="text-[#7179bc] leading-relaxed">
                      Books rides 3-4 times daily for office commute and meetings. Opens Uber, Ola, and Rapido
                      to compare prices before booking. Prefers apps with clear pricing and quick booking flow.
                      Values transparency and dislikes surprise charges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
