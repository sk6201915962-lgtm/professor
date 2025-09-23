"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  FileText,
  Award,
  Users,
  Brain,
  Cpu,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react"
import SimpleChatbot from "@/components/simple-chatbot"

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

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

  const socialLinks = [
    { name: "Google Scholar", href: "#" },
    { name: "Scopus", href: "#" },
    { name: "ORCID", href: "#" },
    { name: "Web of Science", href: "#" },
    { name: "Research Gate", href: "#" },
    { name: "DBLP", href: "#" },
    { name: "Vidwan", href: "#" },
  ]

  const stats = [
    { icon: BookOpen, label: "BOOKS", value: "8+" },
    { icon: FileText, label: "PUBLICATIONS", value: "200+" },
    { icon: Award, label: "SCI/SCIE", value: "60+" },
    { icon: Users, label: "SCOPUS INDEX", value: "160+" },
    { icon: Brain, label: "PATENTS", value: "18+" },
  ]

  const skills = [
    "FRACTAL GRAPHICS",
    "APPLIED AI",
    "ML/DL",
    "BIOMEDICAL IMAGING",
    "PATTERN RECOGNITION",
    "MACHINE VISION",
  ]

  if (showIntro) {
    return (
      <div className="min-h-screen bg-[#FAF8F3] flex items-center justify-center">
        <div className="text-center logo-intro">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beige%20and%20Brown%20Simple%20Initial%20Wedding%20Logo-pFGzSk2LqebJKJNDU7Vgs2Bth4nHoG.png"
            alt="Dr. Soumya Ranjan Nayak Logo"
            width={300}
            height={200}
            className="mx-auto mb-4"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1F1F1D] z-50 py-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8">
            {navigationItems.map((item) =>
              item === "WORK" ? (
                <div key={item} className="relative group">
                  <button
                    className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium flex items-center gap-1"
                    onClick={() => setCurrentSection(item.toLowerCase().replace(/\s+/g, "-"))}
                  >
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
                          onClick={() => setCurrentSection(dropdownItem.toLowerCase().replace(/\s+/g, "-"))}
                        >
                          {dropdownItem}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={item}
                  className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
                  onClick={() => setCurrentSection(item.toLowerCase().replace(/\s+/g, "-"))}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-[#1F1F1D] grid-bg pt-20 flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Professor Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="photo-glow w-80 h-80 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soumya-Ranjan-Nayak-removebg-preview-lgjioeHxR3ikceX1mnHlnK66d0IxG6.png"
                    alt="Dr. Soumya Ranjan Nayak"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Professor Info */}
            <div className="text-white space-y-6 fade-in">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-balance">DR. SOUMYA RANJAN NAYAK</h1>
                <h2 className="text-xl lg:text-2xl text-[#EBB884] mb-4">ASSOCIATE PROFESSOR</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  SCHOOL OF COMPUTER ENGINEERING
                  <br />
                  KIIT DEEMED TO BE UNIVERSITY
                  <br />
                  BHUBANESWAR, ODISHA, INDIA
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#EBB884] text-[#1F1F1D] hover:bg-[#E8BF96] px-8 py-3 hover-lift" size="lg">
                  VIEW MY WORKS
                </Button>
                <Button
                  variant="outline"
                  className="border-[#EBB884] text-[#EBB884] hover:bg-[#EBB884] hover:text-[#1F1F1D] px-8 py-3 hover-lift bg-transparent"
                  size="lg"
                  asChild
                >
                  <Link href="https://cse.kiit.ac.in/profiles/soumya-ranjan-nayak/" target="_blank">
                    VIEW ON KIIT WEBSITE
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <Badge
                    key={link.name}
                    variant="secondary"
                    className="bg-[#E8BF96] text-[#1F1F1D] hover:bg-[#EBB884] cursor-pointer px-4 py-2 float"
                  >
                    {link.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#FCF0F0]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-lift pulse-stat">
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-[#EBB884]" />
                  <div className="text-3xl font-bold text-[#1F1F1D] mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-[#1F1F1D]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">RESEARCH EXPERTISE</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-[#2A2A28] border-[#EBB884] hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-[#EBB884] font-bold text-lg">{skill}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#FCF0F0]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1F1F1D] text-center mb-12">PROFILE SUMMARY</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Associate Professor in Computer Science and Engineering with 13+ years of teaching and research
                experience in Biomedical Image Processing, Fractals, Machine Learning, and Deep Learning.
              </p>
              <p className="mb-6">
                Authored 160+ peer-reviewed publications with over 2,600+ citations and an h-index of 26 (Scopus).
                Recipient of prestigious MHRD Government of India fellowships (TEQIP-II). Inventor of 15+ patents
                (8-Granted), both national and international.
              </p>
              <p>
                Recognized among the World's Top 2% Scientists (Elsevier–Stanford University global ranking). Recipient
                of the Best Teacher Award at the Odisha Technological Conclave 2024. Experienced in PhD and postgraduate
                supervision with a strong track record of international research collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1F1F1D] text-center mb-12">EDUCATION</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#EBB884] p-3 rounded-full">
                    <Award className="h-6 w-6 text-[#1F1F1D]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F1F1D] mb-2">Ph.D. in Computer Science and Engineering</h3>
                    <p className="text-gray-600 mb-2">
                      BPUT (State Govt. Technical University) under MHRD Govt. of India fellowship-TEQIP-II
                    </p>
                    <p className="text-sm text-gray-500">2022 • Specialization in Fractal (Image Processing)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#E8BF96] p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-[#1F1F1D]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F1F1D] mb-2">M.Tech in Information Technology</h3>
                    <p className="text-gray-600 mb-2">OUTR (formerly CET, State Govt. Technical College under BPUT)</p>
                    <p className="text-sm text-gray-500">2012 • Odisha, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FCF0F0] p-3 rounded-full border-2 border-[#EBB884]">
                    <Cpu className="h-6 w-6 text-[#1F1F1D]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F1F1D] mb-2">
                      B.Tech in Computer Science and Engineering
                    </h3>
                    <p className="text-gray-600 mb-2">BPUT, Odisha, India</p>
                    <p className="text-sm text-gray-500">2009</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#1F1F1D]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">CONTACT</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-[#2A2A28] border-[#EBB884]">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-[#EBB884]" />
                    <div>
                      <p className="text-white">soumyaranjan.nayakfcs@kiit.ac.in</p>
                      <p className="text-gray-400">nayak.soumya17@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-[#EBB884]" />
                    <div>
                      <p className="text-white">+91-8328911292</p>
                      <p className="text-gray-400">+91-9437541849</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-[#EBB884]" />
                    <p className="text-white">KIIT University, Bhubaneswar, Odisha, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#FCF0F0]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">© 2025 Dr. Soumya Ranjan Nayak. All rights reserved.</p>
        </div>
      </footer>

      {/* SimpleChatbot Component */}
      <SimpleChatbot />
    </div>
  )
}
