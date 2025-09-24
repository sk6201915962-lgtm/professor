"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Award, BookOpen, Cpu, GraduationCap, ChevronDown, Menu, X, Home, MapPin, Star } from "lucide-react"
import SimpleChatbot from "@/components/simple-chatbot"

export default function EducationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    "HOME",
    "ABOUT ME",
    "EDUCATION",
    "EXPERIENCE",
    "WORK",
    "STUDENTS",
    "AWARDS & ACHIEVEMENTS",
    "SKILLS",
    "CONTACT",
  ]

  const workDropdownItems = ["RESEARCH INTERESTS", "PUBLICATION", "PROFESSIONAL ACTIVITIES"]

  const educationData = [
    {
      degree: "Ph.D. in Computer Science and Engineering",
      year: "2022",
      institution: "BPUT (State Govt. Technical University), Odisha, India",
      specialization: "Fractal Image Processing and Pattern Recognition",
      fellowship: "MHRD Govt. of India TEQIP-II",
      thesis: "Analysis of Fractal through their Dimensions",
      icon: Award,
      color: "bg-[#EBB884]",
      textColor: "text-[#1F1F1D]",
    },
    {
      degree: "M.Tech in Information Technology",
      year: "2012",
      institution: "OUTR (formerly CET, under BPUT), Odisha, India",
      icon: GraduationCap,
      color: "bg-[#E8BF96]",
      textColor: "text-[#1F1F1D]",
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      year: "2009",
      institution: "BPUT, Odisha, India",
      icon: Cpu,
      color: "bg-[#FCF0F0]",
      textColor: "text-[#1F1F1D]",
      border: "border-2 border-[#EBB884]",
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      year: "2005",
      institution: "SITE, under SCTE&VT, Odisha, India",
      icon: BookOpen,
      color: "bg-[#2A2A28]",
      textColor: "text-[#EBB884]",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1F1F1D] z-50 py-4">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center space-x-8">
            {navigationItems.map((item) =>
              item === "WORK" ? (
                <div key={item} className="relative group">
                  <button className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium flex items-center gap-1">
                    {item}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-[#1F1F1D] border border-[#EBB884] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {workDropdownItems.map((dropdownItem) => (
                        <button
                          key={dropdownItem}
                          className="block w-full text-left px-4 py-3 text-white hover:text-[#EBB884] hover:bg-[#2A2A28] transition-colors duration-200 text-sm"
                        >
                          {dropdownItem}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : item === "HOME" ? (
                <Link
                  key={item}
                  href="/"
                  className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </Link>
              ) : item === "ABOUT ME" ? (
                <Link
                  key={item}
                  href="/about-me"
                  className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </Link>
              ) : item === "EDUCATION" ? (
                <Link key={item} href="/education" className="text-[#EBB884] font-medium text-sm">
                  {item}
                </Link>
              ) : item === "EXPERIENCE" ? (
                <Link
                  key={item}
                  href="/experience"
                  className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </Link>
              ) : (
                <button
                  key={item}
                  className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </button>
              ),
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex justify-between items-center">
            <div className="text-white font-bold text-lg">DR. S.R. NAYAK</div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#EBB884] transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-[#1F1F1D] border-t border-[#EBB884] shadow-lg">
              <div className="py-4 px-4 space-y-2">
                {navigationItems.map((item) =>
                  item === "WORK" ? (
                    <div key={item} className="space-y-2">
                      <button className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2">
                        {item}
                      </button>
                      <div className="pl-4 space-y-1">
                        {workDropdownItems.map((dropdownItem) => (
                          <button
                            key={dropdownItem}
                            className="block w-full text-left text-gray-300 hover:text-[#EBB884] transition-colors duration-200 text-xs py-1"
                          >
                            {dropdownItem}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : item === "HOME" ? (
                    <Link
                      key={item}
                      href="/"
                      className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : item === "ABOUT ME" ? (
                    <Link
                      key={item}
                      href="/about-me"
                      className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : item === "EDUCATION" ? (
                    <Link
                      key={item}
                      href="/education"
                      className="block w-full text-left text-[#EBB884] font-medium text-sm py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : item === "EXPERIENCE" ? (
                    <Link
                      key={item}
                      href="/experience"
                      className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : (
                    <button
                      key={item}
                      className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-[#1F1F1D] grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center text-white space-y-6">
            <div className="flex justify-center mb-6">
              <div className="bg-[#EBB884] p-4 rounded-full">
                <GraduationCap className="h-12 w-12 sm:h-16 sm:w-16 text-[#1F1F1D]" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">EDUCATIONAL QUALIFICATIONS</h1>
            <p className="text-lg sm:text-xl text-[#EBB884] max-w-3xl mx-auto text-balance">
              Academic Journey of Dr. Soumya Ranjan Nayak
            </p>
            <div className="flex justify-center pt-4">
              <Button asChild className="bg-[#EBB884] text-[#1F1F1D] hover:bg-[#E8BF96] px-6 py-3">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FCF0F0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1D] text-center mb-12 sm:mb-16">
              ACADEMIC TIMELINE
            </h2>

            <div className="space-y-8 sm:space-y-12">
              {educationData.map((education, index) => (
                <Card key={index} className="hover-lift shadow-lg">
                  <CardContent className="p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                      {/* Icon and Year */}
                      <div className="flex flex-col items-center space-y-4 flex-shrink-0">
                        <div className={`${education.color} ${education.border || ""} p-4 rounded-full`}>
                          <education.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${education.textColor}`} />
                        </div>
                        <div className="text-center">
                          <div className="bg-[#EBB884] text-[#1F1F1D] px-4 py-2 rounded-full font-bold text-lg sm:text-xl">
                            {education.year}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1F1F1D] mb-3 text-balance">
                            {education.degree}
                          </h3>
                          <div className="flex items-start space-x-2 mb-2">
                            <MapPin className="h-5 w-5 text-[#EBB884] flex-shrink-0 mt-0.5" />
                            <p className="text-base sm:text-lg text-gray-700 font-medium">{education.institution}</p>
                          </div>
                        </div>

                        {/* Additional Details */}
                        {education.specialization && (
                          <div className="bg-[#E8BF96] p-4 rounded-lg">
                            <div className="flex items-start space-x-2">
                              <Star className="h-5 w-5 text-[#1F1F1D] flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-semibold text-[#1F1F1D] mb-1">Specialization:</p>
                                <p className="text-[#1F1F1D]">{education.specialization}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {education.fellowship && (
                          <div className="bg-[#1F1F1D] p-4 rounded-lg">
                            <div className="flex items-start space-x-2">
                              <Award className="h-5 w-5 text-[#EBB884] flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-semibold text-[#EBB884] mb-1">Fellowship:</p>
                                <p className="text-white">{education.fellowship}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {education.thesis && (
                          <div className="bg-white border-2 border-[#EBB884] p-4 rounded-lg">
                            <div className="flex items-start space-x-2">
                              <BookOpen className="h-5 w-5 text-[#EBB884] flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-semibold text-[#1F1F1D] mb-1">Thesis:</p>
                                <p className="text-gray-700">{education.thesis}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12">ACADEMIC HIGHLIGHTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#EBB884] p-3 rounded-full w-fit mx-auto mb-4">
                    <Award className="h-8 w-8 text-[#1F1F1D]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#EBB884] mb-2">Ph.D. Achievement</h3>
                  <p className="text-gray-300 text-sm">
                    Completed doctoral research in Fractal Image Processing with MHRD Government fellowship
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#E8BF96] p-3 rounded-full w-fit mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-[#1F1F1D]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#EBB884] mb-2">Technical Excellence</h3>
                  <p className="text-gray-300 text-sm">
                    Strong foundation in Computer Science and Information Technology from premier institutions
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#FCF0F0] border-2 border-[#EBB884] p-3 rounded-full w-fit mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-[#1F1F1D]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#EBB884] mb-2">Research Focus</h3>
                  <p className="text-gray-300 text-sm">
                    Specialized in Pattern Recognition and Fractal Analysis with extensive research contributions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-[#FCF0F0]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-600 text-sm sm:text-base">© 2025 Dr. Soumya Ranjan Nayak. All rights reserved.</p>
        </div>
      </footer>

      {/* SimpleChatbot Component */}
      <SimpleChatbot />
    </div>
  )
}
