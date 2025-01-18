'use client'
import { faqLists } from '@/models/about';
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-8 px-4 md:px-10 min-h-screen">
  <div className="m-5 flex flex-col md:flex-row w-full gap-6">
    <div className="md:w-1/2 w-full p-6 flex flex-col sticky top-0 z-50">
      <p className="text-gray-600">FAQs</p>
      <h3 className="text-4xl font-semibold text-gray-800">Frequently Asked Questions</h3>
    </div>
    <div className="md:w-1/2 w-full p-6">
      <div className="space-y-4">
        {faqLists.map((faq, index) => (
          <div key={index}>
            <button
              className="w-full text-left p-4 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 flex justify-between items-center"
              onClick={() => togglePanel(index)}
            >
              <span>{faq.question}</span>
              <span className="text-gray-500">
                {activeIndex === index ? '−' : '＋'}
              </span>
            </button>
            <div
              className={`panel p-4 ${activeIndex === index ? 'block' : 'hidden'}`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default FAQ;
