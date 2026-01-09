export default function Itinerary() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
      <div className="grid grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1 itinerary</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Get expertly curated itineraries that help you organise all the 'things to do' in an ideal time order
          </p>
          <a href="#" className="underline text-gray-900 font-semibold text-sm hover:text-gray-700">
            Preview
          </a>
        </div>

        {/* Right Column */}
        <div className="flex gap-4">
          {/* Map Card */}
          <div className="flex-1 rounded-xl overflow-hidden h-64 flex items-end justify-start p-4 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=320&fit=crop)'}}>
            <div className="text-white">
              <p className="text-xs font-semibold mb-1">8 days</p>
              <p className="text-lg font-bold">Lofoten Road Trip</p>
            </div>
          </div>

          {/* Preview Card */}
          <div className="flex-1 rounded-xl overflow-hidden h-64 border border-gray-300 flex items-center justify-center bg-white">
            <p className="font-semibold text-gray-900">Preview</p>
          </div>
        </div>
      </div>
    </section>
  )
}
