'use client'

import { ExternalLink, MapPin, Calendar, DollarSign, Users, Award } from 'lucide-react'

const projects = [
  {
    title: 'North Sea Offshore Platform',
    location: 'Norwegian Continental Shelf',
    year: '2023',
    value: '$600,000',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Offshore Drilling',
    description: 'Complete offshore platform installation and commissioning for deep-water oil extraction.',
    highlights: ['15,000 barrels/day capacity', '200+ crew accommodation', 'Zero environmental incidents'],
    status: 'Completed'
  },
  {
    title: 'Trans-Continental Pipeline',
    location: 'Texas to Louisiana, USA',
    year: '2022-2024',
    value: '$500,000',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Pipeline Infrastructure',
    description: '500-mile natural gas pipeline with advanced monitoring and safety systems.',
    highlights: ['500 miles of pipeline', 'Smart monitoring systems', 'Environmental compliance'],
    status: 'In Progress'
  },
  {
    title: 'Renewable Energy Integration',
    location: 'California, USA',
    year: '2023',
    value: '$800,000',
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Sustainable Energy',
    description: 'Solar and wind integration with existing oil and gas infrastructure.',
    highlights: ['300MW renewable capacity', 'Grid integration', 'Carbon footprint reduction'],
    status: 'Completed'
  },
  {
    title: 'Middle East Refinery Upgrade',
    location: 'Saudi Arabia',
    year: '2021-2023',
    value: '$1,000,000',
    image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Refinery Operations',
    description: 'Complete modernization of refinery facilities with advanced processing technology.',
    highlights: ['50% efficiency increase', 'Advanced automation', 'Reduced emissions'],
    status: 'Completed'
  },
  {
    title: 'Arctic Exploration Project',
    location: 'Alaska, USA',
    year: '2024',
    value: '$350,000',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'Exploration',
    description: 'Environmentally responsible oil exploration in sensitive Arctic regions.',
    highlights: ['Minimal environmental impact', 'Advanced drilling technology', 'Wildlife protection'],
    status: 'In Progress'
  },
  {
    title: 'LNG Terminal Expansion',
    location: 'Queensland, Australia',
    year: '2022',
    value: '$200,000',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    category: 'LNG Operations',
    description: 'Expansion of liquefied natural gas terminal with increased export capacity.',
    highlights: ['Double export capacity', 'Advanced safety systems', 'Local job creation'],
    status: 'Completed'
  }
]

const projectStats = [
  { label: 'Projects Completed', value: '25+', icon: Award },
  { label: 'Countries Served', value: '15+', icon: MapPin },
  { label: 'Total Project Value', value: '$5m', icon: DollarSign },
  { label: 'Team Members', value: '30+', icon: Users }
]

export default function Portfolio() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects spanning offshore drilling, 
            pipeline infrastructure, renewable energy, and advanced refinery operations.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {projectStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/70 text-white rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.year}
                  </div>
                  <div className="flex items-center text-gray-600 col-span-2">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Project Value: {project.value}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300">
                  View Project Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}