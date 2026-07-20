import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { StorySection } from "@/components/sections/StorySection";
import { ProductOverview } from "@/components/sections/ProductOverview";
import { TechnicalEdge } from "@/components/sections/TechnicalEdge";
import { PricingSummary } from "@/components/sections/PricingSummary";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { softwareApplicationJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd()} />
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
