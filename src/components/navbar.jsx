import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-xs">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-orange-500 p-2 rounded-lg text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-car-front-icon lucide-car-front"
            >
              <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
              <path d="M7 14h.01" />
              <path d="M17 14h.01" />
              <rect width="18" height="8" x="3" y="10" rx="2" />
              <path d="M5 18v2" />
              <path d="M19 18v2" />
            </svg>
          </div>
          <h1 className="font-bold tracking-wide">CLASSIC DRIVES</h1>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-gray-600 font-semibold">
          <a href="#" className="hover:text-orange-500">
            Our Fleet
          </a>
          <a href="#" className="hover:text-orange-500">
            Services
          </a>
          <a href="#" className="hover:text-orange-500">
            Experience
          </a>
          <a href="#" className="hover:text-orange-500">
            Contact
          </a>
        </nav>

        {/* BUTTON DESKTOP */}
        <button className="hidden md:block bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600">
          Book Your Drive
        </button>

        {/* HAMBURGER */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <a href="#" className="block text-gray-600 hover:text-orange-500">
            Our Fleet
          </a>
          <a href="#" className="block text-gray-600 hover:text-orange-500">
            Services
          </a>
          <a href="#" className="block text-gray-600 hover:text-orange-500">
            Experience
          </a>
          <a href="#" className="block text-gray-600 hover:text-orange-500">
            Contact
          </a>

          <button className="w-full bg-orange-500 text-white py-2 rounded-full shadow-md">
            Book Your Drive
          </button>
        </div>
      )}
    </header>
  );
}
