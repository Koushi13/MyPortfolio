import { Hero } from './components/Hero';
import { ProblemStatement } from './components/ProblemStatement';
import { ProjectGoal } from './components/ProjectGoal';
import { UserResearch } from './components/UserResearch';
import { CompetitorAnalysis } from './components/CompetitorAnalysis';
import { UserPersona } from './components/UserPersona';
import { UserJourneyMap } from './components/UserJourneyMap';
import { InformationArchitecture } from './components/InformationArchitecture';
import { Wireframes } from './components/Wireframes';
import { DesignSystem } from './components/DesignSystem';
import { KeyFeatures } from './components/KeyFeatures';
import { UIShowcase } from './components/UIShowcase';
import { UsabilityImprovements } from './components/UsabilityImprovements';
import { FinalOutcome } from './components/FinalOutcome';
import { Learnings } from './components/Learnings';
import { ThankYou } from './components/ThankYou';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#daecff]">
      <Hero />
      <ProblemStatement />
      <ProjectGoal />
      <UserResearch />
      <CompetitorAnalysis />
      <UserPersona />
      <UserJourneyMap />
      <InformationArchitecture />
      <Wireframes />
      <DesignSystem />
      <KeyFeatures />
      <UIShowcase />
      <UsabilityImprovements />
      <FinalOutcome />
      <Learnings />
      <ThankYou />
    </div>
  );
}