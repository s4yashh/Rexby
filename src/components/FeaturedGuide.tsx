interface FeaturedGuideProps {
  title: string
  country: string
  author: string
  authorImage: string
  description: string
  isNew: boolean
  image: string
}

export default function FeaturedGuide({
  title,
  country,
  author,
  authorImage,
  description,
  isNew,
  image
}: FeaturedGuideProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left - Back Button */}
        <div className="lg:col-span-2">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Image */}
        <div className="lg:col-span-2 mb-8">
          <img
            src={image}
            alt={title}
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">{title}</h1>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={authorImage}
                  alt={author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">Guide by {author}</span>
                    {isNew && (
                      <span className="inline-flex items-center gap-1 text-sm">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold">New</span>
                      </span>
                    )}
                  </div>
                  <span className="text-gray-600">{country}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition">
                Preview
              </button>
              <button className="flex-1 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition">
                Get Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
