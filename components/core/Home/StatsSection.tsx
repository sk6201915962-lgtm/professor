import { Card, CardContent } from '@/components/ui/card'
import { stats } from '@/lib/constants'
import React from 'react'

const StatsSection = () => {
  return (
     <section className="py-12 sm:py-16 lg:py-20 bg-[#FCF0F0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-lift pulse-stat">
                <CardContent className="p-4 sm:p-6">
                  <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mx-auto mb-3 sm:mb-4 text-[#EBB884]" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1F1F1D] mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium capitalize">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default StatsSection