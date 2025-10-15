"use client"
import { navigationItems } from '@/lib/constants'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isExternal = (url: string) => /^https?:\/\//.test(url)
  return (
    <nav className="fixed top-0 w-full bg-[#1F1F1D] z-50 py-4">
      <div className="container mx-auto px-4 sm:px-6 flex md:justify-center justify-end items-center">
        <div className="hidden lg:flex space-x-8">
          {navigationItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group">
                <button className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium flex items-center gap-1">
                  {item.name}
                  <ChevronDown className="h-3 w-3" />
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-[#1F1F1D] border border-[#EBB884] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.name}
                        href={d.href}
                        target={isExternal(d.href) ? "_blank" : undefined}
                        rel={isExternal(d.href) ? "noopener noreferrer" : undefined}
                        className="block w-full text-left px-4 py-3 text-white hover:text-[#EBB884] hover:bg-[#2A2A28] transition-colors duration-200 text-sm"
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#EBB884] transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
        <button
          className="lg:hidden text-white hover:text-[#EBB884]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1F1F1D] z-50 transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#EBB884]">
          <div className="text-white font-bold text-lg">Menu</div>
          <button onClick={() => setMobileMenuOpen(false)} className="text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col mt-4 space-y-2">
          {navigationItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="flex flex-col">
                <div className="text-white font-medium px-4 py-2">{item.name}</div>
                <div className="flex flex-col pl-6 space-y-1">
                  {item.dropdown.map((d) => (
                    <Link
                      key={d.name}
                      href={d.href}
                      target={isExternal(d.href) ? "_blank" : undefined}
                      rel={isExternal(d.href) ? "noopener noreferrer" : undefined}
                      className="text-gray-300 hover:text-[#EBB884] text-sm py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {d.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-white px-4 py-2 hover:text-[#EBB884] text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
