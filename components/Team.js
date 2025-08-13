'use client'

import { Linkedin, Mail, Award, Users } from 'lucide-react'

const leadership = [
  {
    name: 'John Mitchell',
    position: 'Chief Executive Officer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    bio: '10+ years in oil & gas industry leadership, former VP at ExxonMobil',
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
                <div className="text-2xl font-bold">30+</div>
                <div className="text-blue-100">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-blue-100">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-blue-100">Employee Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-blue-100">Years Average Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}