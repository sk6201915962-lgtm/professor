"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
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
  Send,
  Menu,
  X,
  Microscope,
  Eye,
  Zap,
  Target,
  Layers,
} from "lucide-react"
import SimpleChatbot from "@/components/simple-chatbot"

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const [currentSection, setCurrentSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // Added mobile menu state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSendEmail = () => {
    const { name, email, message } = formData
    const subject = `Contact from ${name} - Portfolio Inquiry`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=soumyaranjan.nayakfcs@kiit.ac.in&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, "_blank")
  }

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
    {
      name: "Google Scholar",
      href: "https://scholar.google.co.in/citations?hl=en&user=8yr9XTAAAAAJ&view_op=list_works",
    },
    { name: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=57188876957" },
    { name: "ORCID", href: "https://orcid.org/0000-0002-4155-884X" },
    { name: "Web of Science", href: "https://www.webofscience.com/wos/author/record/S-5908-2018" },
    { name: "Research Gate", href: "https://www.researchgate.net/profile/Soumya-Nayak-14" },
    { name: "DBLP", href: "https://dblp.org/pid/250/8949.html" },
    { name: "Vidwan", href: "https://vidwan.inflibnet.ac.in/profile/133065" },
  ]

  const stats = [
    { icon: BookOpen, label: "BOOKS", value: "8+" },
    { icon: FileText, label: "PUBLICATIONS", value: "200+" },
    { icon: Award, label: "SCI/SCIE", value: "60+" },
    { icon: Users, label: "SCOPUS INDEX", value: "160+" },
    { icon: Brain, label: "PATENTS", value: "18+" },
  ]

  const researchAreas = [
    {
      icon: Layers,
      title: "FRACTAL GRAPHICS",
      description:
        "Fractal analysis of complex objects in nature, encompassing grayscale and color domains with box-counting techniques.",
    },
    {
      icon: Brain,
      title: "APPLIED AI",
      description:
        "Machine Learning and Deep Learning methodologies applied to biomedical image analysis and pattern recognition.",
    },
    {
      icon: Zap,
      title: "ML/DL",
      description:
        "Advanced machine learning algorithms and deep neural networks for medical imaging and computer vision applications.",
    },
    {
      icon: Microscope,
      title: "BIOMEDICAL IMAGING",
      description:
        "Application of fractal geometry in biomedical image processing with fundamental color image processing techniques.",
    },
    {
      icon: Target,
      title: "PATTERN RECOGNITION",
      description:
        "Character recognition and pattern analysis using fractal dimension as a metric for analyzing self-similar textures.",
    },
    {
      icon: Eye,
      title: "MACHINE VISION",
      description:
        "Computer Vision systems with emphasis on biomedical image analysis and automated diagnostic applications.",
    },
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
            className="mx-auto mb-4 w-64 h-auto sm:w-80" // Made logo responsive
          />
        </div>
      </div>
    )
  }

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
              ) : item === "ABOUT ME" ? (
                <Link
                  key={item}
                  href="/about-me"
                  className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
                >
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
                  onClick={() => setCurrentSection(item.toLowerCase().replace(/\s+/g, "-"))}
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
                      <button
                        className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                        onClick={() => {
                          setCurrentSection(item.toLowerCase().replace(/\s+/g, "-"))
                          setMobileMenuOpen(false)
                        }}
                      >
                        {item}
                      </button>
                      <div className="pl-4 space-y-1">
                        {workDropdownItems.map((dropdownItem) => (
                          <button
                            key={dropdownItem}
                            className="block w-full text-left text-gray-300 hover:text-[#EBB884] transition-colors duration-200 text-xs py-1"
                            onClick={() => {
                              setCurrentSection(dropdownItem.toLowerCase().replace(/\s+/g, "-"))
                              setMobileMenuOpen(false)
                            }}
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
                      className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : (
                    <button
                      key={item}
                      className="block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2"
                      onClick={() => {
                        setCurrentSection(item.toLowerCase().replace(/\s+/g, "-"))
                        setMobileMenuOpen(false)
                      }}
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
      <section className="min-h-screen bg-[#1F1F1D] grid-bg pt-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Professor Photo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-1">
              <div className="relative">
                <div className="photo-glow w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden">
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
            <div className="text-white space-y-6 fade-in text-center lg:text-left order-2 lg:order-2">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 text-balance">
                  DR. SOUMYA RANJAN NAYAK
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-[#EBB884] mb-4">ASSOCIATE PROFESSOR</h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                  SCHOOL OF COMPUTER ENGINEERING
                  <br />
                  KIIT DEEMED TO BE UNIVERSITY
                  <br />
                  BHUBANESWAR, ODISHA, INDIA
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  className="bg-[#EBB884] text-[#1F1F1D] hover:bg-[#E8BF96] px-6 sm:px-8 py-3 hover-lift text-sm sm:text-base"
                  size="lg"
                >
                  VIEW MY WORKS
                </Button>
                <Button
                  variant="outline"
                  className="border-[#EBB884] text-[#EBB884] hover:bg-[#EBB884] hover:text-[#1F1F1D] px-6 sm:px-8 py-3 hover-lift bg-transparent text-sm sm:text-base"
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
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Badge
                      variant="secondary"
                      className="bg-[#E8BF96] text-[#1F1F1D] hover:bg-[#EBB884] cursor-pointer px-3 sm:px-4 py-2 float text-xs sm:text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FCF0F0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-lift pulse-stat">
                <CardContent className="p-4 sm:p-6">
                  <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mx-auto mb-3 sm:mb-4 text-[#EBB884]" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1F1F1D] mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-10 lg:mb-12">
            RESEARCH EXPERTISE
          </h2>

          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <Card className="bg-[#2A2A28] border-[#EBB884]">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#EBB884] mb-6 text-center">Research Interests</h3>
                <div className="prose prose-sm sm:prose-base text-gray-300 leading-relaxed">
                  <p className="mb-4 text-sm sm:text-base">
                    The primary focus of my study lies in the fractal analysis of complex objects seen in nature,
                    encompassing both grayscale and color domains. Additionally, I am intrigued by the fields of pattern
                    recognition, character recognition, and the fundamentals of color image processing.
                  </p>
                  <p className="mb-4 text-sm sm:text-base">
                    Regarding the recent study on fractal analysis, I have conducted many variations of box-counting,
                    differential box-counting, and triangle box-counting techniques on diverse sets of natural images.
                    My research primarily centers on the application of fractal geometry in biomedical image processing,
                    specifically in conjunction with fundamental color image processing techniques.
                  </p>
                  <p className="text-sm sm:text-base">
                    The objective is to assess the potential utility of fractal dimension (FD) as a metric for analyzing
                    color images with self-similarity, particularly in the context of textures. The present area of
                    research concentration encompasses Computer Vision, Pattern Recognition, with a primary emphasis on
                    Biomedical Image Analysis utilizing the principles of Machine Learning and Deep Learning
                    methodologies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="bg-[#2A2A28] border-[#EBB884] hover-lift">
                <CardContent className="p-4 sm:p-6 text-center">
                  <area.icon className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-4 text-[#EBB884]" />
                  <div className="text-[#EBB884] font-bold text-sm sm:text-base lg:text-lg mb-3">{area.title}</div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FCF0F0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1D] text-center mb-8 sm:mb-10 lg:mb-12">
              PROFILE SUMMARY
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
                Associate Professor in Computer Science and Engineering with 13+ years of teaching and research
                experience in Biomedical Image Processing, Fractals, Machine Learning, and Deep Learning.
              </p>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                Authored 160+ peer-reviewed publications with over 2,600+ citations and an h-index of 26 (Scopus).
                Recipient of prestigious MHRD Government of India fellowships (TEQIP-II). Inventor of 15+ patents
                (8-Granted), both national and international.
              </p>
              <p className="text-sm sm:text-base">
                Recognized among the World's Top 2% Scientists (Elsevier–Stanford University global ranking). Recipient
                of the Best Teacher Award at the Odisha Technological Conclave 2024. Experienced in PhD and postgraduate
                supervision with a strong track record of international research collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1D] text-center mb-8 sm:mb-10 lg:mb-12">
            EDUCATION
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <Card className="hover-lift">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="bg-[#EBB884] p-3 rounded-full flex-shrink-0">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-[#1F1F1D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1F1F1D] mb-2">
                      Ph.D. in Computer Science and Engineering
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">
                      BPUT (State Govt. Technical University) under MHRD Govt. of India fellowship-TEQIP-II
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      2022 • Specialization in Fractal (Image Processing)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="bg-[#E8BF96] p-3 rounded-full flex-shrink-0">
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-[#1F1F1D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1F1F1D] mb-2">
                      M.Tech in Information Technology
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">
                      OUTR (formerly CET, State Govt. Technical College under BPUT)
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">2012 • Odisha, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="bg-[#FCF0F0] p-3 rounded-full border-2 border-[#EBB884] flex-shrink-0">
                    <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-[#1F1F1D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#1F1F1D] mb-2">
                      B.Tech in Computer Science and Engineering
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">BPUT, Odisha, India</p>
                    <p className="text-xs sm:text-sm text-gray-500">2009</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-10 lg:mb-12">
            CONTACT
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Information */}
            <Card className="bg-[#2A2A28] border-[#EBB884]">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#EBB884] mb-6">Get In Touch</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#EBB884] flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm sm:text-base">soumyaranjan.nayakfcs@kiit.ac.in</p>
                      <p className="text-gray-400 text-sm">nayak.soumya17@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#EBB884] flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm sm:text-base">+91-8328911292</p>
                      <p className="text-gray-400 text-sm">+91-9437541849</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#EBB884] flex-shrink-0" />
                    <p className="text-white text-sm sm:text-base">KIIT University, Bhubaneswar, Odisha, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2A2A28] border-[#EBB884]">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#EBB884] mb-6">Send Message</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block text-sm sm:text-base">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-[#1F1F1D] border-[#EBB884] text-white placeholder:text-gray-400 focus:border-[#E8BF96] text-sm sm:text-base"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block text-sm sm:text-base">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-[#1F1F1D] border-[#EBB884] text-white placeholder:text-gray-400 focus:border-[#E8BF96] text-sm sm:text-base"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block text-sm sm:text-base">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-[#1F1F1D] border-[#EBB884] text-white placeholder:text-gray-400 focus:border-[#E8BF96] min-h-[120px] text-sm sm:text-base"
                      placeholder="Your message here..."
                      required
                    />
                  </div>
                  <Button
                    onClick={handleSendEmail}
                    className="w-full bg-[#EBB884] text-[#1F1F1D] hover:bg-[#E8BF96] font-semibold py-3 hover-lift text-sm sm:text-base"
                    disabled={!formData.name || !formData.email || !formData.message}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message via Gmail
                  </Button>
                </div>
              </CardContent>
            </Card>
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
