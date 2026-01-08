import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Rexby</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Explore</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Guides</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Blog</a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Language Selector */}
            <button className="hidden md:flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 1a11 11 0 110 22 11 11 0 010-22z" />
              </svg>
            </button>

            {/* Login Button */}
            <button className="hidden md:block px-6 py-2 text-gray-900 font-medium hover:bg-gray-100 rounded-lg transition">
              Log in
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4 pt-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Explore</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Guides</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Blog</a>
              <button className="px-6 py-2 text-gray-900 font-medium hover:bg-gray-100 rounded-lg transition w-full text-left">
                Log in
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
