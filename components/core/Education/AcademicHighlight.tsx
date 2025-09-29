import { Card, CardContent } from '@/components/ui/card'
import { Award, BookOpen, GraduationCap } from 'lucide-react'
import React from 'react'

const AcademicHighlight = () => {
  return (
       <section className="py-12 sm:py-16 lg:py-20 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12">ACADEMIC HIGHLIGHTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#EBB884] p-3 rounded-full w-fit mx-auto mb-4">
                    <Award className="h-8 w-8 text-[#1F1F1D]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#EBB884] mb-2">Ph.D. Achievement</h3>
                  <p className="text-gray-300 text-sm">
                    Completed doctoral research in Fractal Image Processing with MHRD Government fellowship
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#E8BF96] p-3 rounded-full w-fit mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-[#1F1F1D]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#EBB884] mb-2">Technical Excellence</h3>
                  <p className="text-gray-300 text-sm">
                    Strong foundation in Computer Science and Information Technology from premier institutions
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#FCF0F0] border-2 border-[#EBB884] p-3 rounded-full w-fit mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-[#1F1F1D]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#EBB884] mb-2">Research Focus</h3>
                  <p className="text-gray-300 text-sm">
                    Specialized in Pattern Recognition and Fractal Analysis with extensive research contributions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AcademicHighlight