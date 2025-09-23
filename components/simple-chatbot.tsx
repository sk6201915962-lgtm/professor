"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Mail, Phone, MapPin, BookOpen, Award, Users } from "lucide-react"

export default function SimpleChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const contactInfo = {
    emails: ["soumyaranjan.nayakfcs@kiit.ac.in", "nayak.soumya17@gmail.com"],
    phones: ["+91-8328911292", "+91-9437541849"],
    address: "KIIT University, Bhubaneswar, Odisha, India",
  }

  const researchDetails = {
    publications: "160+ peer-reviewed publications",
    citations: "2,600+ citations with h-index of 26",
    patents: "15+ patents (8 granted)",
    expertise: [
      "Biomedical Image Processing",
      "Fractals",
      "Machine Learning",
      "Deep Learning",
      "Pattern Recognition",
      "Machine Vision",
    ],
  }

  return (
    <>
      {/* Chat Icon */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#EBB884] hover:bg-[#E8BF96] text-[#1F1F1D] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="lg"
        >
          {isOpen ? <X className="h-4 w-4 sm:h-6 sm:w-6" /> : <MessageCircle className="h-4 w-4 sm:h-6 sm:w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        /* Made chat window responsive with mobile-first design */
        <div className="fixed bottom-16 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-80 sm:w-80 max-h-[70vh] sm:max-h-96 overflow-hidden">
          <Card className="shadow-2xl border-2 border-[#EBB884]">
            <CardHeader className="bg-[#EBB884] text-[#1F1F1D] p-3 sm:p-4">
              <CardTitle className="text-base sm:text-lg font-bold">Dr. Nayak's Assistant</CardTitle>
              <p className="text-xs sm:text-sm opacity-90">How can I help you today?</p>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 bg-white max-h-[50vh] sm:max-h-none overflow-y-auto">
              {!activeSection ? (
                <div className="space-y-2 sm:space-y-3">
                  <Button
                    onClick={() => setActiveSection("contact")}
                    className="w-full bg-[#1F1F1D] hover:bg-[#2A2A28] text-white justify-start text-sm sm:text-base py-2 sm:py-3 min-h-[44px]"
                    variant="default"
                  >
                    <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                    Contact Us
                  </Button>
                  <Button
                    onClick={() => setActiveSection("research")}
                    className="w-full bg-[#1F1F1D] hover:bg-[#2A2A28] text-white justify-start text-sm sm:text-base py-2 sm:py-3 min-h-[44px]"
                    variant="default"
                  >
                    <BookOpen className="h-4 w-4 mr-2 flex-shrink-0" />
                    Research Details
                  </Button>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  <Button
                    onClick={() => setActiveSection(null)}
                    className="text-[#EBB884] hover:text-[#E8BF96] p-0 h-auto font-normal text-sm sm:text-base min-h-[44px] flex items-center"
                    variant="ghost"
                  >
                    ← Back to menu
                  </Button>

                  {activeSection === "contact" && (
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="flex items-start space-x-2">
                        <Mail className="h-4 w-4 text-[#EBB884] mt-0.5 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          {contactInfo.emails.map((email, index) => (
                            <p key={index} className="text-gray-700 break-all">
                              {email}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Phone className="h-4 w-4 text-[#EBB884] mt-0.5 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          {contactInfo.phones.map((phone, index) => (
                            <p key={index} className="text-gray-700">
                              {phone}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-[#EBB884] mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 min-w-0 flex-1">{contactInfo.address}</p>
                      </div>
                    </div>
                  )}

                  {activeSection === "research" && (
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="flex items-start space-x-2">
                        <BookOpen className="h-4 w-4 text-[#EBB884] mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 min-w-0 flex-1">{researchDetails.publications}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Award className="h-4 w-4 text-[#EBB884] mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 min-w-0 flex-1">{researchDetails.citations}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Users className="h-4 w-4 text-[#EBB884] mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 min-w-0 flex-1">{researchDetails.patents}</p>
                      </div>
                      <div className="mt-3">
                        <p className="font-medium text-[#1F1F1D] mb-2 text-sm">Research Expertise:</p>
                        <div className="space-y-1">
                          {researchDetails.expertise.map((area, index) => (
                            <p key={index} className="text-gray-600 text-xs">
                              • {area}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
