import Services from '../components/Services';
import Capabilities from '../components/Capabilities';
import CTA from '../components/CTA';

export default function ServicesPage({ openModal }) {
  return (
    <>
      <Services />
      <Capabilities />
      <CTA openModal={openModal} />
    </>
  );
}
