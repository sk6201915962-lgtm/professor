import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'

const BackToHome = () => {
  return (
  <div className="fixed top-20 left-4 z-40">
        <Link href="/">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#EBB884] text-[#1F1F1D] border-[#EBB884] hover:bg-[#E8BF96] hover:border-[#E8BF96] cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
  )
}

export default BackToHome