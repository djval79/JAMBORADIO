'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  rating: number
  reviews: number
  inStock: boolean
  featured: boolean
  isNew: boolean
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Jamboradio Classic Tee",
    price: 24.99,
    originalPrice: 29.99,
    image: "👕",
    category: "Apparel",
    description: "Premium quality cotton t-shirt with embroidered Jamboradio logo",
    rating: 4.8,
    reviews: 127,
    inStock: true,
    featured: true,
    isNew: false
  },
  {
    id: 2,
    name: "Studio Headphones",
    price: 89.99,
    image: "🎧",
    category: "Electronics",
    description: "Professional-grade headphones with superior sound quality",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: 3,
    name: "Radio Studio Mug",
    price: 14.99,
    image: "☕",
    category: "Accessories",
    description: "Ceramic mug with vintage radio microphone design",
    rating: 4.6,
    reviews: 203,
    inStock: true,
    featured: false,
    isNew: false
  },
  {
    id: 4,
    name: "Studio Cap",
    price: 19.99,
    image: "🧢",
    category: "Apparel",
    description: "Adjustable baseball cap with embroidered logo",
    rating: 4.7,
    reviews: 76,
    inStock: true,
    featured: false,
    isNew: true
  },
  {
    id: 5,
    name: "Vinyl Record - Best of 2024",
    price: 34.99,
    image: "💿",
    category: "Music",
    description: "Limited edition vinyl featuring Jamboradio's best tracks",
    rating: 5.0,
    reviews: 45,
    inStock: false,
    featured: true,
    isNew: true
  },
  {
    id: 6,
    name: "Radio Tote Bag",
    price: 16.99,
    image: "👜",
    category: "Accessories",
    description: "Eco-friendly canvas tote bag with radio wave print",
    rating: 4.5,
    reviews: 92,
    inStock: true,
    featured: false,
    isNew: false
  }
]

const categories = ["All", "Apparel", "Electronics", "Accessories", "Music"]

export function ShopSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<number[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredProducts = selectedCategory === "All" 
    ? mockProducts 
    : mockProducts.filter(product => product.category === selectedCategory)

  const featuredProducts = mockProducts.filter(product => product.featured)

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId))
    } else {
      setFavorites([...favorites, productId])
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Jamboradio Shop</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Show your support with our exclusive merchandise. Every purchase helps fund our community programs and educational initiatives.
          </p>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Featured Products</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product) => (
              <Card key={product.id} className="glass-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg flex items-center justify-center text-6xl">
                      {product.image}
                    </div>
                    <div className="absolute top-2 left-2 flex gap-2">
                      {product.isNew && (
                        <Badge className="bg-green-500 text-white">New</Badge>
                      )}
                      {product.originalPrice && (
                        <Badge className="bg-red-500 text-white">Sale</Badge>
                      )}
                    </div>
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="glass-button h-8 w-8"
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Heart className={`h-4 w-4 ${
                          favorites.includes(product.id) ? 'text-red-500 fill-current' : ''
                        }`} />
                      </Button>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">£{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          £{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  
                  <Button 
                    className="w-full glass-button bg-primary text-primary-foreground"
                    onClick={() => addToCart(product.id)}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="glass-button"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="glass-card group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg flex items-center justify-center text-6xl">
                    {product.image}
                  </div>
                  <div className="absolute top-2 left-2 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 text-white">New</Badge>
                    )}
                    {product.originalPrice && (
                      <Badge className="bg-red-500 text-white">Sale</Badge>
                    )}
                  </div>
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="glass-button h-8 w-8"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart className={`h-4 w-4 ${
                        favorites.includes(product.id) ? 'text-red-500 fill-current' : ''
                      }`} />
                    </Button>
                  </div>
                </div>
                
                <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">£{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        £{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Badge variant="outline">{product.category}</Badge>
                </div>
                
                <Button 
                  className="w-full glass-button bg-primary text-primary-foreground"
                  onClick={() => addToCart(product.id)}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shopping Cart Summary */}
        {cart.length > 0 && (
          <Card className="glass-card mt-12">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <ShoppingCart className="h-6 w-6" />
                  <div>
                    <h3 className="font-semibold">Shopping Cart</h3>
                    <p className="text-sm text-muted-foreground">
                      {cart.length} item{cart.length !== 1 ? 's' : ''} in cart
                    </p>
                  </div>
                </div>
                <Button className="glass-button bg-primary text-primary-foreground">
                  Checkout
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Special Offers */}
        <div className="mt-16">
          <Card className="glass-card bg-gradient-to-r from-primary/10 to-gold-accent/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold gradient-text mb-4">Special Bundle Offer</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Get the Jamboradio Starter Pack: Classic Tee + Studio Mug + Cap
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-2xl font-bold">£49.99</span>
                <span className="text-lg text-muted-foreground line-through">£59.97</span>
                <Badge className="bg-red-500 text-white">Save 17%</Badge>
              </div>
              <Button size="lg" className="glass-button bg-primary text-primary-foreground">
                Get Bundle Deal
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}