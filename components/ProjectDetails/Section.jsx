import React from 'react';

const Section = ({ title, desc }) => {
  return (
    <div className="py-8 px-4 md:px-10">
      <div className="section-container">
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <h3 className="section-title">{title}</h3>
        </div>

        <div className="md:w-2/3 w-full">
          <p className="section-desc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
