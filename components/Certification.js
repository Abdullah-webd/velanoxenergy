'use client'

import { Shield, Award, CheckCircle, Globe, FileCheck, Users, Leaf } from 'lucide-react'

const certifications = [
  {
    icon: Shield,
    title: 'ISO 9001:2015',
    category: 'Quality Management',
    description: 'International standard for quality management systems ensuring consistent, high-quality products and services.',
    validUntil: '2025'
  },
  {
    icon: Leaf,
    title: 'ISO 14001:2015',
    category: 'Environmental Management',
    description: 'Environmental management system certification demonstrating our commitment to environmental responsibility.',
    validUntil: '2025'
  },
  {
    icon: Users,
    title: 'ISO 45001:2018',
    category: 'Health & Safety',
    description: 'Occupational health and safety management system ensuring the highest safety standards for our workforce.',
    validUntil: '2026'
  },
  {
    icon: Award,
    title: 'API Q1 & Q2',
    category: 'Petroleum Industry',
    description: 'American Petroleum Institute quality management system for oil and gas industry operations.',
    validUntil: '2025'
  },
  {
    icon: Globe,
    title: 'NORSOK Standards',
    category: 'Offshore Operations',
    description: 'Norwegian offshore technology standards for safe and efficient offshore petroleum operations.',
    validUntil: '2024'
  },
  {
    icon: FileCheck,
    title: 'ASME Certification',
    category: 'Engineering Standards',
    description: 'American Society of Mechanical Engineers certification for pressure vessels and piping systems.',
    validUntil: '2026'
  }
]

const complianceAreas = [
  {
    title: 'Environmental Compliance',
    items: ['EPA Regulations', 'Clean Air Act', 'Clean Water Act', 'RCRA Compliance', 'SPCC Plans']
  },
  {
    title: 'Safety & Health',
    items: ['OSHA Standards', 'Process Safety Management', 'Emergency Response', 'Risk Assessment', 'Safety Training']
  },
  {
    title: 'Industry Standards',
    items: ['API Standards', 'ASME Codes', 'NACE Guidelines', 'IEEE Standards', 'ASTM Specifications']
  },
  {
    title: 'International Compliance',
    items: ['IMO Regulations', 'IFC Standards', 'EU Directives', 'Local Regulations', 'Cross-border Compliance']
  }
]

export default function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Certifications & Compliance
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is validated by industry-leading certifications 
            and strict adherence to international standards and regulations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <cert.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{cert.title}</h3>
                  <p className="text-sm text-blue-600">{cert.category}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Valid until {cert.validUntil}</span>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Areas */}
        <div className="bg-gray-900 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Comprehensive Compliance Framework
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We maintain strict compliance across all operational areas, ensuring regulatory 
              adherence and industry best practices in every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                  {area.title}
                </h4>
                <ul className="space-y-2">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Audit-Ready Operations</h4>
              <p className="text-blue-100 mb-6">
                Our comprehensive documentation and quality management systems ensure 
                we're always prepared for regulatory audits and compliance reviews.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-blue-100">Audit Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Zero</div>
                  <div className="text-blue-100">Major Non-Conformities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-100">Compliance Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}