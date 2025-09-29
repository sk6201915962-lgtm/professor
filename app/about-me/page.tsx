import HeroSection from "@/components/core/About/HeroSection"
import ProfessionalSummary from "@/components/core/About/ProfessionalSummary"
import EducationalSummary from "@/components/core/About/EducationalSummary"
import ResearchIntrest from "@/components/core/About/ResearchIntrest"
import ContactSection from "@/components/core/About/ContactSection"
import BackToHome from "@/components/common/BackToHome"

export default function AboutMePage() {
  return (
    <div className="min-h-screen">
      <BackToHome />
      <HeroSection />
      <ProfessionalSummary />
      <EducationalSummary />
      <ResearchIntrest />
      <ContactSection />
    </div>
  )
}