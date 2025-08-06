'use client'

import { Factory, Zap, Building2, Truck, Ship, Plane } from 'lucide-react'

const industries = [
  {
    icon: Factory,
    title: 'Upstream Operations',
    description: 'Exploration, drilling, and production services for oil and gas extraction with cutting-edge technology.',
    features: ['Seismic Analysis', 'Drilling Operations', 'Well Completion', 'Production Optimization']
  },
  {
    icon: Building2,
    title: 'Midstream Processing',
    description: 'Transportation, storage, and processing of crude oil and natural gas through our extensive network.',
    features: ['Pipeline Systems', 'Storage Facilities', 'Gas Processing', 'Quality Control']
  },
  {
    icon: Zap,
    title: 'Power Generation',
    description: 'Clean energy solutions and power generation facilities serving industrial and commercial clients.',
    features: ['Natural Gas Plants', 'Cogeneration', 'Grid Integration', 'Energy Storage']
  },
  {
    icon: Truck,
    title: 'Transportation',
    description: 'Comprehensive logistics and transportation solutions for petroleum products and equipment.',
    features: ['Fleet Management', 'Route Optimization', 'Safety Protocols', 'Real-time Tracking']
  },
  {
    icon: Ship,
    title: 'Marine Operations',
    description: 'Offshore drilling, marine transportation, and subsea operations with advanced vessel technology.',
    features: ['Offshore Drilling', 'Subsea Systems', 'Marine Transport', 'Port Operations']
  },
  {
    icon: Plane,
    title: 'Aviation Fuel',
    description: 'High-quality aviation fuel supply and distribution to airports and aviation companies worldwide.',
    features: ['Jet Fuel Supply', 'Quality Assurance', 'Airport Services', 'Global Distribution']
  }
]

export default function Industries() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From upstream exploration to downstream distribution, we provide comprehensive 
            solutions across the entire oil and gas value chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <industry.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {industry.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {industry.description}
              </p>
              
              <ul className="space-y-2">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}