'use client'

const categories = [
  'CAP', 'TROUSER', 'SHORTS', 'SHOES', 'SOCK', 'JACKET', 'HOODIE', 'GLASSES', 'BAG', 'JEANS', 'WATCH'
]

export default function CategoryNav() {
  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center space-x-1 md:space-x-8">
          {categories.map((category, index) => (
            <div key={category} className="flex items-center">
              <a 
                href="#" 
                className="text-white hover:text-gray-300 font-medium text-sm md:text-base py-2 px-2 md:px-0 transition-colors"
              >
                {category}
              </a>
              {index < categories.length - 1 && (
                <span className="text-gray-500 mx-2 md:mx-4 hidden md:inline">+</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}