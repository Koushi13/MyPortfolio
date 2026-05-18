import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

export function CompetitorAnalysis() {
  const features = [
    'Fare Comparison',
    'Multi-Provider Booking',
    'Live Tracking',
    'Transparent Pricing',
    'Unified History',
    'Cross-Platform Support'
  ];

  const competitors = [
    {
      name: 'Uber',
      logo: 'U',
      features: [false, false, true, false, false, true],
      color: 'from-black to-gray-800'
    },
    {
      name: 'Ola',
      logo: 'O',
      features: [false, false, true, false, false, true],
      color: 'from-green-600 to-green-700'
    },
    {
      name: 'Rapido',
      logo: 'R',
      features: [false, false, true, false, false, false],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'One Ride',
      logo: 'OR',
      features: [true, true, true, true, true, true],
      color: 'from-[#7c56a3] to-[#7179bc]',
      highlight: true
    }
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
            Market Analysis
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Competitor Analysis
          </h2>
          <p className="text-xl text-[#7179bc] max-w-3xl mx-auto leading-relaxed">
            Analyzing existing solutions to identify gaps and opportunities
            for a unified ride-booking experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px] bg-gradient-to-br from-[#daecff] to-white rounded-3xl p-8 shadow-lg border border-[#1a1a2e]/5">
            <div className="grid grid-cols-5 gap-6">
              <div className="col-span-1">
                <div className="h-24 flex items-center justify-center">
                  <p className="text-lg font-medium text-[#7179bc]">Features</p>
                </div>
                {features.map((feature, index) => (
                  <div key={index} className="h-16 flex items-center px-4">
                    <p className="text-[#1a1a2e] font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              {competitors.map((competitor, compIndex) => (
                <motion.div
                  key={compIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: compIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={`col-span-1 ${competitor.highlight ? 'relative' : ''}`}
                >
                  {competitor.highlight && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl -z-10 scale-105"></div>
                  )}
                  <div className={`h-24 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${competitor.color} mb-2 ${competitor.highlight ? 'ring-4 ring-[#a44e9f]/20' : ''}`}>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-lg">{competitor.logo}</span>
                    </div>
                    <p className="text-white font-medium text-sm">{competitor.name}</p>
                  </div>
                  {competitor.features.map((hasFeature, featIndex) => (
                    <div key={featIndex} className="h-16 flex items-center justify-center">
                      {hasFeature ? (
                        <div className={`w-8 h-8 rounded-full ${competitor.highlight ? 'bg-gradient-to-br from-green-500 to-green-600' : 'bg-green-500'} flex items-center justify-center`}>
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <X className="w-5 h-5 text-gray-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-[#7c56a3] to-[#7179bc] rounded-3xl p-10 text-center"
        >
          <p className="text-2xl text-[#daecff] font-light" style={{ fontFamily: 'Montserrat' }}>
            One Ride is the only platform offering a complete, unified ride-booking experience
            with transparent pricing and multi-provider comparison.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
