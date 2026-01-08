import { useState } from 'react'

export default function AskGuide() {
  const [_question] = useState('What is the best season to visit?')
  const [_isThinking] = useState(true)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Ask my Guide Anything</h2>
        <p className="text-gray-600 text-lg">
          Rexby is trained on Ása Steinars local knowledge, enabling it to answer questions just like Ása Steinars, but faster
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Chat Interface */}
        <div className="border border-gray-200 rounded-xl p-8 bg-white">
          {/* AI Message */}
          <div className="flex gap-4 mb-8">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=44&h=44&fit=crop"
              alt="AI"
              className="w-11 h-11 rounded-full object-cover flex-shrink-0"
            />
            <div className="bg-gray-100 rounded-lg p-4 max-w-xs">
              <p className="text-gray-900 font-semibold">AI Ása Steinars Digital version</p>
              <p className="text-gray-600 text-sm mt-2">
                Hi there, I am Ása Steinars Guide. I have been trained to answer travel questions just like Ása Steinars would do in person, but faster.
              </p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-4 justify-end mb-8">
            <div className="bg-blue-500 text-white rounded-lg p-4 max-w-xs">
              <p>{_question}</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=44&h=44&fit=crop"
              alt="User"
              className="w-11 h-11 rounded-full object-cover flex-shrink-0"
            />
          </div>

          {/* AI Response - Thinking */}
          {_isThinking && (
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=44&h=44&fit=crop"
                alt="AI"
                className="w-11 h-11 rounded-full object-cover flex-shrink-0"
              />
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-gray-600 text-sm">Thinking...</p>
              </div>
            </div>
          )}
        </div>

        {/* Placeholder Image */}
        <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500">Response preview</p>
          </div>
        </div>
      </div>
    </section>
  )
}
