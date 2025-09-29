import { Card, CardContent } from '@/components/ui/card'
import { EducationPageeducationData } from '@/lib/constants'
import { Award, BookOpen, MapPin, Star } from 'lucide-react'
import React from 'react'

const EducationTimeline = () => {
  return (
     <section className="py-12 sm:py-16 lg:py-20 bg-[#FCF0F0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1D] text-center mb-12 sm:mb-16">
              ACADEMIC TIMELINE
            </h2>

            <div className="space-y-8 sm:space-y-12">
              {EducationPageeducationData.map((education, index) => (
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
  )
}

export default EducationTimeline