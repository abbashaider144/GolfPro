import { SITE } from '../constants/constants';

export default function Checkout() {
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
        <h2 className="heading-1">Checkout</h2>
        
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Checkout Form */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg card-shadow">
                <h3 className="heading-3 mb-4">Shipping Information</h3>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input type="text" placeholder="First Name" className="form-input" />
                    <input type="text" placeholder="Last Name" className="form-input" />
                  </div>
                  <input type="email" placeholder="Email" className="form-input" />
                  <input type="text" placeholder="Address" className="form-input" />
                  <div className="grid gap-4 md:grid-cols-3">
                    <input type="text" placeholder="City" className="form-input" />
                    <input type="text" placeholder="State" className="form-input" />
                    <input type="text" placeholder="ZIP" className="form-input" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg card-shadow">
                <h3 className="heading-3 mb-4">Payment Information</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Card Number" className="form-input" />
                  <div className="grid gap-4 md:grid-cols-2">
                    <input type="text" placeholder="Expiry Date" className="form-input" />
                    <input type="text" placeholder="CVV" className="form-input" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg card-shadow h-fit">
              <h3 className="heading-3 mb-4">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Product Name</span>
                  <span>$99.99</span>
                </div>
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
              <button className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

