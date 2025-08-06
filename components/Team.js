'use client'

import { Linkedin, Mail, Award, Users } from 'lucide-react'

const leadership = [
  {
    name: 'John Mitchell',
    position: 'Chief Executive Officer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: '25+ years in oil & gas industry leadership, former VP at ExxonMobil',
    linkedin: '#',
    email: 'j.mitchell@petrotech.com',
    achievements: ['MBA Harvard Business School', 'Former ExxonMobil VP', 'Industry Leadership Award 2023']
  },
  {
    name: 'Sarah Chen',
    position: 'Chief Technology Officer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Leading innovation in drilling technology and sustainable energy solutions',
    linkedin: '#',
    email: 's.chen@petrotech.com',
    achievements: ['PhD Petroleum Engineering MIT', '15+ Patents', 'Technology Innovation Award']
  },
  {
    name: 'Michael Rodriguez',
    position: 'Chief Operations Officer',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Expert in offshore operations and project management with global experience',
    linkedin: '#',
    email: 'm.rodriguez@petrotech.com',
    achievements: ['20+ Years Offshore Experience', 'Project Management Professional', 'Safety Excellence Award']
  },
  {
    name: 'Emily Johnson',
    position: 'Chief Financial Officer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: 'Financial strategy and risk management specialist with energy sector expertise',
    linkedin: '#',
    email: 'e.johnson@petrotech.com',
    achievements: ['CPA Certified', 'Former Goldman Sachs', 'Energy Finance Expert']
  }
]

const departments = [
  {
    name: 'Engineering & Technology',
    count: 150,
    description: 'Petroleum engineers, drilling specialists, and technology innovators',
    icon: '⚙️'
  },
  {
    name: 'Operations & Field Services',
    count: 300,
    description: 'Field operators, technicians, and maintenance specialists',
    icon: '🔧'
  },
  {
    name: 'Health, Safety & Environment',
    count: 45,
    description: 'Safety officers, environmental specialists, and compliance experts',
    icon: '🛡️'
  },
  {
    name: 'Business & Administration',
    count: 80,
    description: 'Finance, HR, legal, and business development professionals',
    icon: '📊'
  }
]

export default function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Meet Our Team
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our world-class team of industry experts, engineers, and innovators 
            drives excellence in every project we undertake.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Executive Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                <div className="relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h4>
                  <p className="text-blue-600 font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {leader.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={leader.linkedin}
                      className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={`mailto:${leader.email}`}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Departments */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Global Workforce
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {departments.map((dept, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{dept.name}</h4>
                <div className="text-3xl font-bold text-blue-600 mb-2">{dept.count}+</div>
                <p className="text-sm text-gray-600">{dept.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-xl p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-4">Join Our Team</h4>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We're always looking for talented professionals to join our growing team. 
              Explore exciting career opportunities in the energy sector.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">575+</div>
                <div className="text-blue-100">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-blue-100">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-blue-100">Employee Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-blue-100">Years Average Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}