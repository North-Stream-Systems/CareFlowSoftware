import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { StorySection } from "@/components/sections/StorySection";
import { ProductOverview } from "@/components/sections/ProductOverview";
import { TechnicalEdge } from "@/components/sections/TechnicalEdge";
import { PricingSummary } from "@/components/sections/PricingSummary";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <StorySection />
      <ProductOverview />
      <TechnicalEdge />
      <SocialProof />
      <PricingSummary />
      <FinalCta />
    </>
  );
}
