import React from 'react';

const CardList = ({ title, list, renderItem }) => {
  return (
    list.length > 0 && (
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-darkest">{title}</h4>
        <hr className="border-t-2 border-gray-300 mt-2 mb-4" />
        {list.map((item, index) => (
          <div key={index} className="mb-4">
            {renderItem(item)}
          </div>
        ))}
      </div>
    )
  );
};

export default CardList;
