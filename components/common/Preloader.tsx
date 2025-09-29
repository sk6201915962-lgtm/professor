import Image from 'next/image'
import React from 'react'

const Preloader = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F3] flex items-center justify-center">
           <div className="text-center logo-intro">
             <Image
               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Beige%20and%20Brown%20Simple%20Initial%20Wedding%20Logo-pFGzSk2LqebJKJNDU7Vgs2Bth4nHoG.png"
               alt="Dr. Soumya Ranjan Nayak Logo"
               width={300}
               height={200}
               className="mx-auto mb-4 w-64 h-auto sm:w-80" // Made logo responsive
             />
           </div>
         </div>
  )
}

export default Preloader