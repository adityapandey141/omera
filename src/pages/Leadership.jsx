import Leadership from '../components/Leadership';
import CTA from '../components/CTA';

export default function LeadershipPage({ openModal }) {
  return (
    <>
      <Leadership />
      <CTA openModal={openModal} />
    </>
  );
}
