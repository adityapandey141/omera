import FundingOpportunity from '../components/FundingOpportunity';
import MarketOpportunity from '../components/MarketOpportunity';
import GrowthPlan from '../components/GrowthPlan';
import ValueProposition from '../components/ValueProposition';
import InvestorCTA from '../components/InvestorCTA';

export default function Investment({ openModal }) {
  return (
    <>
      <FundingOpportunity openModal={openModal} />
      <MarketOpportunity />
      <GrowthPlan />
      <ValueProposition />
      <InvestorCTA openModal={openModal} />
    </>
  );
}
