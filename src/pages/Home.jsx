import Hero from '../components/Hero';
import CompanyIntro from '../components/CompanyIntro';
import MeetDirector from '../components/MeetDirector';
import Services from '../components/Services';
import FeaturedWork from '../components/FeaturedWork';
import ConstructionShowcase from '../components/ConstructionShowcase';
import Approach from '../components/Approach';
import ImpactBanner from '../components/ImpactBanner';
import Projects from '../components/Projects';
import WhyOmrea from '../components/WhyOmrea';
import CTA from '../components/CTA';

export default function Home({ openModal }) {
  return (
    <>
      <Hero openModal={openModal} />
      <CompanyIntro />
      <MeetDirector />
      <Services />
      <FeaturedWork />
      <ConstructionShowcase />
      <Approach />
      <ImpactBanner />
      <Projects />
      <WhyOmrea />
      <CTA openModal={openModal} />
    </>
  );
}
