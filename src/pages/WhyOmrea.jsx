import WhyOmrea from '../components/WhyOmrea';
import Stats from '../components/Stats';
import CTA from '../components/CTA';

export default function WhyOmreaPage({ openModal }) {
  return (
    <>
      <WhyOmrea />
      <Stats />
      <CTA openModal={openModal} />
    </>
  );
}
