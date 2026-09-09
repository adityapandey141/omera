import Capabilities from '../components/Capabilities';
import Approach from '../components/Approach';
import CTA from '../components/CTA';

export default function CapabilitiesPage({ openModal }) {
  return (
    <>
      <Capabilities />
      <Approach />
      <CTA openModal={openModal} />
    </>
  );
}
