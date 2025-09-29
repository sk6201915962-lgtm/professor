import ContactForm from '@/components/common/ContactForm';
import ContactInformation from '@/components/common/ContactInformation'
import React from 'react'

const ContactSection = () => {
  return (
    <section id='contact-us' className="py-12 sm:py-16 lg:py-20 bg-[#1F1F1D]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-10 lg:mb-12">
            CONTACT
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <ContactInformation/>
            <ContactForm/>
          </div>
        </div>
      </section>
  )
}

export default ContactSection