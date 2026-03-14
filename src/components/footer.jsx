export default function Footer() {
  return (
    <div className="bg-gray-100 py-12 px-4">
      {/* PARENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        <div className="">
          <div className="flex gap-3 mt-8 lg:mt-0 items-center">
            {/* icon */}
            <div className="bg-orange-500 inline-flex p-3 rounded-lg text-white">
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
            {/* CONTENT */}
            <h3 className="font-bold tracking-wider">CLASSIC DRIVES</h3>
          </div>
          <p className="text-gray-500 mt-4 max-w-md text-base">
            Preserving the golden age of motoring for the modern enthusiast.
            Luxury, legacy, and the open road.
          </p>

          {/* ICONS */}
          <div className="flex">
            <div className="mt-4 bg-gray-200 inline-flex p-3 rounded-lg text-black">
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
                class="lucide lucide-loader-pinwheel-icon lucide-loader-pinwheel"
              >
                <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
                <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
                <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div className="mt-4 bg-gray-200 inline-flex p-3 rounded-lg text-black ml-4">
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
                class="lucide lucide-share2-icon lucide-share-2"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="mt-8 lg:mt-0">
          <h3 className="font-bold">QUICK LINKS</h3>
          <ul className="mt-4 space-y-4 text-base">
            <li>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                Search Inventory
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                Booking Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                Gift Vouchers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                Membership
              </a>
            </li>
          </ul>
        </div>
        {/* 3 */}
        <div className="mt-8 lg:mt-0">
          <h3 className="font-bold">LOCATIONS</h3>
          <ul className="mt-4 space-y-4 text-base">
            <li>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                London Showroom
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                Moncaco Hub
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                Beverly Hills Garage
              </a>
            </li>
          </ul>
        </div>
        {/* 4 */}
        <div className="mt-8 lg:mt-0">
          <h3 className="font-bold">NEWSLETTER</h3>
          <p className="text-gray-500 mt-4 mb-6 max-w-sm">
            Subscribe to receive updates, offers, and exclusive content.
          </p>
          <div className="flex flex-col max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-orange-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-8 text-center">
        © 2024 Classic Drives Heritage Group. All rights reserved.
      </p>
    </div>
  );
}
