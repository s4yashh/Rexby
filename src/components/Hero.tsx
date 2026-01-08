import { norwayGuide } from '@/data/guides'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left - Image */}
        <div className="relative">
          <img
            src={norwayGuide.image}
            alt="Norway"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Right - Content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{norwayGuide.title}</h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src={norwayGuide.authorImage}
              alt={norwayGuide.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Guide by {norwayGuide.author}</span>
                {norwayGuide.isNew && (
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                    <span className="text-lg">★</span>
                    New
                  </span>
                )}
              </div>
              <span className="text-gray-600">{norwayGuide.country}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed mb-8 whitespace-pre-line">
            {norwayGuide.description}
          </p>

          {/* Button */}
          <button className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition">
            Access My Local Secrets
          </button>
        </div>
      </div>
    </section>
  )
}
