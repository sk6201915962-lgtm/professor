import { Card, CardContent } from '@/components/ui/card'
import { researchAreas } from '@/lib/constants'
import React from 'react'

const SkillSection = () => {
  return (
    <section id='research-expertise' className="py-12 sm:py-16 lg:py-20 bg-[#1F1F1D]">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-10 lg:mb-12">
          RESEARCH EXPERTISE
        </h2>

        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <Card className="bg-[#2A2A28] border-[#EBB884]">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#EBB884] mb-6 text-center">Research Interests</h3>
              <ul className="custom-list">
                <li>Fractal Analysis of Natural Images (Grayscale &amp; Color)</li>
                <li>Biomedical Image Processing using Fractal Geometry</li>
                <li>Texture Analysis with Fractal Dimension (FD)</li>
                <li>Pattern &amp; Character Recognition</li>
                <li>Fundamentals of Color Image Processing</li>
                <li>Machine Learning &amp; Deep Learning in Computer Vision</li>
              </ul>

            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {researchAreas.map((area, index) => (
            <Card key={index} className="bg-[#2A2A28] border-[#EBB884] hover-lift">
              <CardContent className="p-4 sm:p-6 text-center">
                <area.icon className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-4 text-[#EBB884]" />
                <div className="text-[#EBB884] font-bold text-sm sm:text-base lg:text-lg mb-3">{area.title}</div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillSection