import { Card, CardContent } from '@/components/ui/card'
import { educationData } from '@/lib/constants'
import { Building, GraduationCap } from 'lucide-react'
import React from 'react'

const EducationalSummary = () => {
  return (
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
  )
}

export default EducationalSummary