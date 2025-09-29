"use client"
import BackToHome from "@/components/common/BackToHome"
import CommonHeaderSection from "@/components/common/CommonHeaderSection"
import SkillCard from "@/components/core/skill/SkillCard"
import { skillsData } from "@/lib/constants"
import { Lightbulb } from "lucide-react"
import React from "react"

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
         <BackToHome/>
      <CommonHeaderSection
        icon={Lightbulb}
        title="Skills & Expertise"
        subtext="Academic Journey of Dr. Soumya Ranjan Nayak"
      />
      <div className="max-w-7xl my-12 mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}
