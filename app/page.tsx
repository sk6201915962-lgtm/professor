"use client"
import type React from "react"
import HeroSection from "@/components/core/Home/HeroSection"
import StatsSection from "@/components/core/Home/StatsSection"
import SkillSection from "@/components/core/Home/SkillSection"
import AboutSection from "@/components/core/Home/AboutSection"
import EducationSection from "@/components/core/Home/EducationSection"
import ContactSection from "@/components/core/Home/ContactSection"

export default function HomePage() {
  return (
    <>
          <div className="min-h-screen">
            <HeroSection />
            <StatsSection />
            <SkillSection />
            <AboutSection />
            <ContactSection />
          </div>
    </>
  )
}
