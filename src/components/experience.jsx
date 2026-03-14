export default function Experience() {
  return (
    <div className="bg-amber-50">
      <div className="max-w-7xl mx-auto py-20 px-4 ">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">The Collection</h2>
          <p className="text-gray-500">
            Meticulously maintained masterpieces ready for the road
          </p>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-700 font-bold text-sm"
          >
            View All Vehicles
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD START */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 cursor-pointer">
            {/* IMAGE SECTION */}
            <div className="relative">
              <img
                src="4.jpg" // Ganti dengan path gambar kamu
                alt="Car"
                className="w-full h-64 object-cover" // h-64 agar tinggi seragam dan pas
              />
              <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider text-gray-700">
                Available
              </span>
            </div>

            {/* CONTENT SECTION */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  1967 Ford Mustang{" "}
                  <span className="text-gray-400 font-medium text-sm ml-1">
                    Fastback
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                <span className="flex items-center gap-1">⚙️ Manual</span>
                <span className="flex items-center gap-1">👤 2 Seats</span>
              </div>

              <hr className="border-gray-100 mb-6" />

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-orange-600">
                    $450
                  </span>
                  <span className="text-gray-400 text-sm ml-1">/ day</span>
                </div>
                <button className="bg-[#121a2e] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-black transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          {/* CARD END */}

          {/* CARD START */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-3 cursor-pointer">
            {/* IMAGE SECTION */}
            <div className="relative">
              <img
                src="5.jpg" // Ganti dengan path gambar kamu
                alt="Car"
                className="w-full h-64 object-cover" // h-64 agar tinggi seragam dan pas
              />
              <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider text-gray-700">
                Available
              </span>
            </div>

            {/* CONTENT SECTION */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Aston Martin DB5{" "}
                  <span className="text-gray-400 font-medium text-sm ml-1">
                    Fastback
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                <span className="flex items-center gap-1">⚙️ Manual</span>
                <span className="flex items-center gap-1">👤 4 Seats</span>
              </div>

              <hr className="border-gray-100 mb-6" />

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-orange-600">
                    $1,200
                  </span>
                  <span className="text-gray-400 text-sm ml-1">/ day</span>
                </div>
                <button className="bg-[#121a2e] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-black transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          {/* CARD END */}

          {/* CARD START */}
          <div className="bg-white shadow-lg rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-3 cursor-pointer">
            {/* IMAGE SECTION */}
            <div className="relative">
              <img
                src="6.jpg" // Ganti dengan path gambar kamu
                alt="Car"
                className="w-full h-64 object-cover" // h-64 agar tinggi seragam dan pas
              />
              <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider text-gray-700">
                Available
              </span>
            </div>

            {/* CONTENT SECTION */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Jaguar E-Type Series 1{" "}
                  <span className="text-gray-400 font-medium text-sm ml-1">
                    Fastback
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                <span className="flex items-center gap-1">⚙️ Manual</span>
                <span className="flex items-center gap-1">👤 2 Seats</span>
              </div>

              <hr className="border-gray-100 mb-6" />

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-orange-600">
                    $650
                  </span>
                  <span className="text-gray-400 text-sm ml-1">/ day</span>
                </div>
                <button className="bg-[#121a2e] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-black transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          {/* CARD END */}
        </div>
      </div>
    </div>
  );
}
