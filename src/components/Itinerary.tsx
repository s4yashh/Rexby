export default function Itinerary() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">1 itinerary</h2>
        <p className="text-gray-600 text-lg">
          Get expertly curated itineraries that help you organise all the 'things to do' in an ideal time order
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-semibold text-gray-600 mb-2 block">8 days</span>
              <h3 className="text-2xl font-bold text-gray-900">Lofoten Road Trip</h3>
            </div>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button className="px-8 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition">
          Preview
        </button>
      </div>
    </section>
  )
}
