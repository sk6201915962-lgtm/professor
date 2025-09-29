import { Badge } from '@/components/ui/badge'
import { socialLinks } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-[#1F1F1D] grid-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              About Dr. Soumya Ranjan Nayak
            </h1>
            <p className="text-lg sm:text-xl text-[#EBB884] mb-8 uppercase">Assistant Professor</p>

            {/* Professor Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="photo-glow w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Soumya-Ranjan-Nayak-removebg-preview-lgjioeHxR3ikceX1mnHlnK66d0IxG6.png"
                    alt="Dr. Soumya Ranjan Nayak"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {socialLinks.map((link) => (
                <Link href={link.href}
                target='blank'>
                <Badge
                  key={link.name}
                  variant="secondary"
                  className="bg-[#E8BF96] text-[#1F1F1D] hover:bg-[#EBB884] cursor-pointer px-3 sm:px-4 py-2 float text-xs sm:text-sm"
                >
                  {link.name}
                </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection