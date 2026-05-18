import { Home, Search, DollarSign, MapPin, CreditCard, Clock, User, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export function InformationArchitecture() {
  const architecture = [
    {
      icon: Home,
      title: 'Home',
      children: ['Quick Search', 'Recent Rides', 'Saved Places']
    },
    {
      icon: Search,
      title: 'Search',
      children: ['Enter Destination', 'Location Picker', 'Recent Searches']
    },
    {
      icon: DollarSign,
      title: 'Compare',
      children: ['Fare Comparison', 'Provider Options', 'ETA Display']
    },
    {
      icon: MapPin,
      title: 'Ride Details',
      children: ['Driver Info', 'Vehicle Details', 'Route Preview']
    },
    {
      icon: CreditCard,
      title: 'Payment',
      children: ['Payment Methods', 'Fare Breakdown', 'Apply Offers']
    },
    {
      icon: Clock,
      title: 'Ride History',
      children: ['Past Rides', 'Receipts', 'Favorites']
    },
    {
      icon: User,
      title: 'Profile',
      children: ['Personal Info', 'Preferences', 'Settings']
    },
    {
      icon: Menu,
      title: 'More',
      children: ['Support', 'About', 'Legal']
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
            Structure
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a1a2e] mb-6" style={{ fontFamily: 'Montserrat' }}>
            Information Architecture
          </h2>
          <p className="text-xl text-[#7179bc] max-w-3xl mx-auto leading-relaxed">
            A clear and intuitive navigation structure designed for effortless
            ride booking and management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architecture.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1a1a2e]/5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7c56a3] to-[#a44e9f] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-4" style={{ fontFamily: 'Montserrat' }}>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.children.map((child, childIndex) => (
                    <li key={childIndex} className="flex items-center gap-2 text-[#7179bc]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a44e9f]"></div>
                      <span className="text-sm">{child}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {index < architecture.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#a44e9f]/30"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#7c56a3] to-[#7179bc] rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-[#daecff] mb-4" style={{ fontFamily: 'Montserrat' }}>
            Navigation Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { title: 'Simple', desc: 'Max 3 taps to any feature' },
              { title: 'Clear', desc: 'Intuitive labels & icons' },
              { title: 'Consistent', desc: 'Familiar patterns throughout' }
            ].map((principle, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold mb-2 text-[#ffffff]">{principle.title}</p>
                <p className="text-[#daecff]/80">{principle.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
