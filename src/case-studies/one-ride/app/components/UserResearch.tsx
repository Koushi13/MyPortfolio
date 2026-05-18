import { Users, MessageSquare, BarChart3, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function UserResearch() {
  const insights = [
    {
      stat: '87%',
      description: 'Use multiple ride apps regularly',
      color: 'from-[#7c56a3] to-[#a44e9f]'
    },
    {
      stat: '6.2 min',
      description: 'Average time spent comparing prices',
      color: 'from-[#7179bc] to-[#daecff]'
    },
    {
      stat: '73%',
      description: 'Experienced unexpected charges',
      color: 'from-[#eb713a] to-[#a44e9f]'
    },
    {
      stat: '91%',
      description: 'Want a unified booking platform',
      color: 'from-[#a44e9f] to-[#7c56a3]'
    }
  ];

  const quotes = [
    {
      quote: "I always open 3 apps before booking. It's the only way to find the cheapest ride.",
      author: "Priya, 24",
      role: "College Student"
    },
    {
      quote: "I just want the cheapest ride quickly. I don't have time to compare all these apps.",
      author: "Rahul, 32",
      role: "Software Engineer"
    },
    {
      quote: "Hidden surge pricing is frustrating. I want to see all charges upfront.",
      author: "Anjali, 28",
      role: "Marketing Manager"
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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full mb-6">
            <Users className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">Discovery Phase</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            User Research
          </h2>
          <p className="text-lg text-[#7179bc] max-w-2xl mx-auto leading-relaxed">
            Conducted interviews with 5 urban commuters to understand
            ride-booking behaviors and pain points.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${insight.color} rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                <p className="text-5xl font-bold mb-3" style={{ fontFamily: 'Montserrat' }}>
                  {insight.stat}
                </p>
                <p className="text-white/90 leading-relaxed">
                  {insight.description}
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
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-[#1a1a2e] mb-8 text-center" style={{ fontFamily: 'Montserrat' }}>
            Key Insights from Users
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#1a1a2e]/5 h-full">
                  <MessageSquare className="w-10 h-10 text-[#a44e9f] mb-4" />
                  <p className="text-lg text-[#1a1a2e] mb-6 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c56a3] to-[#a44e9f] flex items-center justify-center text-white font-bold">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-[#1a1a2e]">{item.author}</p>
                      <p className="text-sm text-[#7179bc]">{item.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: Users, label: 'Participants', value: '5' },
            { icon: MessageSquare, label: 'User Insights', value: '8' },
            { icon: TrendingUp, label: 'Observations', value: '20+' }
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-[#7c56a3] to-[#7179bc] rounded-3xl p-8 text-center text-white">
              <stat.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <p className="text-4xl font-bold mb-2" style={{ fontFamily: 'Montserrat' }}>
                {stat.value}
              </p>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
