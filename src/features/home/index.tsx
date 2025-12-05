import { BlazingDealsSection } from "./components/blazzing-deals";
import { BuzzingDestinationSection } from "./components/buzzing-destination";
import { ExclusiveSection } from "./components/exclusive";
import { ExploreGhanaSection } from "./components/explore-ghana";
import { ForYouSection } from "./components/for-you";
import { GhanaTopTenSection } from "./components/ghana-top-ten";
import { GlobalHighlightsSection } from "./components/global-highlights";
import { HeroSection } from "./components/hero";
import { HiddenGemsSection } from "./components/hidden-gems";
import { HotWeekSection } from "./components/hot-week";
import { SpotlightSection } from "./components/spotlight";
import { UnmissableSection } from "./components/unmissable";



export function HomePage() {
  return (
    <main className="flex justify-center">
      <div className="w-full max-w-[1440px] px-[39px] pb-16">
        <HeroSection />
        <SpotlightSection />
        <HotWeekSection />
        <UnmissableSection />
        <ExclusiveSection />
        <ForYouSection />
        <BuzzingDestinationSection />
        <BlazingDealsSection />
        <HiddenGemsSection />
        <ExploreGhanaSection />
        <GhanaTopTenSection />
        <GlobalHighlightsSection />
      </div>
    </main>
  );
}
