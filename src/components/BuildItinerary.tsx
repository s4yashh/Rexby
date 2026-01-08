export default function BuildItinerary() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Build Itinerary with my Spots</h2>
          <p className="text-gray-600 text-lg mb-8">
            Start with a pre-made itinerary as a template, or build your own from scratch by using all the listed things to do and adding your own
          </p>
          <button className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition">
            Build Now
          </button>
        </div>

        {/* Right - Image */}
        <div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl h-96 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611114465882-9e200267ce12?w=400&h=400&fit=crop"
              alt="Itinerary Builder"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
        </div>
      </div>

      {/* Guide Profile Card - Below Builder */}
      <div className="mt-16 pt-16 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Card */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-12 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=224&h=224&fit=crop"
              alt="Ása Steinars"
              className="w-56 h-56 rounded-full object-cover"
            />
          </div>

          {/* Right - Bio */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Ása Steinars</h3>
            <p className="text-gray-600 mb-6">Travel Business</p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Ása Steinars is an adventure photographer and videographer from Iceland. Growing up in the north, surrounded by extreme landscapes and forever changing weather has given her a tight bond to nature and its forces. This you can clearly see in her photography. She works as a full time content creator, helping people to travel Iceland like she does. She has a total following of almost 2 million across her social media platforms.
            </p>

            <div className="flex gap-4 mb-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">TikTok</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Website</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Storefront</a>
            </div>

            <div className="space-y-2 text-sm text-gray-600 mb-8">
              <p>
                <span className="font-semibold text-gray-900">Iceland</span> · <span className="font-semibold text-gray-900">Norway</span>
              </p>
              <p>Guide by Ása Steinars</p>
              <p>Joined in April 2022</p>
            </div>

            <button className="px-8 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition">
              Message
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
