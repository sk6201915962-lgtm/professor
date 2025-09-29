import ExperienceTimeline from "@/components/core/Experience/ExperienceTimeline"
import CareerSummary from "@/components/core/Experience/CareerSummary"
import BackToHome from "@/components/common/BackToHome"
import CommonHeaderSection from "@/components/common/CommonHeaderSection"
import { Briefcase } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
       <BackToHome/>
      <CommonHeaderSection
        icon={Briefcase}
        title="PROFESSIONAL EXPERIENCE"
        subtext="A comprehensive overview of my academic and research journey spanning over a decade in higher education
              and research institutions."
      />
      <ExperienceTimeline />
      <CareerSummary />
    </div>
  )
}
