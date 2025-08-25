import { SITE } from '../constants/constants';

export default function ProductDetail() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">{SITE.title}</h1>
          <nav className="flex gap-6 text-sm">
            {SITE.nav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Product Image */}
            <div className="bg-white p-6 rounded-lg">
              <div className="h-96 bg-gray-200 rounded"></div>
            </div>
            
            {/* Product Details */}
            <div className="space-y-6">
              <h2 className="heading-1">Premium Golf Club</h2>
              <p className="text-2xl font-bold text-blue-600">$299.99</p>
              <p className="body-large">Professional grade golf club with advanced technology for improved accuracy and distance.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">Quantity:</label>
                  <select className="border rounded px-3 py-2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                
                <a href="/cart" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 block text-center">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

