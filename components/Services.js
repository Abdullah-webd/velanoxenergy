import { Wrench, Droplets, Gauge, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Drilling Equipment',
      description: 'High-performance drilling systems and components for onshore and offshore operations.',
    },
    {
      icon: Droplets,
      title: 'Processing Systems',
      description: 'Advanced petroleum processing and refining equipment for maximum efficiency.',
    },
    {
      icon: Gauge,
      title: 'Pressure Vessels',
      description: 'Custom-engineered pressure vessels and storage solutions for various applications.',
    },
    {
      icon: Settings,
      title: 'Maintenance Services',
      description: 'Comprehensive maintenance and support services to keep your operations running.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive oil and gas manufacturing solutions tailored to meet 
            the demanding requirements of modern energy infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}