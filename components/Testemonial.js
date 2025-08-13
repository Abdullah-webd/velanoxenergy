'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Operations Director',
    company: 'Global Energy Solutions',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    text: 'Velanox Energy Industries has been our trusted partner for over 8 years. Their expertise in upstream operations and commitment to safety standards is unmatched in the industry.'
  },
  {
    name: 'Michael Chen',
    position: 'Chief Engineer',
    company: 'Atlantic Drilling Corp',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    text: 'The technical innovation and project management capabilities of Velanox Energy have consistently exceeded our expectations. They deliver results on time and within budget.'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Sustainability Manager',
    company: 'EcoEnergy International',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    text: 'Their commitment to environmental sustainability while maintaining operational excellence makes Velanox Energy the ideal partner for our green energy initiatives.'
  },
 


]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from industry leaders who trust Velanox Industries for their 
            most critical oil and gas operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative group hover:-translate-y-1"
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Satisfied Clients
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the Velanox Energy difference with industry-leading expertise, 
              cutting-edge technology, and unwavering commitment to excellence.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">20+</div>
                <div>Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div>Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div>Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}