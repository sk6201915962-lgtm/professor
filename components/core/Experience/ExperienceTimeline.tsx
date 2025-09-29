import { Card, CardContent } from '@/components/ui/card'
import { experiences } from '@/lib/constants'
import { Calendar, MapPin } from 'lucide-react'
import React from 'react'

const ExperienceTimeline = () => {
  return (
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
  )
}

export default ExperienceTimeline