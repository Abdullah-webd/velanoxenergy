import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Industries from '@/components/Industries'
import Sustainability from '@/components/Sustainability'
import Testimonials from '@/components/Testemonial';
import Certifications from '@/components/Certification';
import Team from '@/components/Team'
import Portfolio from '@/components/Portfolio'
import NewsUpdates from '@/components/NewsUpdate';
import Blog from './blog/page';
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Stats />
      <Industries />
      <Sustainability />
      <Testimonials />
      <Certifications />
      <Team />
      <Portfolio />
      <Blog/>
      <CTA />
      <Footer />
    </>
  );
}