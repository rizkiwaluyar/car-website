export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="relative">
        <img
          src="/hero.jpg"
          className="w-[200vh] h-[60vh] md:h-[70vh] lg:h-[75vh] object-cover rounded-3xl"
        />

        <div className="absolute top-10 left-10 text-white lg:top-20 lg:left-20">
          <p className="text-orange-500 font-bold mb-4 lg:text-xl">EST. 1965</p>

          <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
            The Art of
            <span className="text-orange-500 italic block">the Drive</span>
          </h1>

          <p className="text-slate-300 mt-4 lg:text-lg lg:max-w-xl">
            Experience the nostalgia and luxury of a bygone era with our curated
            collection of legendary vintage automobiles. From coastal cruises to
            grand entrances.
          </p>

          {/* BUTTON */}
          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 px-8 py-4 rounded-full">
              Explore Fleet
            </button>

            <button className="bg-white/10 border border-white/40 backdrop-blur-sm text-white px-6 py-3 rounded-full">
              Watch Film
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
