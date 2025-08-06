'use client';
import React from 'react';

export default function ceopage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mt-[70px]">
      <h1 className="text-5xl font-bold mb-10 text-center text-gray-900">Meet Our CEO – Engr. Ibrahim O. Musa</h1>

      {/* CEO Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
        <img
          src="https://images.unsplash.com/photo-1559718062-361155fad299?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNlb3xlbnwwfHwwfHx8MA%3D%3D"
          alt="CEO of Velanox Energy"
          className="w-72 h-72 object-cover rounded-full shadow-2xl"
        />
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Engr. Ibrahim O. Musa is the visionary force behind Velanox Energy — a U.S.-based oil and gas powerhouse dedicated to revolutionizing energy delivery through innovation, integrity, and sustainable growth. 
          </p>
          <p className="text-lg text-gray-700 mt-4">
            With over two decades of hands-on leadership in petroleum engineering and global energy consulting, Engr. Musa has become a respected figure in the American energy sector, known for building world-class infrastructure and inspiring teams across continents.
          </p>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="italic text-xl text-center text-blue-800 font-medium border-l-4 border-blue-600 pl-6 py-4 my-10">
        "Our mission at Velanox Energy is bigger than oil — it’s about powering a future where energy is clean, accessible, and built with purpose."  
        <br />
        — Engr. Ibrahim O. Musa
      </blockquote>

      {/* Vision Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">His Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Engr. Musa envisions a world where the oil and gas industry leads the charge toward sustainable development. His goal is to transform Velanox Energy into a globally recognized brand that delivers clean, safe, and future-ready energy solutions — from the Gulf Coast to the world.
        </p>
        <p className="text-gray-700 text-lg mt-4 leading-relaxed">
          Under his leadership, Velanox has grown into a trusted partner for governments, private sector clients, and international investors — offering services that span upstream operations, refining systems, and petroleum logistics.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">His Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          To lead the U.S. oil and gas market into a new era of efficiency and environmental responsibility. Engr. Musa believes that true industry leadership requires not just profit, but purpose — one that includes training young engineers, investing in local communities, and implementing green technologies at scale.
        </p>
        <p className="text-gray-700 text-lg mt-4 leading-relaxed">
          His personal mission is to bridge innovation and tradition, ensuring that Velanox remains at the forefront of the evolving global energy narrative.
        </p>
      </section>

      {/* Career Background */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Career Background</h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg leading-relaxed">
          <li>Former Senior Engineer at Chevron Corporation (Houston, TX)</li>
          <li>Consulted for U.S. Department of Energy on clean energy transition</li>
          <li>Founder of several energy tech startups focused on AI in drilling ops</li>
          <li>Holds a Master’s degree in Petroleum Engineering from Stanford University</li>
          <li>Board Member – American Energy Council</li>
        </ul>
      </section>

      {/* Leadership Style */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Leadership Style & Beliefs</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Engr. Musa is a servant-leader. He believes in empowering his team, rewarding innovation, and holding the highest safety and ethical standards across every Velanox project. Whether he’s speaking at an energy summit or walking a rig site, he remains deeply involved in the heartbeat of the company.
        </p>
        <p className="text-gray-700 text-lg mt-4 leading-relaxed">
          He champions diversity in engineering, actively mentors upcoming professionals, and remains committed to creating a company culture where growth, impact, and integrity thrive.
        </p>
      </section>

      {/* Personal Life */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Outside of Business</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Beyond boardrooms and drilling platforms, Engr. Musa is a passionate philanthropist, avid reader, and advocate for youth empowerment in underserved communities. He has funded scholarships for engineering students across the U.S. and volunteers as a speaker at industry workshops.
        </p>
      </section>

      {/* Final CTA */}
      <div className="text-center py-10 border-t border-gray-300 mt-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Want to learn more about our leadership?</h3>
        <p className="text-lg text-gray-600">Reach out directly or explore our mission at Velanox Energy.</p>
        <a
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
