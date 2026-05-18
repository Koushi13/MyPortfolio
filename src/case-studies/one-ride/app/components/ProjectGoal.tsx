import { Target, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function ProjectGoal() {
  const goals = [
    {
      icon: Zap,
      title: 'Instant Comparison',
      description: 'Enable users to compare fares across providers in real-time',
      metric: '< 3 sec'
    },
    {
      icon: Shield,
      title: 'Transparent Pricing',
      description: 'Show all fees upfront with no hidden charges',
      metric: '100%'
    },
    {
      icon: TrendingUp,
      title: 'Faster Decisions',
      description: 'Reduce booking time by eliminating app switching',
      metric: '-70%'
    },
    {
      icon: Users,
      title: 'Unified Experience',
      description: 'Single platform for all ride-booking needs',
      metric: '1 App'
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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7c56a3] to-[#a44e9f] text-white px-6 py-3 rounded-full mb-6">
            <Target className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">Design Objectives</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Project Goals
          </h2>
          <p className="text-xl text-[#7179bc] max-w-3xl mx-auto leading-relaxed">
            Creating a seamless, transparent, and efficient ride-booking experience
            that saves time and reduces cognitive load for urban commuters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#daecff] to-white rounded-3xl p-10 border border-[#1a1a2e]/10 hover:border-[#a44e9f]/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7c56a3] to-[#a44e9f] flex items-center justify-center">
                    <goal.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-[#a44e9f]" style={{ fontFamily: 'Montserrat' }}>
                    {goal.metric}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3" style={{ fontFamily: 'Montserrat' }}>
                  {goal.title}
                </h3>
                <p className="text-[#7179bc] leading-relaxed text-lg">
                  {goal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: '12 Weeks', label: 'Design Sprint' },
            { value: '4 Providers', label: 'Integrated' },
            { value: '< 3 sec', label: 'Comparison Speed' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-3xl bg-gradient-to-br from-[#7c56a3]/5 to-[#a44e9f]/5">
              <p className="text-5xl font-bold text-[#7c56a3] mb-2" style={{ fontFamily: 'Montserrat' }}>
                {stat.value}
              </p>
              <p className="text-[#7179bc]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
