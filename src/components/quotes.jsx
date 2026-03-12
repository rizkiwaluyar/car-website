export default function Quotes() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 flex flex-col items-center text-center">
      {/* Icon Quote - Warna Oranye Muda/Peach */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60" // Ukuran diperbesar
        height="60"
        viewBox="0 0 24 24"
        fill="currentColor" // Pakai fill agar lebih berisi
        className="text-orange-200 mb-8"
      >
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 8.89543 14.017 10L14.017 13M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 8.89543 3.017 10L3.017 13" />
      </svg>

      {/* Teks Quote */}
      <h3 className="text-2xl md:text-3xl font-medium italic text-slate-800 leading-relaxed max-w-2xl">
        "Driving the DB5 through the countryside was a dream come true. The
        service from Classic Drives was as impeccable as the car itself. A truly
        timeless experience."
      </h3>

      {/* Profile Section */}
      <div className="flex items-center gap-4 mt-12 text-left">
        {/* Avatar Bulat dengan Background Oranye */}
        <div className="w-14 h-14 rounded-full bg-orange-200 overflow-hidden border-2 border-orange-100">
          <img
            src="https://i.pravatar.cc/150?u=julian" // Placeholder foto
            alt="Julian"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="font-bold text-slate-900 text-lg">Julian Kensington</p>
          <p className="text-orange-600 font-bold text-xs tracking-widest uppercase">
            Collectors Club Member
          </p>
        </div>
      </div>
    </div>
  );
}
