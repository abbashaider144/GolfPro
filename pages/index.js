import { SITE } from '../constants/constants';

export default function Home() {
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
        <div className="max-w-3xl">
          <h2 className="heading-1">Welcome to {SITE.title}</h2>
          <p className="mt-6 body-large">Simple golf shop demo. Front-end only.</p>
        </div>
      </section>
    </main>
  );
}
