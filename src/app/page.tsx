import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProductGrid from '@/components/ProductGrid'
import CategoryNav from '@/components/CategoryNav'
import FeaturedCollections from '@/components/FeaturedCollections'
import NewArrivals from '@/components/NewArrivals'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="relative">
        <HeroSection />
        
        {/* Product Grid positioned as overlay */}
        <div className="absolute top-1/4 right-8 hidden lg:block">
          <ProductGrid />
        </div>
      </div>
      
      <CategoryNav />
      <FeaturedCollections />
      <NewArrivals />
      <Footer />
    </main>
  )
}