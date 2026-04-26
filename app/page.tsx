import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { ProblemSection } from "@/components/sections/problem"
import { GapSection } from "@/components/sections/gap"
import { PillarsSection } from "@/components/sections/pillars"
import { GamePreviewSection } from "@/components/sections/game-preview"
import { CampusSection } from "@/components/sections/campus"
import { ImpactSection } from "@/components/sections/impact"
import { PartnershipSection } from "@/components/sections/partnership"
import { StoriesSection } from "@/components/sections/stories"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <GapSection />
        <PillarsSection />
        <GamePreviewSection />
        <CampusSection />
        <ImpactSection />
        <PartnershipSection />
        <StoriesSection />
      </main>
      <Footer />
    </>
  )
}
