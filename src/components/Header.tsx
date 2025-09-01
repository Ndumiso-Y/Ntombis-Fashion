'use client'

import { Search, ShoppingCart, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full">
      <div className="bg-black text-white text-center py-2 px-4 text-sm">
        Free shipping on orders over $300! Shop now and enjoy stylish fashion delivered straight to your doorstep at no extra cost.
      </div>
      
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-black font-medium">Product</a>
              <a href="#" className="text-gray-700 hover:text-black font-medium">Blogs</a>
              <a href="#" className="text-gray-700 hover:text-black font-medium">Contact Us</a>
            </nav>
            
            <div className="flex items-center space-x-2">
              <div className="bg-black rounded-full p-2">
                <div className="w-6 h-6 bg-white"></div>
              </div>
              <h1 className="text-2xl font-bold text-black">NTOMBIS FASHION</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
              <User className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}