import EducationTimeline from "@/components/core/Education/EducationTimeline"
import AcademicHighlight from "@/components/core/Education/AcademicHighlight"
import BackToHome from "@/components/common/BackToHome"
import CommonHeaderSection from "@/components/common/CommonHeaderSection"
import { GraduationCap } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <BackToHome/>
      <CommonHeaderSection
        icon={GraduationCap}
        title="EDUCATIONAL QUALIFICATIONS"
        subtext="Academic Journey of Dr. Soumya Ranjan Nayak"
      />
      <EducationTimeline />
      <AcademicHighlight />
    </div>
  )
}
