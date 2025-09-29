import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const CareerSummary = () => {
  return (
     <section className="py-12 sm:py-16 lg:py-20 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12">CAREER HIGHLIGHTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
             
             
            </div>
          </div>
        </div>
      </section>
  )
}

export default CareerSummary