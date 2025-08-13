'use client'

import { Calendar, ArrowRight, Tag, Clock } from 'lucide-react'

const news = [
  {
    title: 'Velanox Energy Announces $2,000,000 Investment in Renewable Energy',
    excerpt: 'Major expansion into solar and wind energy projects as part of our 2030 sustainability commitment.',
    date: '2024-01-15',
    category: 'Sustainability',
    readTime: '3 min read',
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    featured: true
  },
  {
    title: 'New Arctic Drilling Technology Reduces Environmental Impact by 60%',
    excerpt: 'Revolutionary drilling technology minimizes ecological footprint while maintaining operational efficiency.',
    date: '2024-01-10',
    category: 'Technology',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    featured: false
  },
  {
    title: 'Partnership with Global Energy Leaders for Carbon Neutral Operations',
    excerpt: 'Strategic alliance formed to accelerate carbon neutrality goals across the oil and gas industry.',
    date: '2024-01-08',
    category: 'Partnerships',
    readTime: '2 min read',
    image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    featured: false
  },
  {
    title: 'Q4 2023 Results: Record Safety Performance and Operational Excellence',
    excerpt: 'Zero major incidents reported while achieving 15% increase in operational efficiency.',
    date: '2024-01-05',
    category: 'Company News',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    featured: false
  },
  {
    title: 'Advanced AI Integration in Pipeline Monitoring Systems',
    excerpt: 'Machine learning algorithms now predict maintenance needs with 95% accuracy.',
    date: '2024-01-03',
    category: 'Innovation',
    readTime: '3 min read',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    featured: false
  }
]

const categories = ['All', 'Sustainability', 'Technology', 'Partnerships', 'Company News', 'Innovation']

export default function NewsUpdates() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest developments, technological innovations, 
            and industry leadership in oil and gas operations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                index === 0 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={news[0].image} 
                  alt={news[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                    Featured
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {news[0].category}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {news[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {news[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(news[0].date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {news[0].readTime}
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {news.slice(1).map((article, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest industry insights, 
            company updates, and technological innovations.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            Join 10,000+ industry professionals who trust our insights
          </p>
        </div>
      </div>
    </section>
  )
}