import { Clock, DollarSign, Frown, Repeat, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemStatement() {
  const problems = [
    {
      icon: Repeat,
      title: 'App Switching',
      description: 'Users constantly switch between 3-4 different ride apps to find the best option',
      color: 'from-[#7c56a3] to-[#a44e9f]'
    },
    {
      icon: Clock,
      title: 'Time Wasted',
      description: 'Average 5-7 minutes spent comparing prices across multiple platforms',
      color: 'from-[#7179bc] to-[#daecff]'
    },
    {
      icon: DollarSign,
      title: 'Hidden Charges',
      description: 'Unexpected fees and surge pricing discovered only at checkout',
      color: 'from-[#eb713a] to-[#a44e9f]'
    },
    {
      icon: Smartphone,
      title: 'Fragmented Experience',
      description: 'Scattered ride history, payment methods, and preferences across platforms',
      color: 'from-[#a44e9f] to-[#7179bc]'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-[#daecff]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#a44e9f] uppercase tracking-wider text-sm font-medium mb-4 block">
            The Challenge
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Problem Statement
          </h2>
          <p className="text-xl text-[#7179bc] max-w-3xl mx-auto leading-relaxed">
            Urban commuters face significant friction in their daily ride-booking experience,
            leading to wasted time, frustration, and suboptimal decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl from-[#7c56a3] to-[#7179bc] blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1a1a2e]/5 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <problem.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3" style={{ fontFamily: 'Montserrat' }}>
                  {problem.title}
                </h3>
                <p className="text-[#7179bc] leading-relaxed">
                  {problem.description}
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
          className="mt-16 bg-gradient-to-br from-[#7c56a3] to-[#7179bc] rounded-3xl p-12 text-center"
        >
          <p className="text-3xl text-[#daecff] font-light mb-4" style={{ fontFamily: 'Montserrat' }}>
            "I always open 3 apps before booking. It's exhausting."
          </p>
          <p className="text-[#a44e9f]">— Urban Commuter, User Research Participant</p>
        </motion.div>
      </div>
    </section>
  );
}
