import { Card, CardContent } from '@/components/ui/card'
import { researchInterests } from '@/lib/constants'
import React from 'react'

const ResearchIntrest = () => {
  return (
        <section className="py-16 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Research Interests
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {researchInterests.map((interest, index) => (
                <Card key={index} className="bg-[#2A2A28] border-[#EBB884] hover-lift">
                  <CardContent className="p-6 text-center">
                    <interest.icon className="h-10 w-10 mx-auto mb-4 text-[#EBB884]" />
                    <h3 className="text-[#EBB884] font-bold text-lg">{interest.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-[#2A2A28] border-[#EBB884]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#EBB884] mb-6 text-center">Current Research Focus</h3>
                <div className="prose prose-sm sm:prose-base text-gray-300 leading-relaxed">
                  <p className="mb-4 text-justify">
                    The primary focus of my study lies in the fractal analysis of complex objects seen in nature,
                    encompassing both grayscale and color domains. Additionally, I am intrigued by the fields of pattern
                    recognition, character recognition, and the fundamentals of color image processing.
                  </p>
                  <p className="mb-4 text-justify">
                    Regarding the recent study on fractal analysis, I have conducted many variations of box-counting,
                    differential box-counting, and triangle box-counting techniques on diverse sets of natural images.
                    My research primarily centers on the application of fractal geometry in biomedical image processing,
                    specifically in conjunction with fundamental color image processing techniques.
                  </p>
                  <p className='text-justify'>
                    The objective is to assess the potential utility of fractal dimension (FD) as a metric for analyzing
                    color images with self-similarity, particularly in the context of textures. The present area of
                    research concentration encompasses Computer Vision, Pattern Recognition, with a primary emphasis on
                    Biomedical Image Analysis utilizing the principles of Machine Learning and Deep Learning
                    methodologies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default ResearchIntrest