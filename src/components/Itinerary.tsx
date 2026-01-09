export default function Itinerary() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
      <div className="grid grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">1 itinerary</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Get expertly curated itineraries that help you organise all the 'things to do' in an ideal time order
          </p>
          <button className="px-6 py-2 border border-gray-900 text-gray-900 font-semibold rounded hover:bg-gray-50 transition">
            Preview
          </button>
        </div>

        {/* Right Column */}
        <div className="flex gap-6">
          {/* Map Card */}
          <div className="flex-1 rounded-lg overflow-hidden bg-gray-300 h-80 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
              <div className="text-center">
                <div className="text-white text-sm font-semibold mb-2">Map Image</div>
              </div>
            </div>
          </div>

          {/* Itinerary Card */}
          <div className="flex-1 rounded-lg overflow-hidden bg-gray-100 h-80 flex flex-col justify-end p-6">
            <div className="text-white">
              <span className="text-sm font-semibold block mb-2">8 Days</span>
              <h3 className="text-xl font-bold">Lofoten Road Trip</h3>
            </div>
          </div>

          {/* Preview Button Card */}
          <div className="flex-1 rounded-lg overflow-hidden bg-gray-200 h-80 flex items-center justify-center border border-gray-300">
            <button className="px-6 py-3 border border-gray-900 text-gray-900 font-semibold rounded hover:bg-gray-50 transition">
              Preview
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
