import Hero from "@/components/home/hero";
import PainPoints from "@/components/home/pain-points";
import SolutionIntro from "@/components/home/solution-intro";
import FourPillars from "@/components/home/four-pillars";
import ValueProposition from "@/components/home/value-proposition";
import ProcessTimeline from "@/components/home/process-timeline";
import Testimonials from "@/components/home/testimonials";
import QuizValueProp from "@/components/home/quiz-value-prop";
import FinalCTA from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <SolutionIntro />
      <FourPillars />
      <ValueProposition />
      <ProcessTimeline />
      <Testimonials />
      <QuizValueProp />
      <FinalCTA />
    </>
  );
}
