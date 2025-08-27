"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"

// Inline Button component
const Button = ({ children, onClick, className = "", disabled = false, variant = "primary" }) => {
  const baseClasses =
    "px-4 py-2 rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  )
}

// Inline Card components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>{children}</div>
)

const CardContent = ({ children, className = "" }) => <div className={`p-6 ${className}`}>{children}</div>

// Inline Modal component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

const SITE = {
  title: "Shuswap Lake Golf Course",
  nav: [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/cart", label: "Cart" },
    { href: "/request", label: "Request Gear" },
    { href: "/contact", label: "Contact" },
  ],
}

const PRODUCTS = [
  // Clubs - Men's
  {
    id: 1,
    name: "TaylorMade Driver",
    description: "High-performance driver for maximum distance",
    price: 399.99,
    category: "Clubs",
    gender: "Men's",
    image: "/golf-driver-club.png",
    inStock: true,
  },
  {
    id: 3,
    name: "Callaway Iron Set",
    description: "Professional iron set for improved accuracy",
    price: 799.99,
    category: "Clubs",
    gender: "Men's",
    image: "/golf-iron-set.png",
    inStock: true,
  },
  {
    id: 9,
    name: "Ping Putter",
    description: "Precision putter for better putting control",
    price: 249.99,
    category: "Clubs",
    gender: "Men's",
    image: "/ping-putter-golf-club.png",
    inStock: false,
  },
  {
    id: 10,
    name: "Titleist Wedge Set",
    description: "Complete wedge set for short game mastery",
    price: 449.99,
    category: "Clubs",
    gender: "Men's",
    image: "/titleist-golf-wedge-set.png",
    inStock: true,
  },
  {
    id: 11,
    name: "Cobra Hybrid Club",
    description: "Versatile hybrid for various course conditions",
    price: 189.99,
    category: "Clubs",
    gender: "Men's",
    image: "/cobra-hybrid-golf-club.png",
    inStock: true,
  },

  // Clubs - Women's
  {
    id: 12,
    name: "Women's TaylorMade Driver",
    description: "Lightweight driver designed for women golfers",
    price: 369.99,
    category: "Clubs",
    gender: "Women's",
    image: "/womens-taylormade-driver-pink.png",
    inStock: false,
  },
  {
    id: 13,
    name: "Women's Callaway Iron Set",
    description: "Complete iron set with enhanced forgiveness",
    price: 699.99,
    category: "Clubs",
    gender: "Women's",
    image: "/womens-callaway-iron-set.png",
    inStock: true,
  },
  {
    id: 14,
    name: "Women's Ping Putter",
    description: "Stylish putter with improved alignment",
    price: 229.99,
    category: "Clubs",
    gender: "Women's",
    image: "/womens-ping-putter-golf.png",
    inStock: true,
  },

  // Shoes - Men's
  {
    id: 2,
    name: "Nike Golf Shoes",
    description: "Comfortable and stylish golf shoes",
    price: 129.99,
    category: "Shoes",
    gender: "Men's",
    image: "/mens-golf-shoes.png",
    inStock: false,
  },
  {
    id: 15,
    name: "Adidas Golf Spikes",
    description: "Professional golf shoes with superior grip",
    price: 159.99,
    category: "Shoes",
    gender: "Men's",
    image: "/adidas-mens-golf-shoes-spikes.png",
    inStock: true,
  },
  {
    id: 16,
    name: "FootJoy Pro SL",
    description: "Premium leather golf shoes for comfort",
    price: 199.99,
    category: "Shoes",
    gender: "Men's",
    image: "/footjoy-pro-sl-mens-golf-shoes.png",
    inStock: true,
  },
  {
    id: 17,
    name: "Under Armour Spieth 5",
    description: "Tour-inspired golf shoes with modern design",
    price: 179.99,
    category: "Shoes",
    gender: "Men's",
    image: "/under-armour-spieth-golf-shoes.png",
    inStock: false,
  },

  // Shoes - Women's
  {
    id: 6,
    name: "Women's Golf Shoes",
    description: "Lightweight and comfortable",
    price: 149.99,
    category: "Shoes",
    gender: "Women's",
    image: "/womens-golf-shoes.png",
    inStock: true,
  },
  {
    id: 18,
    name: "Women's Adidas Golf Shoes",
    description: "Stylish and supportive golf footwear",
    price: 139.99,
    category: "Shoes",
    gender: "Women's",
    image: "/womens-adidas-golf-shoes-white-pink.png",
    inStock: true,
  },
  {
    id: 19,
    name: "Women's FootJoy Traditions",
    description: "Classic golf shoes with modern comfort",
    price: 169.99,
    category: "Shoes",
    gender: "Women's",
    image: "/womens-footjoy-traditions-golf-shoes.png",
    inStock: false,
  },

  // Apparel - Men's
  {
    id: 20,
    name: "Men's Golf Polo",
    description: "Moisture-wicking performance polo",
    price: 49.99,
    category: "Apparel",
    gender: "Men's",
    image: "/mens-golf-polo-shirt-blue.png",
    inStock: true,
  },
  {
    id: 21,
    name: "Men's Golf Shorts",
    description: "Comfortable golf shorts with stretch fabric",
    price: 59.99,
    category: "Apparel",
    gender: "Men's",
    image: "/mens-golf-shorts-khaki.png",
    inStock: true,
  },
  {
    id: 22,
    name: "Men's Golf Jacket",
    description: "Windproof golf jacket for cool weather",
    price: 89.99,
    category: "Apparel",
    gender: "Men's",
    image: "/mens-golf-windbreaker-jacket.png",
    inStock: false,
  },
  {
    id: 23,
    name: "Men's Golf Pants",
    description: "Professional golf pants with modern fit",
    price: 79.99,
    category: "Apparel",
    gender: "Men's",
    image: "/mens-golf-pants-navy.png",
    inStock: true,
  },

  // Apparel - Women's
  {
    id: 4,
    name: "Women's Golf Polo",
    description: "Moisture-wicking polo shirt",
    price: 59.99,
    category: "Apparel",
    gender: "Women's",
    image: "/womens-golf-polo-shirt.png",
    inStock: true,
  },
  {
    id: 8,
    name: "Women's Golf Skirt",
    description: "Athletic golf skirt with built-in shorts",
    price: 69.99,
    category: "Apparel",
    gender: "Women's",
    image: "/womens-golf-skirt.png",
    inStock: false,
  },
  {
    id: 24,
    name: "Women's Golf Dress",
    description: "Elegant golf dress for tournament play",
    price: 89.99,
    category: "Apparel",
    gender: "Women's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 25,
    name: "Women's Golf Cardigan",
    description: "Lightweight cardigan for layering",
    price: 79.99,
    category: "Apparel",
    gender: "Women's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: false,
  },
  {
    id: 26,
    name: "Women's Golf Capris",
    description: "Comfortable capri pants for warm weather",
    price: 64.99,
    category: "Apparel",
    gender: "Women's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },

  // Accessories - General
  {
    id: 5,
    name: "Golf Glove Set",
    description: "Premium leather golf gloves",
    price: 24.99,
    category: "Accessories",
    gender: "Men's",
    image: "/golf-gloves.png",
    inStock: false,
  },
  {
    id: 7,
    name: "Golf Bag",
    description: "Spacious cart bag with multiple pockets",
    price: 199.99,
    category: "Accessories",
    gender: "Men's",
    image: "/golf-cart-bag.png",
    inStock: true,
  },
  {
    id: 27,
    name: "Golf Ball Set",
    description: "Premium golf balls for better performance",
    price: 39.99,
    category: "Accessories",
    gender: "Men's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 28,
    name: "Golf Tees Pack",
    description: "Wooden and plastic tees variety pack",
    price: 12.99,
    category: "Accessories",
    gender: "Men's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 29,
    name: "Golf Towel",
    description: "Microfiber golf towel with clip attachment",
    price: 19.99,
    category: "Accessories",
    gender: "Men's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: false,
  },
  {
    id: 30,
    name: "Golf Umbrella",
    description: "Large golf umbrella for weather protection",
    price: 34.99,
    category: "Accessories",
    gender: "Men's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 31,
    name: "Golf Rangefinder",
    description: "Laser rangefinder for accurate distance measurement",
    price: 249.99,
    category: "Accessories",
    gender: "Men's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: false,
  },
  {
    id: 32,
    name: "Golf GPS Watch",
    description: "GPS watch with course mapping and scoring",
    price: 299.99,
    category: "Accessories",
    gender: "Men's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 33,
    name: "Women's Golf Gloves",
    description: "Soft leather gloves designed for women",
    price: 22.99,
    category: "Accessories",
    gender: "Women's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 34,
    name: "Women's Golf Bag",
    description: "Lightweight stand bag with stylish design",
    price: 179.99,
    category: "Accessories",
    gender: "Women's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: false,
  },
  {
    id: 35,
    name: "Golf Ball Marker Set",
    description: "Decorative ball markers with magnetic hat clip",
    price: 16.99,
    category: "Accessories",
    gender: "Women's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 36,
    name: "Golf Club Headcovers",
    description: "Protective headcovers for drivers and woods",
    price: 29.99,
    category: "Accessories",
    gender: "Men's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 37,
    name: "Golf Scorecard Holder",
    description: "Leather scorecard holder with pencil",
    price: 24.99,
    category: "Accessories",
    gender: "Men's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: false,
  },
  {
    id: 38,
    name: "Golf Divot Tool",
    description: "Premium divot repair tool with ball marker",
    price: 14.99,
    category: "Accessories",
    gender: "Men's",
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
]

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showRequestModal, setShowRequestModal] = useState(false)
  const [requestForm, setRequestForm] = useState({
    name: "",
    memberNumber: "",
    email: "",
    pickupDate: "",
  })
  const [showRequestConfirmation, setShowRequestConfirmation] = useState(false)
  const [notification, setNotification] = useState(null)

  const categories = useMemo(() => ["All", "Men's", "Women's", "Clubs", "Shoes", "Apparel", "Accessories"], [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const categoryParam = urlParams.get("category")
      if (categoryParam && categories.includes(categoryParam)) {
        setSelectedCategory(categoryParam)
      }
    }
  }, [categories])

  const getCartItems = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("golfShopCart")
      return saved ? JSON.parse(saved) : []
    }
    return []
  }

  const getRequestedItems = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("golfShopRequests")
      return saved ? JSON.parse(saved) : []
    }
    return []
  }

  const addToCart = (product) => {
    const cartItems = getCartItems()
    const existingItem = cartItems.find((item) => item.id === product.id)

    let updatedCart
    if (existingItem) {
      updatedCart = cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }]
    }

    localStorage.setItem("golfShopCart", JSON.stringify(updatedCart))
  }

  const addToRequests = (product, formData) => {
    const requestedItems = getRequestedItems()
    const newRequest = {
      ...product,
      requestDate: new Date().toISOString().split("T")[0],
      status: "Pending",
      estimatedArrival: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 2 weeks from now
      customerInfo: formData,
    }

    const updatedRequests = [...requestedItems, newRequest]
    localStorage.setItem("golfShopRequests", JSON.stringify(updatedRequests))
  }

  // Filter products based on search and category
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory || product.gender === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddToCart = (product) => {
    addToCart(product)
    setNotification({
      type: "cart",
      product: product,
      message: `${product.name} added to cart!`,
    })
    setTimeout(() => setNotification(null), 4000)
  }

  const handleRequestOrder = (product) => {
    setSelectedProduct(product)
    setShowRequestModal(true)
  }

  const handleRequestSubmit = (e) => {
    e.preventDefault()
    addToRequests(selectedProduct, requestForm)
    setShowRequestModal(false)
    setShowRequestConfirmation(true)
    setRequestForm({ name: "", memberNumber: "", email: "", pickupDate: "" })
  }

  const handleConfirmationClose = () => {
    setShowRequestConfirmation(false)
    setSelectedProduct(null)
    setNotification({
      type: "request",
      product: selectedProduct,
      message: `${selectedProduct.name} request submitted!`,
    })
    setTimeout(() => setNotification(null), 4000)
  }

  const getMinDate = () => {
    const today = new Date()
    today.setDate(today.getDate() + 3)
    return today.toISOString().split("T")[0]
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-green-800">{SITE.title}</h1>
          <nav className="flex gap-6 text-sm">
            {SITE.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Golf Products</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for golf gear…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "primary" : "outline"}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <div onClick={() => setSelectedProduct(product)}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                {product.inStock ? (
                  <p className="text-xl font-bold text-green-600 mb-3">${product.price}</p>
                ) : (
                  <div className="mb-3">
                    <p className="text-lg text-gray-400 line-through">${product.price}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-bold text-red-600">${(product.price * 0.85).toFixed(2)}</p>
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                        15% OFF
                      </span>
                    </div>
                  </div>
                )}

                {/* Stock Status */}
                <div className="flex items-center mb-4">
                  <span
                    className={`inline-block w-3 h-3 rounded-full mr-2 ${product.inStock ? "bg-green-500" : "bg-red-500"}`}
                  ></span>
                  <span className={`text-sm font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                    {product.inStock ? "In Stock" : "Not in Stock"}
                  </span>
                </div>

                {/* Action Button */}
                {product.inStock ? (
                  <Button onClick={() => handleAddToCart(product)} className="w-full">
                    Add to Cart
                  </Button>
                ) : (
                  <Button onClick={() => handleRequestOrder(product)} variant="secondary" className="w-full">
                    Request Order
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <Modal isOpen={selectedProduct && !showRequestModal} onClose={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src={selectedProduct.image || "/placeholder.svg"}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                {selectedProduct.inStock ? (
                  <p className="text-3xl font-bold text-green-600 mb-4">${selectedProduct.price}</p>
                ) : (
                  <div className="mb-4">
                    <p className="text-xl text-gray-400 line-through">${selectedProduct.price}</p>
                    <div className="flex items-center gap-3">
                      <p className="text-3xl font-bold text-red-600">${(selectedProduct.price * 0.85).toFixed(2)}</p>
                      <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                        15% OFF REQUEST SPECIAL
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Special discount applied for requested items!</p>
                  </div>
                )}

                {/* Stock Status */}
                <div className="flex items-center mb-6">
                  <span
                    className={`inline-block w-4 h-4 rounded-full mr-3 ${selectedProduct.inStock ? "bg-green-500" : "bg-red-500"}`}
                  ></span>
                  <span
                    className={`text-lg font-medium ${selectedProduct.inStock ? "text-green-600" : "text-red-600"}`}
                  >
                    {selectedProduct.inStock ? "In Stock" : "Not in Stock"}
                  </span>
                </div>

                {/* Action Button */}
                {selectedProduct.inStock ? (
                  <Button
                    onClick={() => {
                      handleAddToCart(selectedProduct)
                      setSelectedProduct(null)
                    }}
                    className="w-full text-lg py-3"
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Button onClick={() => setShowRequestModal(true)} variant="secondary" className="w-full text-lg py-3">
                    Request This Item
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Request Form Modal */}
      <Modal isOpen={showRequestModal} onClose={() => setShowRequestModal(false)}>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-6">Request Item</h3>
          {selectedProduct && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium">Requesting: {selectedProduct.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-gray-400 line-through text-sm">${selectedProduct.price}</p>
                <p className="text-red-600 font-semibold">${(selectedProduct.price * 0.85).toFixed(2)}</p>
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">15% OFF</span>
              </div>
            </div>
          )}

          <form onSubmit={handleRequestSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                required
                value={requestForm.name}
                onChange={(e) => setRequestForm({ ...requestForm, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Member Number</label>
              <input
                type="text"
                required
                value={requestForm.memberNumber}
                onChange={(e) => setRequestForm({ ...requestForm, memberNumber: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={requestForm.email}
                onChange={(e) => setRequestForm({ ...requestForm, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Pickup Date</label>
              <input
                type="date"
                required
                min={getMinDate()}
                value={requestForm.pickupDate}
                onChange={(e) => setRequestForm({ ...requestForm, pickupDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 3 days from today</p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Submit Request
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowRequestModal(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Request Confirmation Modal */}
      <Modal isOpen={showRequestConfirmation} onClose={handleConfirmationClose}>
        <div className="p-6 text-center">
          <div className="mb-6">
            <svg
              className="w-16 h-16 text-green-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted Successfully!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for your request. The pro shop will contact you shortly to confirm availability and pickup
              details.
            </p>
          </div>

          {selectedProduct && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-12 h-12 rounded object-cover mr-3"
                />
                <div>
                  <p className="font-medium text-left">{selectedProduct.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-400 line-through text-sm">${selectedProduct.price}</p>
                    <p className="text-red-600 font-semibold">${(selectedProduct.price * 0.85).toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">Expected processing time: 1-2 business days</p>
              <p className="text-sm text-red-600 font-medium">15% discount applied for requested items!</p>
            </div>
          )}

          <div className="flex gap-3">
            <Button onClick={handleConfirmationClose} className="flex-1">
              Continue Shopping
            </Button>
            <Link href="/cart" className="flex-1">
              <Button variant="outline" className="w-full bg-transparent">
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </Modal>

      {notification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-white rounded-lg shadow-xl border-l-4 border-green-500 p-4 max-w-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {notification.type === "cart" ? (
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h12.6M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                )}
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.type === "cart" ? "Added to Cart!" : "Request Submitted!"}
                  </p>
                  <button onClick={() => setNotification(null)} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-1 flex items-center">
                  <img
                    src={notification.product.image || "/placeholder.svg"}
                    alt={notification.product.name}
                    className="w-8 h-8 rounded object-cover mr-2"
                  />
                  <div>
                    <p className="text-sm text-gray-700 font-medium">{notification.product.name}</p>
                    <p className="text-xs text-gray-500">${notification.product.price}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <Link
                    href="/cart"
                    className="text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-colors"
                  >
                    View Cart
                  </Link>
                  {notification.type === "cart" && (
                    <button
                      onClick={() => handleAddToCart(notification.product)}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Add Another
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* Progress bar */}
            <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
              <div className="bg-green-500 h-1 rounded-full animate-progress"></div>
            </div>
          </div>
        </div>
      )}

      {/* moved style block inside the returned JSX so it's syntactically valid */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        .animate-progress {
          animation: progress 4s linear;
        }
      `}</style>
    </main>
  )
}
