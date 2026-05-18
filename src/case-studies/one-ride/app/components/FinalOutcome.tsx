import { TrendingUp, Users, Clock, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function FinalOutcome() {
  const outcomes = [
    {
      icon: Clock,
      title: 'Faster Booking Experience',
      description: 'Reduced average booking time from 6.2 minutes to 1.8 minutes',
      metric: '70% faster',
      color: 'from-[#7179bc] to-[#daecff]'
    },
    {
      icon: Users,
      title: 'Reduced App Switching',
      description: 'Eliminated need to compare across multiple apps',
      metric: '3-4 apps → 1 app',
      color: 'from-[#7c56a3] to-[#a44e9f]'
    },
    {
      icon: Shield,
      title: 'Improved Transparency',
      description: 'Users now see complete fare breakdown upfront',
      metric: '100% transparent',
      color: 'from-[#a44e9f] to-[#7179bc]'
    },
    {
      icon: TrendingUp,
      title: 'Better User Confidence',
      description: 'Increased user satisfaction and trust in pricing',
      metric: '85% satisfaction',
      color: 'from-[#eb713a] to-[#a44e9f]'
    }
  ];

  const chartData = [
    { id: 'time', name: 'Time Spent', before: 6.2, after: 1.8 },
    { id: 'apps', name: 'Apps Used', before: 3.5, after: 1 },
    { id: 'confusion', name: 'Confusion', before: 7.5, after: 2.3 },
    { id: 'satisfaction', name: 'Satisfaction', before: 4.2, after: 8.5 }
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
            Results
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Final Outcome
          </h2>
          <p className="text-xl text-[#7179bc] max-w-3xl mx-auto leading-relaxed">
            Measurable impact on user experience through data-driven design
            decisions and continuous iteration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#daecff] to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1a1a2e]/5 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${outcome.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <outcome.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-[#1a1a2e]" style={{ fontFamily: 'Montserrat' }}>
                    {outcome.title}
                  </h3>
                  <span className={`text-2xl font-bold bg-gradient-to-r ${outcome.color} bg-clip-text text-transparent`}>
                    {outcome.metric}
                  </span>
                </div>
                <p className="text-[#7179bc] leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#daecff] to-white rounded-3xl p-10 shadow-lg border border-[#1a1a2e]/5 mb-16"
        >
          <h3 className="text-3xl font-bold text-[#1a1a2e] mb-8 text-center" style={{ fontFamily: 'Montserrat' }}>
            Before vs After Comparison
          </h3>
          <div className="space-y-8">
            {chartData.map((item, index) => (
              <div key={item.id} className="space-y-3">
                <p className="text-sm font-medium text-[#1a1a2e]">{item.name}</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs text-[#eb713a] font-medium w-16">Before</span>
                      <div className="flex-1 h-10 bg-gray-100 rounded-xl overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(item.before / 10) * 100}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-[#eb713a] to-[#a44e9f] rounded-xl flex items-center justify-end pr-3"
                        >
                          <span className="text-white text-sm font-bold">{item.before}</span>
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#7c56a3] font-medium w-16">After</span>
                      <div className="flex-1 h-10 bg-gray-100 rounded-xl overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(item.after / 10) * 100}%` }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-[#7c56a3] to-[#7179bc] rounded-xl flex items-center justify-end pr-3"
                        >
                          <span className="text-white text-sm font-bold">{item.after}</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-8 pt-8 border-t border-[#1a1a2e]/10">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-[#eb713a] to-[#a44e9f] rounded"></div>
              <span className="text-[#7179bc]">Before</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-[#7c56a3] to-[#7179bc] rounded"></div>
              <span className="text-[#7179bc]">After</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#7c56a3] to-[#7179bc] rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-[#daecff] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Project Success Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '85%', label: 'User Satisfaction' },
              { value: '70%', label: 'Time Saved' },
              { value: '4', label: 'Providers Integrated' },
              { value: '100%', label: 'Price Transparency' }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-[#a44e9f] mb-2" style={{ fontFamily: 'Montserrat' }}>
                  {metric.value}
                </p>
                <p className="text-[#daecff]/80">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
