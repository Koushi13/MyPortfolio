import { Zap, MapPin, Shield, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import screen2 from '../../imports/image-1.png';
import screen4 from '../../imports/image-3.png';
import screen7 from '../../imports/image-6.png';
import screen10 from '../../imports/image-13.png';

export function KeyFeatures() {
  const features = [
    {
      icon: Zap,
      title: 'Smart Comparison Engine',
      description: 'Compare fares across multiple providers in real-time with intelligent recommendations',
      benefits: [
        'Real-time pricing updates',
        'ETA comparison across providers',
        'Best ride suggestions based on preferences',
        'Multi-provider availability check',
        'Price history & trends'
      ],
      gradient: 'from-[#7c56a3] to-[#a44e9f]',
      screen: screen4
    },
    {
      icon: MapPin,
      title: 'Real-Time Ride Tracking',
      description: 'Monitor your ride from booking to destination with live GPS updates',
      benefits: [
        'Live driver location tracking',
        'Real-time ETA predictions',
        'Route optimization alerts',
        'Driver contact & details',
        'Share ride status with contacts'
      ],
      gradient: 'from-[#7179bc] to-[#daecff]',
      screen: screen10
    },
    {
      icon: Shield,
      title: 'Transparent Checkout',
      description: 'See complete fare breakdown with no hidden charges or surprises',
      benefits: [
        'Detailed fare breakdown',
        'Tax & fee visibility',
        'Secure payment processing',
        'Digital receipt generation',
        'Multiple payment options'
      ],
      gradient: 'from-[#a44e9f] to-[#7179bc]',
      screen: screen7
    },
    {
      icon: Layers,
      title: 'Multi-Provider Support',
      description: 'Book rides across Uber, Ola, Rapido, and Namma Yatri from one platform',
      benefits: [
        'Unified booking interface',
        'Single login for all providers',
        'Centralized notifications',
        'Combined ride history',
        'Cross-platform preferences'
      ],
      gradient: 'from-[#eb713a] to-[#a44e9f]',
      screen: screen2
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-[#7c56a3] via-[#7179bc] to-[#a44e9f] overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#a44e9f] uppercase tracking-wider text-sm font-medium mb-4 block">
            Capabilities
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-[#daecff] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Key Features
          </h2>
          <p className="text-xl text-[#daecff]/80 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to transform the urban commuting experience
            with transparency, efficiency, and control.
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-2xl`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-[#daecff] mb-4" style={{ fontFamily: 'Montserrat' }}>
                  {feature.title}
                </h3>
                <p className="text-xl text-[#daecff]/70 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${feature.gradient} mt-2 flex-shrink-0`}></div>
                      <span className="text-[#daecff]/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1">
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 blur-3xl`}></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-[3rem] p-8 border border-white/10 shadow-2xl">
                    <div className={`aspect-[412/917] bg-gradient-to-b ${feature.gradient} rounded-[2.5rem] p-1.5 shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden`}>
                      <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden">
                        <img
                          src={feature.screen}
                          alt={feature.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
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
          className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { value: '< 3 sec', label: 'Comparison Speed' },
            { value: '100%', label: 'Price Transparency' },
            { value: '4+', label: 'Providers Integrated' },
            { value: '24/7', label: 'Real-time Updates' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 text-center border border-white/10">
              <p className="text-4xl font-bold mb-2 text-[#ffffff]" style={{ fontFamily: 'Montserrat' }}>
                {stat.value}
              </p>
              <p className="text-[#daecff]/80">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
