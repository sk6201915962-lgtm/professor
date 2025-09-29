import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, ExternalLink, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
  return (
       <section className="py-16 bg-[#FCF0F0]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1F1D] text-center mb-12">
            Contact Information
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-[#EBB884] flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">soumyaranjan.nayakfcs@kiit.ac.in</p>
                      <p className="text-gray-600 text-sm">Official</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-[#EBB884] flex-shrink-0" />
                    <div>
                      <p className="text-gray-800 font-medium">nayak.soumya17@gmail.com</p>
                      <p className="text-gray-600 text-sm">Personal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-[#EBB884] flex-shrink-0" />
                    <p className="text-gray-800">
                      School of Computer Engineering
                      <br />
                      KIIT Deemed to be University
                      <br />
                      Bhubaneswar, Odisha, India
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-6 w-6 text-[#EBB884] flex-shrink-0" />
                    <p className="text-gray-800">DOB: 13-Feb-1984</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button
                    className="w-full bg-[#EBB884] text-[#1F1F1D] hover:bg-[#E8BF96] font-semibold py-3 hover-lift"
                    asChild
                  >
                    <Link href="https://cse.kiit.ac.in/profiles/soumya-ranjan-nayak/" target="_blank">
                      View Full Profile on KIIT Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default ContactSection