export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-lg font-bold text-gray-900">REXBY</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition">About us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Start exploring</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Become a travel creator</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-2 flex items-end">
            <button className="text-gray-600 hover:text-gray-900 transition font-medium text-sm">
              Log in
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500">© 2024 Rexby. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
