'use client';
import { faqLists } from '@/models/about';
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="section">
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="md:w-1/2 w-full flex flex-col px-6">
          <p className="text-subtitle">FAQs</p>
          <h3 className="text-title">Frequently Asked Questions</h3>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="space-y">
            {faqLists.map((faq, index) => (
              <div key={index}>
              <hr className='border-t-1 border-gray-300 my-2' />
              <div className='rounded-lg hover:bg-gray-300'>
                <button
                  className="accordion-button"
                  onClick={() => togglePanel(index)}
                >
                  <span>{faq.question}</span>
                  <span className="text-gray-500">
                    {activeIndex === index ? '−' : '＋'}
                  </span>
                </button>

                <div
                  className={`accordion-content  ${
                    activeIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
              </div>
            ))}
            <hr className='border-t-1 border-gray-300 my-2' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
