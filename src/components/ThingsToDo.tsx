interface ThingToDoItem {
  title: string
  category: string
  image: string
}

const thingsToDo: ThingToDoItem[] = [
  {
    title: 'One of my favorite spots',
    category: 'Sightseeing',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
  },
  {
    title: 'Swing with amazing views',
    category: 'Sightseeing',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop'
  },
  {
    title: 'Beautiful view point',
    category: 'Hike',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
  },
  {
    title: 'Kayak is a must',
    category: 'Activity',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop'
  },
  {
    title: 'Walk around a beautiful old fishing town',
    category: 'Sightseeing',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
  }
]

export default function ThingsToDo() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">161 things to do</h2>
        <p className="text-gray-600 text-lg">
          Get a curated list of all the best things to do with exact location, detailed info and inspiring content
        </p>
      </div>

      {/* Carousel - showing 5 items in a scrollable way */}
      <div className="space-y-6 mb-8">
        {thingsToDo.map((item, idx) => (
          <div key={idx} className="flex gap-6 items-center p-4 hover:bg-gray-50 rounded-lg transition cursor-pointer">
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-24 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <span className="inline-block text-sm font-semibold text-gray-600 mb-2">{item.category}</span>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            </div>
            <svg className="w-6 h-6 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>

      <button className="px-8 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition">
        Preview
      </button>
    </section>
  )
}
