"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  Brain,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X,
  ArrowLeft,
  Microscope,
  Eye,
  Target,
  Layers,
  GraduationCap,
  Building,
  Calendar,
} from "lucide-react"
import SimpleChatbot from "@/components/simple-chatbot"

export default function AboutMePage() {
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

  const socialLinks = [
    { name: "Google Scholar", href: "#" },
    { name: "Scopus", href: "#" },
    { name: "ORCID", href: "#" },
    { name: "Web of Science", href: "#" },
    { name: "Research Gate", href: "#" },
    { name: "DBLP", href: "#" },
    { name: "Vidwan", href: "#" },
  ]

  const educationData = [
    {
      degree: "Ph.D-(CSE/IT)",
      description: "Doctor of Philosophy in Computer Science and Engineering",
      institution: "BPUT (State Govt. Technical University)",
      details: "Under MHRD Govt. of India fellowship-TEQIP-II, Specialization in Fractal (Image Processing)",
      year: "2022",
    },
    {
      degree: "M. Tech-(CSE/IT)",
      description: "Master of Technology in Information Technology",
      institution: "OUTR (formerly CET, State Govt. Technical College under BPUT)",
      details: "Odisha, India",
      year: "2012",
    },
    {
      degree: "B.Tech-(CSE)",
      description: "Bachelor of Technology in Computer Science and Engineering",
      institution: "BPUT, Odisha, India",
      details: "",
      year: "2009",
    },
    {
      degree: "Diploma-(CSE)",
      description: "Diploma in Computer Science and Engineering",
      institution: "SITE under SCTE&VT, Odisha, India",
      details: "",
      year: "2005",
    },
  ]

  const researchInterests = [
    { name: "Image Processing", icon: Microscope },
    { name: "Pattern Recognition", icon: Target },
    { name: "Computer Vision/Machine Vision", icon: Eye },
    { name: "Fractal Graphics", icon: Layers },
    { name: "Biomedical Imaging", icon: Brain },
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
              ) : (
                <Link
                  key={item}
                  href={item === "HOME" ? "/" : item === "ABOUT ME" ? "/about-me" : "#"}
                  className={`text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium ${
                    item === "ABOUT ME" ? "text-[#EBB884]" : ""
                  }`}
                >
                  {item}
                </Link>
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
                  ) : (
                    <Link
                      key={item}
                      href={item === "HOME" ? "/" : item === "ABOUT ME" ? "/about-me" : "#"}
                      className={`block w-full text-left text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium py-2 ${
                        item === "ABOUT ME" ? "text-[#EBB884]" : ""
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Back to Home Button */}
      <div className="fixed top-20 left-4 z-40">
        <Link href="/">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#EBB884] text-[#1F1F1D] border-[#EBB884] hover:bg-[#E8BF96] hover:border-[#E8BF96]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#1F1F1D] grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              About Dr. Soumya Ranjan Nayak
            </h1>
            <p className="text-lg sm:text-xl text-[#EBB884] mb-8">Associate Professor & Research Scholar</p>

            {/* Professor Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="photo-glow w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soumya-Ranjan-Nayak-removebg-preview-lgjioeHxR3ikceX1mnHlnK66d0IxG6.png"
                    alt="Dr. Soumya Ranjan Nayak"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {socialLinks.map((link) => (
                <Badge
                  key={link.name}
                  variant="secondary"
                  className="bg-[#E8BF96] text-[#1F1F1D] hover:bg-[#EBB884] cursor-pointer px-3 sm:px-4 py-2 float text-xs sm:text-sm"
                >
                  {link.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 bg-[#FCF0F0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1D] text-center mb-12">
              Professional Summary
            </h2>
            <Card className="hover-lift">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-base sm:text-lg mb-6">
                    Dr. Soumya Ranjan Nayak now holds the position of Sr. Assistant Professor in the School of Computer
                    Engineering at Kalinga Institute of Industrial Technology (KIIT) Deemed to be University, located in
                    Odisha, India. He obtained a Doctor of Philosophy (Ph.D) and Master of Technology (M.Tech) in
                    Computer Science and Engineering under a scholarship provided by the Ministry of Human Resource
                    Development (MHRD) of the Government of India.
                  </p>

                  <p className="mb-6">
                    He has authored over 200 articles that have been published in reputable international journals and
                    conferences such as Elsevier, Springer, World Scientific, IOS Press, Taylor & Francis, Hindawi,
                    Inderscience, IGI Global, and others. These publications have undergone a rigorous peer-review
                    process.
                  </p>

                  <p className="mb-6">
                    In addition to the aforementioned accomplishments, the individual has authored more than 30 book
                    chapters, published 8 books, and obtained 7 Indian patents (with 4 patents being granted).
                    Furthermore, they have secured 4 International patents, all of which have been granted.
                  </p>

                  <p className="mb-6">
                    The researcher's current areas of focus encompass biomedical image analysis and classification,
                    machine learning, deep learning, pattern recognition, fractal graphics, and computer vision. The
                    author's publication have garnered over 3700+ citations, with an h-index of 33 and an i10-index of
                    85, as reported by Google Scholar. Similarly, the author has achieved, 2700+ citations from total
                    164 publication with h-index of 26 as per the scopus database.
                  </p>

                  <p>
                    Dr. Nayak holds the position of an associate editor for several esteemed academic journals,
                    including the Journal of Electronic Imaging (SPIE), Mathematical Problems in Engineering (Hindawi),
                    Journal of Biomedical Imaging (Hindawi), Applied Computational Intelligence and Soft Computing
                    (Hindawi), and PLOS One.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Qualifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1D] text-center mb-12">
            Educational Qualifications
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {educationData.map((edu, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="bg-[#EBB884] p-3 rounded-full flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-[#1F1F1D]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-[#1F1F1D]">{edu.degree}</h3>
                        <span className="text-sm text-[#EBB884] font-semibold">{edu.year}</span>
                      </div>
                      <h4 className="text-lg text-gray-700 mb-2">{edu.description}</h4>
                      <p className="text-gray-600 mb-2 flex items-center">
                        <Building className="h-4 w-4 mr-2 text-[#EBB884]" />
                        {edu.institution}
                      </p>
                      {edu.details && <p className="text-sm text-gray-500">{edu.details}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Research Interests
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {researchInterests.map((interest, index) => (
                <Card key={index} className="bg-[#2A2A28] border-[#EBB884] hover-lift">
                  <CardContent className="p-6 text-center">
                    <interest.icon className="h-10 w-10 mx-auto mb-4 text-[#EBB884]" />
                    <h3 className="text-[#EBB884] font-bold text-lg">{interest.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-[#2A2A28] border-[#EBB884]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#EBB884] mb-6 text-center">Current Research Focus</h3>
                <div className="prose prose-sm sm:prose-base text-gray-300 leading-relaxed">
                  <p className="mb-4">
                    The primary focus of my study lies in the fractal analysis of complex objects seen in nature,
                    encompassing both grayscale and color domains. Additionally, I am intrigued by the fields of pattern
                    recognition, character recognition, and the fundamentals of color image processing.
                  </p>
                  <p className="mb-4">
                    Regarding the recent study on fractal analysis, I have conducted many variations of box-counting,
                    differential box-counting, and triangle box-counting techniques on diverse sets of natural images.
                    My research primarily centers on the application of fractal geometry in biomedical image processing,
                    specifically in conjunction with fundamental color image processing techniques.
                  </p>
                  <p>
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
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-[#FCF0F0]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1D] text-center mb-12">
            Contact Information
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-[#EBB884] flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">soumyaranjan.nayakfcs@kiit.ac.in</p>
                      <p className="text-gray-600 text-sm">nayak.soumya17@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-[#EBB884] flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">+91-8328911292</p>
                      <p className="text-gray-600 text-sm">+91-9437541849</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-[#EBB884] flex-shrink-0" />
                    <p className="text-gray-800">
                      School of Computer Engineering
                      <br />
                      KIIT Deemed to be University
                      <br />
                      Bhubaneswar, Odisha, India
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-6 w-6 text-[#EBB884] flex-shrink-0" />
                    <p className="text-gray-800">DOB: 13-Feb-1984</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button
                    className="w-full bg-[#EBB884] text-[#1F1F1D] hover:bg-[#E8BF96] font-semibold py-3 hover-lift"
                    asChild
                  >
                    <Link href="https://cse.kiit.ac.in/profiles/soumya-ranjan-nayak/" target="_blank">
                      View Full Profile on KIIT Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400">© 2025 Dr. Soumya Ranjan Nayak. All rights reserved.</p>
        </div>
      </footer>

      {/* SimpleChatbot Component */}
      <SimpleChatbot />
    </div>
  )
}
