'use client'

import { ArrowRight } from 'lucide-react'

const collections = [
  {
    id: 1,
    title: "TO THE WOODS",
    subtitle: "Rustic & Natural",
    image: "/api/placeholder/300/400",
    bgColor: "from-green-600 to-green-800"
  },
  {
    id: 2,
    title: "TRAVEL ESSENTIALS",
    subtitle: "Comfort & Style",
    image: "/api/placeholder/300/400",
    bgColor: "from-blue-600 to-blue-800"
  },
  {
    id: 3,
    title: "COZY ANYWHERE",
    subtitle: "Home & Lounge",
    image: "/api/placeholder/300/400",
    bgColor: "from-orange-600 to-orange-800"
  }
]

export default function FeaturedCollections() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-black">FEATURED COLLECTION</h2>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-black">
            <span>See All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer">
              <div className={`aspect-[4/5] bg-gradient-to-br ${collection.bgColor} rounded-lg relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{collection.title}</h3>
                  <p className="text-sm opacity-80 mb-4">{collection.subtitle}</p>
                  <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 flex items-center space-x-2">
                    <span>Shop Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium">
            Discover All Collections
          </button>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-black rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">UNLOCK THE SECRET TO</h2>
            <h2 className="text-4xl font-bold mb-6">EFFORTLESS STYLE</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover the perfect balance of comfort and elegance with our curated collection of premium fashion pieces.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 flex items-center space-x-2">
              <span>Join Our Newsletter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-5 rounded-full -mr-32 -mt-32"></div>
        </div>
      </div>
    </section>
  )
}