import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Calendar, Mail, MapPin } from 'lucide-react'

const ContactInformation = () => {
    return (
        <Card className="bg-[#2A2A28] border-[#EBB884]">
            <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#EBB884] mb-6">Get In Touch</h3>
                <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#EBB884] flex-shrink-0" />
                        <div>
                            <p className="text-white text-sm sm:text-base">soumyaranjan.nayakfcs@kiit.ac.in</p>
                            <p className="text-gray-400 text-sm">Official </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#EBB884] flex-shrink-0" />
                        <div>
                            <p className="text-white text-sm sm:text-base">nayak.soumya17@gmail.com</p>
                            <p className="text-gray-400 text-sm">Personal</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#EBB884] flex-shrink-0" />
                        <p className="text-white text-sm sm:text-base">
                            School of Computer Engineering
                            <br />
                            KIIT Deemed to be University
                            <br />
                            Bhubaneswar, Odisha, India
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Calendar className="h-6 w-6 text-[#EBB884] flex-shrink-0" />
                        <p className="text-white">DOB: 13-Feb-1984</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ContactInformation