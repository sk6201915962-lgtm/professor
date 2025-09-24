"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Building,
  Calendar,
  MapPin,
  ArrowLeft,
} from "lucide-react"
import SimpleChatbot from "@/components/simple-chatbot"

export default function ExperiencePage() {
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

  const experiences = [
    {
      icon: GraduationCap,
      title: "Assistant Professor",
      organization: "School of Computer Engineering, KIIT University",
      location: "Bhubaneswar, India",
      duration: "Nov 2022 – Present",
      responsibilities: [
        "Teaching undergraduate and postgraduate courses in Computer Science & AI",
        "Published 50+ research articles, 4 patents, 2 books, and 1 copyright",
        "Guiding Ph.D. and M.Tech research scholars",
        "Actively engaged in funded research and patents",
        "Contributed to departmental curriculum design and academic growth",
      ],
    },
    {
      icon: Building,
      title: "Assistant Professor",
      organization: "Amity School of Engineering and Technology, Amity University",
      location: "Noida, India",
      duration: "Feb 2020 – Nov 2022 (2.10 yrs)",
      responsibilities: [
        "Teaching undergraduate and postgraduate courses in Computer Science & Engineering",
        "Supervised M.Tech students in AI/ML",
        "Worked on research publications in collaboration with international universities and scholars",
        "Engaged in cross-border academic collaborations leading to peer-reviewed journal papers",
        "Contributed to the design and enhancement of departmental curriculum, ensuring alignment with industry and research trends",
      ],
    },
    {
      icon: Users,
      title: "Assistant Professor",
      organization: "Chitkara University of Research and Innovation Network (CURIN), Chitkara University",
      location: "Punjab, India",
      duration: "Apr 2019 – Jan 2020 (10 months)",
      responsibilities: [
        "Delivered lectures in Data Science and Computer Vision",
        "Engaged in collaborative academic research, resulting in multiple peer-reviewed publications",
        "Played a key role in curriculum development and academic quality improvement initiatives",
        "Contributed to externally funded research initiatives and secured intellectual property (patents)",
      ],
    },
    {
      icon: BookOpen,
      title: "Assistant Professor",
      organization: "Department of Computer Science and Engineering, K L University",
      location: "Andhra Pradesh, India",
      duration: "Jul 2017 – Apr 2019 (1.10 yrs)",
      responsibilities: [
        "Delivered lectures and tutorials for UG and PG programs, focusing on AI, ML, and Data Science",
        "Actively involved in curriculum design, program structuring, and fostering academic growth of the department",
        "Guided student projects in AI & Machine Learning",
        "Actively contributed to joint research publications in reputed journals and conferences",
        "Participated in academic committees",
      ],
    },
    {
      icon: Award,
      title: "Research Scholar",
      organization: "Department of Information Technology, College of Engineering and Technology",
      location: "India",
      duration: "Dec 2013 – Mar 2017 (3.04 yrs)",
      responsibilities: [
        "Conducted Ph.D. research in Computer Vision & AI",
        "Published in reputed international journals",
      ],
    },
    {
      icon: GraduationCap,
      title: "Sr. Lecturer",
      organization: "Department of Computer Science and Engineering, Vivekananda Institute of Technology",
      location: "Odisha, India",
      duration: "Aug 2012 – Dec 2013 (1.05 yrs)",
      responsibilities: ["Taught undergraduate courses in programming & software engineering"],
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
                  {/* Dropdown Menu */}
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
              ) : item === "ABOUT ME" ? (
                <Link
                  key={item}
                  href="/about-me"
                  className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </Link>
              ) : item === "EXPERIENCE" ? (
                <Link key={item} href="/experience" className="text-[#EBB884] font-medium text-sm">
                  {item}
                </Link>
              ) : item === "HOME" ? (
                <Link
                  key={item}
                  href="/"
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
                  ) : item === "ABOUT ME" ? (
                    <Link
                      key={item}
                      href="/about-me"
                      className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : item === "EXPERIENCE" ? (
                    <Link
                      key={item}
                      href="/experience"
                      className="block w-full text-left text-[#EBB884] font-medium text-sm py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : item === "HOME" ? (
                    <Link
                      key={item}
                      href="/"
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

      {/* Header Section */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-[#EBB884] hover:text-[#E8BF96] transition-colors duration-300 mb-6 text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              PROFESSIONAL EXPERIENCE
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my academic and research journey spanning over a decade in higher education
              and research institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FCF0F0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 sm:space-y-12">
              {experiences.map((experience, index) => (
                <Card key={index} className="hover-lift transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      {/* Icon */}
                      <div className="bg-[#EBB884] p-4 rounded-full flex-shrink-0">
                        <experience.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#1F1F1D]" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#1F1F1D] mb-2">{experience.title}</h3>
                          <h4 className="text-lg sm:text-xl text-[#EBB884] font-semibold mb-2">
                            {experience.organization}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm sm:text-base text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-[#EBB884]" />
                              {experience.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-[#EBB884]" />
                              {experience.duration}
                            </div>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h5 className="text-lg font-semibold text-[#1F1F1D] mb-3">Key Responsibilities:</h5>
                          <ul className="space-y-2">
                            {experience.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-[#EBB884] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                  {responsibility}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Summary */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12">CAREER HIGHLIGHTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#EBB884] mb-2">13+</div>
                  <div className="text-sm sm:text-base text-gray-300">Years of Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#EBB884] mb-2">6</div>
                  <div className="text-sm sm:text-base text-gray-300">Academic Institutions</div>
                </CardContent>
              </Card>
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#EBB884] mb-2">200+</div>
                  <div className="text-sm sm:text-base text-gray-300">Research Publications</div>
                </CardContent>
              </Card>
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#EBB884] mb-2">18+</div>
                  <div className="text-sm sm:text-base text-gray-300">Patents Filed</div>
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
