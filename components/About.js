export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              25+ Years of Excellence in Oil & Gas Manufacturing
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Since 1998, Velanox Energy  has been at the forefront of oil and gas 
              manufacturing, delivering innovative solutions that power the world's energy needs.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our commitment to quality, safety, and innovation has made us a trusted partner 
              for major energy companies worldwide. We combine decades of experience with 
              cutting-edge technology to deliver manufacturing solutions that exceed expectations.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">50+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <img 
              src="https://media.istockphoto.com/id/1712993468/photo/engine-officer-recording-working-parameters-of-main-engine.jpg?s=612x612&w=0&k=20&c=PCMO6BgQzpNGH1y9MnLa1VXnU4ocHlxVzO1nyvVInqA=" 
              alt="Oil and gas operations" 
              className="rounded-lg shadow-lg w-full h-96 object-cover"

              
            />
          </div>
        </div>
      </div>
    </section>
  );
}