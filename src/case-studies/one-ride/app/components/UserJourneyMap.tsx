import { Search, DollarSign, Smartphone, MapPin, CheckCircle, CreditCard, Smile, Frown, Meh } from 'lucide-react';
import { motion } from 'motion/react';

export function UserJourneyMap() {
  const journeySteps = [
    {
      icon: Search,
      title: 'Search Ride',
      action: 'Enter destination',
      emotion: 'neutral',
      touchpoint: 'Mobile App',
      opportunity: 'Quick input with location suggestions'
    },
    {
      icon: DollarSign,
      title: 'Compare Fares',
      action: 'View prices from all providers',
      emotion: 'positive',
      touchpoint: 'Comparison Screen',
      opportunity: 'Real-time pricing with ETA'
    },
    {
      icon: Smartphone,
      title: 'Select Provider',
      action: 'Choose best option',
      emotion: 'positive',
      touchpoint: 'Provider Selection',
      opportunity: 'Clear differentiation & recommendations'
    },
    {
      icon: CheckCircle,
      title: 'Checkout',
      action: 'Review fare breakdown',
      emotion: 'positive',
      touchpoint: 'Checkout Flow',
      opportunity: 'Transparent pricing with no surprises'
    },
    {
      icon: MapPin,
      title: 'Live Tracking',
      action: 'Track driver arrival',
      emotion: 'neutral',
      touchpoint: 'Tracking Screen',
      opportunity: 'Real-time updates & communication'
    },
    {
      icon: CreditCard,
      title: 'Payment',
      action: 'Complete transaction',
      emotion: 'positive',
      touchpoint: 'Payment Screen',
      opportunity: 'Multiple payment options & receipts'
    }
  ];

  const getEmotionIcon = (emotion: string) => {
    if (emotion === 'positive') return <Smile className="w-6 h-6 text-green-500" />;
    if (emotion === 'negative') return <Frown className="w-6 h-6 text-red-500" />;
    return <Meh className="w-6 h-6 text-gray-500" />;
  };

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
            User Flow
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            User Journey Map
          </h2>
          <p className="text-xl text-[#7179bc] max-w-3xl mx-auto leading-relaxed">
            Mapping the complete ride-booking experience from search to payment,
            identifying key touchpoints and optimization opportunities.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#7c56a3] via-[#a44e9f] to-[#7179bc] hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#daecff] to-white rounded-3xl p-8 shadow-lg border border-[#1a1a2e]/5 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7c56a3] to-[#a44e9f] flex items-center justify-center shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-[#a44e9f]/20" style={{ fontFamily: 'Montserrat' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3" style={{ fontFamily: 'Montserrat' }}>
                    {step.title}
                  </h3>

                  <p className="text-[#7179bc] mb-4">
                    {step.action}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-[#1a1a2e]/10">
                    <div className="flex items-center gap-2">
                      {getEmotionIcon(step.emotion)}
                      <span className="text-sm text-[#7179bc]">User Emotion</span>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3">
                      <p className="text-xs text-blue-900 font-medium mb-1">Touchpoint</p>
                      <p className="text-sm text-blue-700">{step.touchpoint}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3">
                      <p className="text-xs text-green-900 font-medium mb-1">Opportunity</p>
                      <p className="text-sm text-green-700">{step.opportunity}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white text-center">
            <Smile className="w-12 h-12 mx-auto mb-4" />
            <p className="text-3xl font-bold mb-2" style={{ fontFamily: 'Montserrat' }}>4/6</p>
            <p className="text-white/90">Positive Moments</p>
          </div>
          <div className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-3xl p-8 text-white text-center">
            <Meh className="w-12 h-12 mx-auto mb-4" />
            <p className="text-3xl font-bold mb-2" style={{ fontFamily: 'Montserrat' }}>2/6</p>
            <p className="text-white/90">Neutral Moments</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white text-center">
            <CheckCircle className="w-12 h-12 mx-auto mb-4" />
            <p className="text-3xl font-bold mb-2" style={{ fontFamily: 'Montserrat' }}>6</p>
            <p className="text-white/90">Optimization Points</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
