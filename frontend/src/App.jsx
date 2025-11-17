import React, { useEffect, useState } from 'react';
import { Phone, Car, Star, Search, Menu } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-white">
        <div className="flex items-center gap-2 font-semibold">
          <Car className="text-red-500" size={22} />
          <span>Best Deal Motors</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#inventory" className="hover:text-red-400">Inventory</a>
          <a href="#apply" className="hover:text-red-400">Apply Online</a>
          <a href="#sell" className="hover:text-red-400">Sell/Trade</a>
          <a href="#finder" className="hover:text-red-400">Car Finder</a>
          <a href="#testdrive" className="hover:text-red-400">Test Drive</a>
          <a href="#reviews" className="hover:text-red-400">Reviews</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:3144860909" className="hidden sm:flex items-center gap-2 text-red-400 font-semibold">
            <span role="img" aria-label="phone">📞</span> 314-486-0909
          </a>
          <button className="md:hidden p-2 rounded hover:bg-white/10" aria-label="menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none" />
      <div className="relative max-w-7xl mx-auto h-full px-4 flex items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Best Deal Motors</h1>
          <p className="mt-3 text-lg text-white/80">Quality pre-owned vehicles in St. Charles, MO. Simple pricing. Fast approvals.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#inventory" className="px-5 py-3 bg-red-600 hover:bg-red-500 rounded font-semibold">View Inventory</a>
            <a href="#apply" className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded">Apply Online</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedInventory() {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch(`${backend}/vehicles`).then(r => r.json()).then(setVehicles).catch(() => {});
  }, []);
  const featured = vehicles.filter(v => v.featured).slice(0, 6);
  return (
    <section id="inventory" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">Featured Vehicles</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((v, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={(v.photos && v.photos[0]?.url) || `https://picsum.photos/seed/${idx}/800/500`} alt="vehicle" className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex justify-between">
                  <div className="font-semibold">{v.year} {v.make} {v.model}</div>
                  {v.price ? <div className="text-red-600 font-bold">${Number(v.price).toLocaleString()}</div> : <div className="text-gray-500">Call</div>}
                </div>
                <div className="text-sm text-gray-600 mt-1">{v.mileage ? Number(v.mileage).toLocaleString() + ' mi' : ''} {v.trim ? `• ${v.trim}` : ''}</div>
                <a href="#contact" className="mt-3 inline-block text-sm text-red-600 hover:underline">Message Us</a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#apply" className="px-4 py-2 bg-black text-white rounded">Apply Online</a>
          <a href="#sell" className="px-4 py-2 border rounded">Sell or Trade</a>
          <a href="#finder" className="px-4 py-2 border rounded">Car Finder</a>
          <a href="#testdrive" className="px-4 py-2 border rounded">Schedule Test Drive</a>
          <a href="#reviews" className="px-4 py-2 border rounded">Reviews / Feedback</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="text-xl font-bold">Best Deal Motors</div>
          <p className="text-white/70 mt-2">1626 N 2nd Street, St Charles, MO 63301</p>
          <p className="mt-2">
            <a href="tel:3144860909" className="hover:underline">📞 314-486-0909</a><br/>
            <a href="tel:3147455015" className="hover:underline">314-745-5015</a>
          </p>
        </div>
        <div>
          <div className="font-semibold">Maps</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a className="hover:underline" href="https://maps.apple.com/?address=1626%20N%202nd%20St,%20St%20Charles,%20MO%2063301" target="_blank">Apple Maps</a></li>
            <li><a className="hover:underline" href="https://www.google.com/maps?q=1626+N+2nd+Street,+St+Charles,+MO+63301" target="_blank">Google Maps</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Social</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a className="hover:underline" href="#" target="_blank">Facebook</a></li>
            <li><a className="hover:underline" href="#" target="_blank">Instagram</a></li>
            <li><a className="hover:underline" href="https://g.page/r/CUZOX0Fi3FthEBM/review" target="_blank">Google Reviews</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Store Hours</div>
          <ul className="mt-2 space-y-1 text-sm text-white/80">
            <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">© {new Date().getFullYear()} Best Deal Motors</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <FeaturedInventory />
      <Footer />
    </div>
  );
}
