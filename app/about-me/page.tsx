import HeroSection from "@/components/core/About/HeroSection"
import ProfessionalSummary from "@/components/core/About/ProfessionalSummary" 
import ResearchIntrest from "@/components/core/About/ResearchIntrest"
import ContactSection from "@/components/core/About/ContactSection"
import BackToHome from "@/components/common/BackToHome"

export default function AboutMePage() {
  return (
    <div className="min-h-screen">
      <BackToHome />
      <HeroSection />
      <ProfessionalSummary /> 
      <ResearchIntrest />
      <ContactSection />
    </div>
  )
}