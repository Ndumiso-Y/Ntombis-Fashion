'use client'

import { ArrowRight } from 'lucide-react'

export default function NewArrivals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-black">NEW ARRIVALS</h2>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-black">
            <span>See All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[4/5] bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">AUTUMN</h3>
              <h3 className="text-2xl font-bold mb-2">COLLECTION</h3>
              <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100">
                Explore Now
              </button>
            </div>
          </div>
          
          <div className="aspect-[4/5] bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">SPRING</h3>
              <h3 className="text-2xl font-bold mb-2">VIBES</h3>
              <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}