"use client"
import React, { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react" // optional icon from lucide-react

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed left-4 bottom-4 p-3 rounded-full bg-[#EBB884] text-[#1F1F1D] shadow-lg hover:bg-[#d1a766] transition-colors duration-300 z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop