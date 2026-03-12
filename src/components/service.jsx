export default function Service() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Bespoke Services
      </h2>
      {/* PARENT CARD */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* cards */}
        <div className="bg-white shadow-xl px-6 py-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 cursor-pointer">
          <div className="bg-orange-500 inline-flex p-3 rounded-lg text-white">
            {/* ICONS */}
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
              class="lucide lucide-life-buoy-icon lucide-life-buoy"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m4.93 4.93 4.24 4.24" />
              <path d="m14.83 9.17 4.24-4.24" />
              <path d="m14.83 14.83 4.24 4.24" />
              <path d="m9.17 14.83-4.24 4.24" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          {/* CONTENT */}
          <h3 className="text-xl font-bold mt-4">Self-Drive Rental</h3>
          <p className="text-gray-600 mt-2">
            Take the wheel of a legend for a day or a weekend. Full insurance
            and roadside assistance included for your peace of mind.
          </p>
        </div>
        {/* CARDS */}
        <div className="bg-white shadow-xl px-6 py-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 cursor-pointer">
          <div className="bg-orange-500 inline-flex p-3 rounded-lg text-white">
            {/* ICONS */}
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
              class="lucide lucide-contact-icon lucide-contact"
            >
              <path d="M16 2v2" />
              <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
              <path d="M8 2v2" />
              <circle cx="12" cy="11" r="3" />
              <rect x="3" y="4" width="18" height="18" rx="2" />
            </svg>
          </div>
          {/* CONTENT */}
          <h3 className="text-xl font-bold mt-4">Chauffeur Service</h3>
          <p className="text-gray-600 mt-2">
            Arrive in unparalleled style. Our professional chauffeurs provide a
            seamless, elegant experience for your special journey.
          </p>
        </div>
        {/* CARDS */}
        <div className="bg-white shadow-xl px-6 py-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 cursor-pointer">
          <div className="bg-orange-500 inline-flex p-3 rounded-lg text-white">
            {/* ICONS */}
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
              class="lucide lucide-calendar-check-icon lucide-calendar-check"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="m9 16 2 2 4-4" />
            </svg>
          </div>
          {/* CONTENT */}
          <h3 className="text-xl font-bold mt-4">Film & Events</h3>
          <p className="text-gray-600 mt-2">
            The perfect centerpiece for weddings, high-fashion photoshoots, and
            cinematic productions. Logistics handled by our team.
          </p>
        </div>
      </div>
    </div>
  );
}
