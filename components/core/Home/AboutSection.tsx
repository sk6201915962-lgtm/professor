import React from 'react'

const AboutSection = () => {
  return (
     <section className="py-12 sm:py-16 lg:py-20 bg-[#FCF0F0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1D] text-center mb-8 sm:mb-10 lg:mb-12">
              PROFILE SUMMARY
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 text-justify">
                Assistant Professor in Computer Science and Engineering with 13+ years of teaching and research
                experience in Biomedical Image Processing, Fractals, Machine Learning, and Deep Learning.
                Authored 160+ peer-reviewed publications with over 2,600+ citations and an h-index of 26 (Scopus).
                Recipient of prestigious MHRD Government of India fellowships (TEQIP-II). Inventor of 15+ patents
                (8-Granted), both national and international.
                Recognized among the World's Top 2% Scientists (Elsevier–Stanford University global ranking). Recipient
                of the Best Teacher Award at the Odisha Technological Conclave 2024. Experienced in PhD and postgraduate
                supervision with a strong track record of international research collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutSection