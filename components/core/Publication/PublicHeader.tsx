import { Card, CardContent } from '@/components/ui/card'
import { Award, BookOpen, Brain, FileText } from 'lucide-react'
import React from 'react'

const PublicHeader = () => {
  return (
      <section className="pt-24 pb-12 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">PUBLICATIONS</h1>
            <p className="text-lg sm:text-xl text-[#EBB884] mb-8">Research Contributions & Academic Works</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-4 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-2 text-[#EBB884]" />
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm text-gray-300">Publications</div>
                </CardContent>
              </Card>
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-[#EBB884]" />
                  <div className="text-2xl font-bold text-white">60+ SCI/SCIE</div>
                  <div className="text-sm text-gray-300">Journal Papers</div>
                </CardContent>
              </Card>
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-[#EBB884]" />
                  <div className="text-2xl font-bold text-white">8+</div>
                  <div className="text-sm text-gray-300">Books</div>
                </CardContent>
              </Card>
              <Card className="bg-[#2A2A28] border-[#EBB884]">
                <CardContent className="p-4 text-center">
                  <Brain className="h-8 w-8 mx-auto mb-2 text-[#EBB884]" />
                  <div className="text-2xl font-bold text-white">14+</div>
                  <div className="text-sm text-gray-300">Patents</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  )
}

export default PublicHeader