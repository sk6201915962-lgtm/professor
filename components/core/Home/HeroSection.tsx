import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { socialLinks } from '@/lib/constants'
import { ExternalLink, Target } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TypingText from './TypingText'

const HeroSection = () => {
  const handleResumelink = () => {
    window.open(
    'https://drive.google.com/file/d/1ydjLtGNEhg0UaI4qwcpEYSFTftKfEhej/view?usp=sharing',
    '_blank'
  );
  }
   const handlePhDThesislink = () => {
    window.open(
    'https://shodhganga.inflibnet.ac.in/handle/10603/591146',
    '_blank'
  );
  }
 
  return (
   <section className="min-h-screen bg-[#1F1F1D] grid-bg pt-20 flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Professor Photo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-1">
              <div className="relative">
                <div className="photo-glow w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soumya-Ranjan-Nayak-removebg-preview-lgjioeHxR3ikceX1mnHlnK66d0IxG6.png"
                    alt="Dr. Soumya Ranjan Nayak"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Professor Info */}
            <div className="text-white space-y-6 fade-in text-center lg:text-left order-2 lg:order-2">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 text-balance capitalize">
                  Dr. Soumya Ranjan Nayak
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-[#EBB884] mb-2 uppercase">Assistant PROFESSOR</h2>
                <TypingText/>
                <p className="text-sm sm:text-base lg:text-lg mt-2 text-gray-300 leading-relaxed">
                  SCHOOL OF COMPUTER ENGINEERING
                  <br />
                  KIIT DEEMED TO BE UNIVERSITY
                  <br />
                  BHUBANESWAR, ODISHA, INDIA
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  className="bg-[#EBB884] text-[#1F1F1D] hover:bg-[#E8BF96] px-6 sm:px-8 py-3 hover-lift text-sm sm:text-base cursor-pointer"
                  size="lg"
                  onClick={handleResumelink}
                >
                  MY RESUME
                </Button>
                <Button
                  className="bg-[#EBB884] text-[#1F1F1D] hover:bg-[#E8BF96] px-6 sm:px-8 py-3 hover-lift text-sm sm:text-base cursor-pointer"
                  size="lg" 
                >
                  <Link href="https://cse.kiit.ac.in/profiles/soumya-ranjan-nayak/" target="_blank">
                    OFFICIAL PROFILE
                  </Link>
                </Button>
                 <Button
                  className="uppercase bg-[#EBB884] text-[#1F1F1D] hover:bg-[#E8BF96] px-6 sm:px-8 py-3 hover-lift text-sm sm:text-base cursor-pointer"
                  size="lg"
                  onClick={handlePhDThesislink}
                >
                  My PHD Thesis
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Badge
                      variant="secondary"
                      className="bg-[#E8BF96] text-[#1F1F1D] hover:bg-[#EBB884] cursor-pointer px-3 sm:px-4 py-2 float text-xs sm:text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection