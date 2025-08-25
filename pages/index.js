// Simple Button component
function Button({ children, className = "", size = "default", variant = "default", ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  const sizeClasses = {
    default: "h-10 py-2 px-4",
    lg: "h-11 px-8",
  }
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  }

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Simple Card components
function Card({ children, className = "", ...props }) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

// Simple inline SVG icons
function ShoppingCart({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M9 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM20.5 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    </svg>
  )
}

function Phone({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )
}

function MapPin({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function Clock({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <polyline points="12,6 12,12 16,14" strokeWidth={2} />
    </svg>
  )
}

const SITE = {
  title: "ProShop",
  nav: [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/cart", label: "Cart" },
    { href: "/request", label: "Request Gear" },
    { href: "/contact", label: "Contact" },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">{SITE.title}</h1>
          <nav className="flex gap-6 text-sm">
            {SITE.nav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=400&width=1200&query=beautiful golf course with pro shop), url(https://via.placeholder.com/1200x400/22c55e/ffffff?text=Golf+Course)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Your Gear, Your Game, Our Pro Shop.</h1>
            <p className="text-xl mb-8">Get the golf gear you want—even if it's not in stock.</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              Find or Request Gear
            </Button>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group cursor-pointer">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <img
                src="/golf-clubs-icon.png"
                alt="Clubs"
                className="w-10 h-10"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/40x40/22c55e/ffffff?text=🏌️"
                }}
              />
            </div>
            <h3 className="font-semibold text-lg">Clubs</h3>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <img
                src="/golf-shoes-icon.png"
                alt="Shoes"
                className="w-10 h-10"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/40x40/22c55e/ffffff?text=👟"
                }}
              />
            </div>
            <h3 className="font-semibold text-lg">Shoes</h3>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <img
                src="/golf-apparel-icon.png"
                alt="Apparel"
                className="w-10 h-10"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/40x40/22c55e/ffffff?text=👕"
                }}
              />
            </div>
            <h3 className="font-semibold text-lg">Apparel</h3>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <img
                src="/golf-accessories-icon.png"
                alt="Accessories"
                className="w-10 h-10"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/40x40/22c55e/ffffff?text=🧤"
                }}
              />
            </div>
            <h3 className="font-semibold text-lg">Accessories</h3>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Search or Browse</h3>
              <p className="text-gray-600">Find the golf gear you're looking for in our extensive catalog.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">See If It's In Stock</h3>
              <p className="text-gray-600">Check real-time availability of your desired items.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Order or Request It</h3>
              <p className="text-gray-600">Buy in-stock items instantly or request special orders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Items</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-4">
              <img
                src="/golf-driver-club.png"
                alt="TaylorMade Driver"
                className="w-full h-48 object-cover rounded mb-4"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x192/22c55e/ffffff?text=Golf+Driver"
                }}
              />
              <h3 className="font-semibold text-lg mb-2">TaylorMade Driver</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">$399.99</p>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 font-medium">In Stock</span>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Add to Cart</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <img
                src="/golf-shoes.png"
                alt="Nike Golf Shoes"
                className="w-full h-48 object-cover rounded mb-4"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x192/22c55e/ffffff?text=Golf+Shoes"
                }}
              />
              <h3 className="font-semibold text-lg mb-2">Nike Golf Shoes</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">$149.99</p>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-red-600 font-medium">Not in Stock</span>
              </div>
              <Button
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                Request Order
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <img
                src="/golf-polo-shirt.png"
                alt="Golf Polo"
                className="w-full h-48 object-cover rounded mb-4"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x192/22c55e/ffffff?text=Golf+Polo"
                }}
              />
              <h3 className="font-semibold text-lg mb-2">Premium Golf Polo</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">$79.99</p>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 font-medium">In Stock</span>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Add to Cart</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <img
                src="/golf-glove.png"
                alt="Golf Glove"
                className="w-full h-48 object-cover rounded mb-4"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x192/22c55e/ffffff?text=Golf+Glove"
                }}
              />
              <h3 className="font-semibold text-lg mb-2">Leather Golf Glove</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">$24.99</p>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-red-600 font-medium">Not in Stock</span>
              </div>
              <Button
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                Request Order
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-GOLF</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Golf Course Dr, Fairway City, FC 12345</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sun: 6:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-green-400">
                  Products
                </a>
                <a href="#" className="block hover:text-green-400">
                  Request Gear
                </a>
                <a href="#" className="block hover:text-green-400">
                  Contact Us
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">ProShop</h3>
              <p className="text-gray-400">Your premier destination for golf equipment and accessories.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">Prototype – For demonstration only.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
