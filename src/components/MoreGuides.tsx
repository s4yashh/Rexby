interface GuideCard {
  title: string
  country: string
  guide: string
  image: string
}

const moreGuides: GuideCard[] = [
  {
    title: 'Iceland Guide',
    country: 'Iceland',
    guide: 'by asasteinars',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=300&h=300&fit=crop'
  },
  {
    title: 'Adventures in Scotland',
    country: 'United Kingdom',
    guide: 'by traveltwo_',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=300&fit=crop'
  },
  {
    title: 'Ultimate Guide to New Zealand',
    country: 'New Zealand',
    guide: 'by rachstewartnz',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop'
  },
  {
    title: 'Exploring Ireland\'s Hidden Gems',
    country: 'Ireland',
    guide: 'by furstonetravels',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=300&h=300&fit=crop'
  },
  {
    title: 'Explore Lithuania',
    country: 'Lithuania',
    guide: 'by laumeieva',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=300&fit=crop'
  }
]

export default function MoreGuides() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">You may also like</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {moreGuides.map((guide, idx) => (
          <div key={idx} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition cursor-pointer">
            <div className="h-48 overflow-hidden bg-gray-200">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-2">{guide.country}</p>
              <h3 className="font-semibold text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-sm text-gray-600">{guide.guide}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-8 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition">
          Go to marketplace
        </button>
      </div>
    </section>
  )
}
