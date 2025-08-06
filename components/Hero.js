import Link from 'next/link';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" 
  style={{
    backgroundImage: `url('https://media.istockphoto.com/id/1922319777/photo/two-engineer-look-projects-and-planning-with-tablet-mobile-in-factory.jpg?s=612x612&w=0&k=20&c=Hv5KZeYYfUuFaIopNCPCM2B-vnraIQsVjzS4IJIAj0A= ')`,
  }}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powering the Future of
            <span className="text-orange-400"> Energy</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Leading oil and gas manufacturing company delivering innovative solutions 
            for drilling, processing, and energy infrastructure worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Safety First</h3>
              <p className="text-blue-100">Uncompromising commitment to safety standards and protocols</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-blue-100">Cutting-edge technology and innovative manufacturing processes</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-blue-100">25+ years of experience in oil and gas manufacturing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}