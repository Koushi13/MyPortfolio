import { X, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function UsabilityImprovements() {
  const improvements = [
    {
      before: {
        title: 'Multiple App Switching',
        description: 'Users had to manually open 3-4 different apps to compare prices',
        pain: 'Time-consuming & frustrating'
      },
      after: {
        title: 'Unified Platform',
        description: 'All providers accessible from a single interface with instant comparison',
        benefit: 'Save 5+ minutes per booking'
      }
    },
    {
      before: {
        title: 'Hidden Pricing',
        description: 'Surge charges and fees revealed only at checkout',
        pain: 'Unexpected costs & distrust'
      },
      after: {
        title: 'Transparent Pricing',
        description: 'Complete fare breakdown shown upfront with all charges visible',
        benefit: '100% transparency & trust'
      }
    },
    {
      before: {
        title: 'Fragmented History',
        description: 'Ride history scattered across multiple apps and accounts',
        pain: 'Difficult expense tracking'
      },
      after: {
        title: 'Centralized History',
        description: 'All rides tracked in one place with unified receipts and analytics',
        benefit: 'Easy expense management'
      }
    }
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
          <span className="text-[#a44e9f] uppercase tracking-wider text-sm font-medium mb-4 block">
            Impact
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Usability Improvements
          </h2>
          <p className="text-xl text-[#7179bc] max-w-3xl mx-auto leading-relaxed">
            Transforming pain points into delightful experiences through
            thoughtful design and user-centered solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {improvements.map((improvement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm uppercase font-bold text-red-600">Before</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3" style={{ fontFamily: 'Montserrat' }}>
                  {improvement.before.title}
                </h3>
                <p className="text-[#7179bc] mb-4 leading-relaxed">
                  {improvement.before.description}
                </p>
                <div className="bg-red-50 rounded-xl p-3">
                  <p className="text-sm text-red-700 font-medium">{improvement.before.pain}</p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7c56a3] to-[#a44e9f] flex items-center justify-center shadow-lg">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm uppercase font-bold text-green-600">After</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3" style={{ fontFamily: 'Montserrat' }}>
                  {improvement.after.title}
                </h3>
                <p className="text-[#7179bc] mb-4 leading-relaxed">
                  {improvement.after.description}
                </p>
                <div className="bg-green-50 rounded-xl p-3">
                  <p className="text-sm text-green-700 font-medium">{improvement.after.benefit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#7c56a3] to-[#7179bc] rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-[#daecff] mb-8 text-center" style={{ fontFamily: 'Montserrat' }}>
            Key Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '70%', label: 'Faster Booking', change: 'decrease' },
              { value: '85%', label: 'User Satisfaction', change: 'increase' },
              { value: '60%', label: 'Decision Time', change: 'decrease' }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-baseline gap-2 mb-2">
                  <p className="text-5xl font-bold text-[#ffffff]" style={{ fontFamily: 'Montserrat' }}>
                    {metric.value}
                  </p>
                  <div className={`px-3 py-1 rounded-full ${metric.change === 'increase' ? 'bg-green-500' : 'bg-blue-500'}`}>
                    <p className="text-xs text-white font-medium uppercase">{metric.change}</p>
                  </div>
                </div>
                <p className="text-[#daecff]/90">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
