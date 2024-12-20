'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "the quick fox jumps over the lazy dog",
    answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
  },
  {
    question: "the quick fox jumps over the lazy dog",
    answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
  }
]

export default function FAQAndTrialSection() {
  const [expandedItems, setExpandedItems] = useState<boolean[]>(new Array(faqs.length).fill(true))

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => {
      const newState = [...prev]
      newState[index] = !newState[index]
      return newState
    })
  }

  return (
    <section className="w-full bg-white font-montserrat">
      <div className="container mx-auto px-4 max-w-[1050px] pb-10">
        {/* FAQ Section */}
        <div className="mb-32">
          <div className="mb-12 text-center">
            <h2 className="text-[#252B42] text-[40px] font-bold mb-4">
              Pricing FAQs
            </h2>
            <p className="text-[#737373] text-[20px] leading-[30px] max-w-[552px] mx-auto">
              Problems trying to resolve the conflict between 
              the two major realms of Classical physics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-[30px] gap-y-[30px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-[9px] transition-all duration-300 ease-in-out"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex gap-5 cursor-pointer">
                  <div className="flex-shrink-0 mt-1">
                    <ChevronRight 
                      className={`w-[9px] h-4 text-[#23A6F0] transition-transform duration-300 ${
                        expandedItems[index] ? 'transform rotate-90' : ''
                      }`} 
                    />
                  </div>
                  <div>
                    <h3 className="text-[#252B42] font-bold text-[16px] leading-[24px] mb-[5px]">
                      {faq.question}
                    </h3>
                    <p className={`text-[#737373] text-[14px] leading-[20px] overflow-hidden transition-all duration-300 ${
                      expandedItems[index] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#737373] text-[20px] leading-[30px] mt-12">
            Haven't got your answer? Contact our support
          </p>
        </div>

        {/* Trial Section */}
        <div className=" flex flex-col items-center">
          <div className="max-w-[547px] text-center mb-[30px]">
            <h2 className="text-[40px] font-bold text-[#252B42] leading-[50px] mb-[30px]">
              Start your 14 days free trial
            </h2>
            <p className="text-[14px] text-[#737373] leading-[20px] mb-[30px] max-w-[411px] mx-auto">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
            </p>
            <Button 
              className="bg-[#23A6F0] text-white font-bold text-[14px] px-10 py-[15px] h-[52px] mb-[36px]"
            >
              Try it free now
            </Button>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex gap-[34px] items-center">
            <Link href="#" className="w-[30px] h-[30px]">
              <svg className="w-full h-full text-[#55ACEE]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
              </svg>
            </Link>
            <Link href="#" className="w-[30px] h-[30px]">
              <svg className="w-full h-full text-[#395185]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link href="#" className="w-[30px] h-[30px]">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </Link>
            <Link href="#" className="w-[30px] h-[30px]">
              <svg className="w-full h-full text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

