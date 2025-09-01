'use client'

const products = [
  { id: 1, name: "T-SHIRT", price: "$80", color: "BLACK LONGSLEEVE", image: "/api/placeholder/200/250" },
  { id: 2, name: "T-SHIRT", price: "$100", color: "BLUE STRIPED JACKET", image: "/api/placeholder/200/250" },
  { id: 3, name: "T-SHIRT", price: "$45", color: "GREY JACKET", image: "/api/placeholder/200/250" },
  { id: 4, name: "LONGSLEEVE", price: "$60", image: "/api/placeholder/200/250" },
  { id: 5, name: "SHIRT", price: "$90", color: "BLACK POLKA SHIRT", image: "/api/placeholder/200/250" },
  { id: 6, name: "JACKET", price: "$100", color: "GREEN FULL JACKET", image: "/api/placeholder/200/250" },
  { id: 7, name: "SHIRT", price: "$50", color: "COCKY BLUE CREWNECK", image: "/api/placeholder/200/250" }
]

export default function ProductGrid() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
      <div className="grid grid-cols-2 gap-4 mb-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-[3/4] bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg mb-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
            </div>
            <div className="text-xs space-y-1">
              <div className="font-semibold text-gray-800">{product.name}</div>
              <div className="text-gray-600">{product.price}</div>
              {product.color && (
                <div className="text-gray-500 text-[10px]">{product.color}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors">
        More Collections →
      </button>
    </div>
  )
}