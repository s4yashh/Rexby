import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How do I access the Guide and Map?',
    answer: 'Once you purchase access, you can download the guide and map directly to your device or access it through our web platform.'
  },
  {
    question: 'Do I need internet connection?',
    answer: 'You can access the offline version on your device without internet, though some features like the AI guide require connectivity.'
  },
  {
    question: 'How long will I have access?',
    answer: 'You have lifetime access to your purchased guides. They will be updated regularly with new content.'
  },
  {
    question: 'Can I share it with my travel buddy?',
    answer: 'Yes, you can share guides with family and travel companions through shared access links.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Your questions, answered</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition cursor-pointer"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold text-gray-900 text-left flex-1">{item.question}</h3>
              <svg
                className={`w-6 h-6 text-gray-400 flex-shrink-0 transition ${
                  openIndex === idx ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            {openIndex === idx && (
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="text-center pt-8 border-t border-gray-200">
        <p className="text-gray-600 mb-4 font-medium">Unclear? Ask me a question</p>
        <input
          type="text"
          placeholder="Type your question..."
          className="w-full max-w-2xl mx-auto block px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>
    </section>
  )
}
