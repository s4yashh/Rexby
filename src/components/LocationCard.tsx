interface LocationCardProps {
  name: string
  category: string
  rating: number
  reviews: number
  image: string
}

export default function LocationCard({
  name,
  category,
  rating,
  reviews,
  image
}: LocationCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group cursor-pointer">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Content on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-yellow-300">★</span>
            <span className="font-semibold">{rating.toFixed(1)}</span>
            <span className="text-white/80">({reviews.toLocaleString()})</span>
          </div>
        </div>
      </div>
    </div>
  )
}
