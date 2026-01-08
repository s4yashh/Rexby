export default function InteractiveMap() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Explore with my Map</h2>
        <p className="text-gray-600 text-lg">
          Get an interactive, playful, and easy-to-navigate map that you can personalize by adding and favoriting spots, then filter to see only what matters to you.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl h-96 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
          alt="Interactive Map"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="mt-8">
        <button className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition">
          Explore Map
        </button>
      </div>
    </section>
  )
}
