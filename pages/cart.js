"use client"

import { useState } from "react"

// Inline components
const Button = ({ children, onClick, className = "", disabled = false, type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-lg font-medium transition-colors ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"} ${className}`}
  >
    {children}
  </button>
)

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-sm border ${className}`}>{children}</div>
)

const CardContent = ({ children, className = "" }) => <div className={`p-6 ${className}`}>{children}</div>

// Icons
const MinusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
)

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
)

const XIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

// SITE constants
const SITE = {
  title: "Greenway Golf Pro Shop",
  nav: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Cart", href: "/cart" },
    { label: "Request Gear", href: "/request" },
    { label: "Contact", href: "/contact" },
  ],
}

export default function Cart() {
  // Sample cart items (hardcoded as requested)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "TaylorMade Driver",
      price: 449.99,
      quantity: 1,
      image: "/golf-driver-club.png",
      inStock: true,
    },
    {
      id: 2,
      name: "Nike Golf Shoes",
      price: 129.99,
      quantity: 2,
      image: "/mens-golf-shoes.png",
      inStock: true,
    },
    {
      id: 3,
      name: "Callaway Iron Set",
      price: 899.99,
      quantity: 1,
      image: "/golf-iron-set.png",
      inStock: true,
    },
  ])

  // Sample requested items (hardcoded as requested)
  const [requestedItems] = useState([
    {
      id: 1,
      name: "Limited Edition Putter",
      price: 299.99,
      status: "Pending",
      requestDate: "2024-01-15",
      estimatedArrival: "2024-02-01",
      image: "/golf-putter.png",
    },
    {
      id: 2,
      name: "Premium Golf Bag",
      price: 199.99,
      status: "Ordered",
      requestDate: "2024-01-10",
      estimatedArrival: "2024-01-25",
      image: "/golf-cart-bag.png",
    },
  ])

  const [showCheckout, setShowCheckout] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    memberNumber: "",
    email: "",
    pickupDate: "",
  })

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + tax

  const handleCheckout = (e) => {
    e.preventDefault()
    setShowConfirmation(true)
    setShowCheckout(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-600 bg-yellow-100"
      case "Ordered":
        return "text-blue-600 bg-blue-100"
      case "Shipped":
        return "text-green-600 bg-green-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  if (showConfirmation) {
    return (
      <main className="min-h-screen bg-gray-50">
        <header className="border-b bg-white">
          <div className="container mx-auto px-6 py-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight text-green-800">{SITE.title}</h1>
            <nav className="flex gap-6 text-sm">
              {SITE.nav.map((item) => (
                <a key={item.href} href={item.href} className="text-gray-600 hover:text-green-800 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <CheckIcon />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your order has been received! The pro shop will contact you shortly.
            </p>
            <Button
              onClick={() => {
                setShowConfirmation(false)
                setCartItems([])
                setCheckoutForm({ name: "", memberNumber: "", email: "", pickupDate: "" })
              }}
              className="bg-green-600 text-white px-8 py-3"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-green-800">{SITE.title}</h1>
          <nav className="flex gap-6 text-sm">
            {SITE.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-green-800 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items */}
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold mb-6">Cart Items ({cartItems.length})</h3>
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                          onError={(e) => {
                            e.target.src = `/placeholder.svg?height=64&width=64&text=${encodeURIComponent(item.name)}`
                          }}
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-green-600 font-semibold">${item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 p-0 border border-gray-300 bg-white text-gray-600"
                          >
                            <MinusIcon />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 p-0 border border-gray-300 bg-white text-gray-600"
                          >
                            <PlusIcon />
                          </Button>
                        </div>
                        <Button
                          onClick={() => removeItem(item.id)}
                          className="w-8 h-8 p-0 bg-red-100 text-red-600 hover:bg-red-200"
                        >
                          <XIcon />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Requested Gear Section */}
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold mb-6">Requested Gear ({requestedItems.length})</h3>
                {requestedItems.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No requested items</p>
                ) : (
                  <div className="space-y-4">
                    {requestedItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                          onError={(e) => {
                            e.target.src = `/placeholder.svg?height=64&width=64&text=${encodeURIComponent(item.name)}`
                          }}
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-green-600 font-semibold">${item.price}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <span>Requested: {item.requestDate}</span>
                            <span>ETA: {item.estimatedArrival}</span>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent>
                <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span className="text-green-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {cartItems.length > 0 && (
                  <Button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-green-600 text-white py-3 text-lg font-semibold"
                  >
                    Proceed to Checkout
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardContent>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Checkout</h3>
                <Button onClick={() => setShowCheckout(false)} className="w-8 h-8 p-0 bg-gray-100 text-gray-600">
                  <XIcon />
                </Button>
              </div>

              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={checkoutForm.name}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Member Number</label>
                  <input
                    type="text"
                    value={checkoutForm.memberNumber}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, memberNumber: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={checkoutForm.email}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Pickup Date *</label>
                  <input
                    type="date"
                    required
                    value={checkoutForm.pickupDate}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, pickupDate: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full bg-green-600 text-white py-3 font-semibold">
                    Complete Order (${total.toFixed(2)})
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  )
}
