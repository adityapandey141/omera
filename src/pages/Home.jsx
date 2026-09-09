import Hero from '../components/Hero';
import CompanyIntro from '../components/CompanyIntro';
import Services from '../components/Services';
import Approach from '../components/Approach';
import Projects from '../components/Projects';
import WhyOmrea from '../components/WhyOmrea';
import CTA from '../components/CTA';

export default function Home({ openModal }) {
  return (
    <>
      <Hero openModal={openModal} />
      <CompanyIntro />
      <Services />
      <Approach />
      <Projects />
      <WhyOmrea />
      <CTA openModal={openModal} />
    </>
  );
}
