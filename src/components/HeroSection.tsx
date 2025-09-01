'use client'

import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed max-w-md">
                Online fashion marketplaces are platforms that connect buyers and sellers of clothing, accessories and other fashion-related products.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4">
                <Sparkles className="w-8 h-8 text-black opacity-60" />
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-black leading-none text-shadow">
                MAKE YOUR FASHION
                <br />
                <span className="relative">
                  LOOK 
                  <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-4">
                    <div className="w-12 h-12 bg-black transform rotate-45"></div>
                  </div>
                </span>
                <br />
                <span className="bg-black text-white px-4 py-2 inline-block transform -skew-x-12">
                  MIRE CHARMING
                </span>
              </h1>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-red-300 to-red-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-sm opacity-80 mb-4">#outfitoftheday</div>
                    <h3 className="text-3xl font-bold mb-2">BUNCH BEACH PARTY</h3>
                    <h3 className="text-3xl font-bold mb-6">COLLECTIONS</h3>
                    <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 flex items-center mx-auto space-x-2">
                      <span>Shop Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}