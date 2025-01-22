'use client';
import { faqLists } from '@/models/about';
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="section bg-zinc-900 text-white">
      <div className="flex flex-col md:flex-row w-full gap-4 pb-20">
        <div className="md:w-1/2 w-full flex flex-col px-6">
          <p className="text-subtitle sticky top-16 z-10 text-zinc-300">FAQs</p>
          <h3 className="text-title sticky top-24 py-4 z-10 text-2xl font-semibold text-zinc-100">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="space-y-4">
            {faqLists.map((faq, index) => (
              <div key={index}>
                <hr className="border-t-1 border-zinc-600 my-2" />
                <div className="rounded-lg hover:bg-zinc-800">
                  <button
                    className="accordion-button text-left w-full flex justify-between items-center py-3 px-4 text-lg font-medium text-gray-200 hover:text-gray-100"
                    onClick={() => togglePanel(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-gray-300">
                      {activeIndex === index ? '−' : '＋'}
                    </span>
                  </button>

                  <div
                    className={`accordion-content  ${
                      activeIndex === index ? 'block' : 'hidden'
                    } px-4 py-2`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
            <hr className="border-t-1 border-zinc-600 my-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
