import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const ProfessionalSummary = () => {
  return (
    <section className="py-16 bg-[#FCF0F0]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1D] text-center mb-12">
            Professional Summary
          </h2>
          <Card className="hover-lift">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg mb-6 text-justify">
                  Dr. Soumya Ranjan Nayak now holds the position of Sr. Assistant Professor in the School of Computer
                  Engineering at Kalinga Institute of Industrial Technology (KIIT) Deemed to be University, located in
                  Odisha, India. He obtained a Doctor of Philosophy (Ph.D) and Master of Technology (M.Tech) in
                  Computer Science and Engineering under a scholarship provided by the Ministry of Human Resource
                  Development (MHRD) of the Government of India. He has authored over 200 articles that have been published in reputable international journals and
                  conferences such as Elsevier, Springer, World Scientific, IOS Press, Taylor & Francis, Hindawi,
                  Inderscience, IGI Global, and others. These publications have undergone a rigorous peer-review
                  process.In addition to the aforementioned accomplishments, the individual has authored more than 30 book
                  chapters, published 8 books, and obtained 7 Indian patents (with 4 patents being granted).
                  Furthermore, they have secured 4 International patents, all of which have been granted. The researcher's current areas of focus encompass biomedical image analysis and classification,
                  machine learning, deep learning, pattern recognition, fractal graphics, and computer vision. The
                  author's publication have garnered over 3700+ citations, with an h-index of 33 and an i10-index of
                  85, as reported by Google Scholar. Similarly, the author has achieved, 2700+ citations from total
                  164 publication with h-index of 26 as per the scopus database. Dr. Nayak holds the position of an associate editor for several esteemed academic journals,
                  including the Journal of Electronic Imaging (SPIE), Mathematical Problems in Engineering (Hindawi),
                  Journal of Biomedical Imaging (Hindawi), Applied Computational Intelligence and Soft Computing
                  (Hindawi), and PLOS One.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalSummary