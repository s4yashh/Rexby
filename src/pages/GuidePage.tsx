import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ThingsToDo from '@/components/ThingsToDo'
import Itinerary from '@/components/Itinerary'
import AskGuide from '@/components/AskGuide'
import InteractiveMap from '@/components/InteractiveMap'
import BuildItinerary from '@/components/BuildItinerary'
import FAQ from '@/components/FAQ'
import MoreGuides from '@/components/MoreGuides'
import Footer from '@/components/Footer'

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex flex-col bg-offwhite">
        <Hero />
        <ThingsToDo />
        <Itinerary />
        <BuildItinerary />
        <AskGuide />
        <InteractiveMap />
        <FAQ />
      </div>
      <MoreGuides />
      <Footer />
    </div>
  )
}
