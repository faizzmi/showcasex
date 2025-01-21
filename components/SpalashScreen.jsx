import React, { useState, useEffect } from "react";

const cardsData = [
  { id: 1, color: "bg-red-500" },
  { id: 2, color: "bg-green-500" },
  { id: 3, color: "bg-blue-500" },
  { id: 4, color: "bg-yellow-500" },
  { id: 5, color: "bg-cyan-500" },
];

const SplashScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < cardsData.length ? prevIndex + 1 : 0
      );
    }, 1500);

    return () => clearTimeout(interval);
  }, [currentIndex]);

  return (
    <div className="h-screen flex bg-gray-100">
      <div className="w-1/2 flex justify-center items-center sticky top-0">
        <p className="text-xl font-bold">Left</p>
      </div>

      <div className="w-1/2 relative sticky top-0">
        {cardsData.map((card, index) => {
          const isAway = index < currentIndex;
          const angle = isAway ? -48 : -(index - currentIndex) * 10;

          return (
            <div
              key={card.id}
              className={`absolute top-1/2 left-1/2 h-[350px] w-[350px] rounded-xl ${card.color} transition-transform duration-500 ease-in-out`}
              style={{
                zIndex: cardsData.length - index,
                transform: isAway
                  ? `translateY(-120vh) rotate(${angle}deg)`
                  : `translate(-50%, -50%) rotate(${angle}deg)`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SplashScreen;
