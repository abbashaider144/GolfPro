import { SITE } from '../constants/constants';

export default function Products() {
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
        <h2 className="heading-1">Products</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Product cards will go here */}
          <div className="bg-white p-6 rounded-lg card-shadow">
            <div className="h-48 bg-gray-200 rounded mb-4"></div>
            <h3 className="heading-3">Product Name</h3>
            <p className="mt-2 text-gray-600">$99.99</p>
            <a href="/product" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Details
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
