import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import TicketsPage from "./tickets/page"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <TicketsPage />
    </main>
  )
}
