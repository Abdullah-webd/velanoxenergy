import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 rounded-xl p-8 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Power Your Next Project?
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
          Get in touch with our expert team to discuss your oil and gas manufacturing needs. 
          We're here to deliver solutions that drive your success.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 transition-colors"
        >
          Contact Us Today
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}