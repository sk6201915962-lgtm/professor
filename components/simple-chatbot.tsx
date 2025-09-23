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
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-[#EBB884] hover:bg-[#E8BF96] text-[#1F1F1D] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-h-96 overflow-hidden">
          <Card className="shadow-2xl border-2 border-[#EBB884]">
            <CardHeader className="bg-[#EBB884] text-[#1F1F1D] p-4">
              <CardTitle className="text-lg font-bold">Dr. Nayak's Assistant</CardTitle>
              <p className="text-sm opacity-90">How can I help you today?</p>
            </CardHeader>
            <CardContent className="p-4 bg-white">
              {!activeSection ? (
                <div className="space-y-3">
                  <Button
                    onClick={() => setActiveSection("contact")}
                    className="w-full bg-[#1F1F1D] hover:bg-[#2A2A28] text-white justify-start"
                    variant="default"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                  <Button
                    onClick={() => setActiveSection("research")}
                    className="w-full bg-[#1F1F1D] hover:bg-[#2A2A28] text-white justify-start"
                    variant="default"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Research Details
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Button
                    onClick={() => setActiveSection(null)}
                    className="text-[#EBB884] hover:text-[#E8BF96] p-0 h-auto font-normal"
                    variant="ghost"
                  >
                    ← Back to menu
                  </Button>

                  {activeSection === "contact" && (
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <Mail className="h-4 w-4 text-[#EBB884] mt-0.5 flex-shrink-0" />
                        <div>
                          {contactInfo.emails.map((email, index) => (
                            <p key={index} className="text-gray-700">
                              {email}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Phone className="h-4 w-4 text-[#EBB884] mt-0.5 flex-shrink-0" />
                        <div>
                          {contactInfo.phones.map((phone, index) => (
                            <p key={index} className="text-gray-700">
                              {phone}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-[#EBB884] mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{contactInfo.address}</p>
                      </div>
                    </div>
                  )}

                  {activeSection === "research" && (
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <BookOpen className="h-4 w-4 text-[#EBB884] mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{researchDetails.publications}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Award className="h-4 w-4 text-[#EBB884] mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{researchDetails.citations}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Users className="h-4 w-4 text-[#EBB884] mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700">{researchDetails.patents}</p>
                      </div>
                      <div className="mt-3">
                        <p className="font-medium text-[#1F1F1D] mb-2">Research Expertise:</p>
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
