'use client'

import { Leaf, Recycle, Wind, Droplets, Award, Target } from 'lucide-react'

const initiatives = [
  {
    icon: Leaf,
    title: 'Carbon Neutral Operations',
    description: 'Committed to achieving net-zero emissions by 2030 through innovative technologies and sustainable practices.',
    metric: '45% Reduction',
    metricLabel: 'in CO2 emissions since 2020'
  },
  {
    icon: Recycle,
    title: 'Waste Reduction',
    description: 'Advanced recycling programs and waste minimization strategies across all operational facilities.',
    metric: '90% Recycled',
    metricLabel: 'operational waste diverted from landfills'
  },
  {
    icon: Wind,
    title: 'Renewable Energy',
    description: 'Investing in wind, solar, and hydrogen technologies to diversify our energy portfolio.',
    metric: '$2.5B Invested',
    metricLabel: 'in renewable energy projects'
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Implementing cutting-edge water treatment and recycling systems to minimize environmental impact.',
    metric: '60% Reduction',
    metricLabel: 'in freshwater consumption'
  }
]

const certifications = [
  'ISO 14001 Environmental Management',
  'OHSAS 18001 Occupational Health & Safety',
  'API Q1 Quality Management',
  'Carbon Trust Standard'
]

export default function Sustainability() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Our Sustainability Impact
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the industry in environmental stewardship and sustainable energy solutions 
            for a cleaner, more sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <initiative.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {initiative.description}
                  </p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <div className="text-2xl font-bold text-green-600">
                      {initiative.metric}
                    </div>
                    <div className="text-sm text-gray-600">
                      {initiative.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold text-white">
                  Environmental Certifications
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Our commitment to environmental excellence is validated by industry-leading certifications and standards.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Target className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
              <h4 className="text-3xl font-bold mb-2">2030 Goal</h4>
              <p className="text-xl mb-4">Net Zero Emissions</p>
              <p className="text-green-100">
                Join us in building a sustainable energy future through innovation, 
                responsibility, and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}