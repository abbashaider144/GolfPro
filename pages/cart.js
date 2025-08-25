import { SITE } from '../constants/constants';

export default function Cart() {
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
        <h2 className="heading-1">Shopping Cart</h2>
        
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white p-6 rounded-lg card-shadow">
                <div className="flex gap-4">
                  <div className="h-24 w-24 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <h3 className="heading-3">Product Name</h3>
                    <p className="text-gray-600">$99.99</p>
                    <div className="mt-2 flex items-center gap-2">
                      <label className="text-sm">Qty:</label>
                      <select className="border rounded px-2 py-1 text-sm">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-800">Remove</button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg card-shadow h-fit">
              <h3 className="heading-3 mb-4">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>$99.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>$8.00</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total:</span>
                  <span>$107.99</span>
                </div>
              </div>
              <a href="/checkout" className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 block text-center">
                Proceed to Checkout
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

