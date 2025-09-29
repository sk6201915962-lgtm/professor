import { Card, CardContent } from '@/components/ui/card'
import { Award, BookOpen, Cpu } from 'lucide-react'
import React from 'react'

const EducationSection = () => {
  return (
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
  )
}

export default EducationSection