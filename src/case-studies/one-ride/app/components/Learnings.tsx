import { Lightbulb, Users, Shield, Repeat } from 'lucide-react';
import { motion } from 'motion/react';

export function Learnings() {
  const learnings = [
    {
      icon: Users,
      title: 'User Research is Critical',
      description: 'Deep understanding of user pain points through interviews and surveys shaped every design decision. The insights about app switching and hidden charges directly influenced our core features.',
      takeaway: 'Always validate assumptions with real user data'
    },
    {
      icon: Shield,
      title: 'Transparency Builds Trust',
      description: 'Showing complete fare breakdown upfront eliminated the biggest user concern. Transparency became our competitive advantage and a core principle throughout the design.',
      takeaway: 'Honesty and clarity create long-term user loyalty'
    },
    {
      icon: Repeat,
      title: 'Iterative Design Works',
      description: 'Multiple rounds of wireframing, prototyping, and user testing helped refine the experience. Features that seemed good in theory often needed adjustment based on real usage.',
      takeaway: 'Test early, test often, and embrace feedback'
    },
    {
      icon: Lightbulb,
      title: 'Simplicity Over Features',
      description: 'We resisted the temptation to add every possible feature. Focusing on core use cases - compare, book, track - kept the experience clean and efficient.',
      takeaway: 'Less is more when it serves the user better'
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
            Reflections
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Key Learnings
          </h2>
          <p className="text-xl text-[#7179bc] max-w-3xl mx-auto leading-relaxed">
            Insights gained from the design process that will inform future projects
            and strengthen our approach to user-centered design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {learnings.map((learning, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1a1a2e]/5 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${index === 3 ? 'from-[#eb713a] to-[#a44e9f]' : 'from-[#7c56a3] to-[#a44e9f]'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <learning.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4" style={{ fontFamily: 'Montserrat' }}>
                  {learning.title}
                </h3>
                <p className="text-[#7179bc] leading-relaxed mb-6">
                  {learning.description}
                </p>
                <div className="bg-gradient-to-r from-[#7c56a3]/5 to-[#a44e9f]/5 rounded-2xl p-4 border-l-4 border-[#a44e9f]">
                  <p className="text-sm font-medium text-[#7c56a3]">
                    {learning.takeaway}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#7c56a3] to-[#7179bc] rounded-3xl p-12 text-center"
        >
          <Lightbulb className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-[#daecff] mb-4" style={{ fontFamily: 'Montserrat' }}>
            Design Thinking in Action
          </h3>
          <p className="text-xl text-[#daecff]/90 max-w-3xl mx-auto leading-relaxed">
            This project reinforced the importance of empathy, iteration, and user-centered
            thinking. Every design decision was grounded in real user needs, validated through
            testing, and refined based on feedback. The result is a solution that truly serves
            its users rather than just looking good on screen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: 'User-Centered', desc: 'Every decision backed by user research' },
            { title: 'Iterative Process', desc: 'Continuous testing and refinement' },
            { title: 'Measurable Impact', desc: 'Data-driven design validation' }
          ].map((principle, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center border border-[#1a1a2e]/10">
              <p className="text-xl font-bold text-[#1a1a2e] mb-2" style={{ fontFamily: 'Montserrat' }}>
                {principle.title}
              </p>
              <p className="text-[#7179bc]">{principle.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
