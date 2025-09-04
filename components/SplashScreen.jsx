'use client'
import React, { useState, useEffect, useRef } from "react";
import { easeInOut, motion } from "motion/react";

const cardsData = [
  { id: 1, color: "bg-darkest", title: "About Me", description: "Learn more about my background, skills, and passions." },
  { id: 2, color: "bg-darker", title: "Projects", description: "Explore the projects I have worked on and their impact." },
  { id: 3, color: "bg-dark", title: "Experience", description: "Discover my professional journey and achievements." },
  { id: 4, color: "bg-primary", title: "Skills", description: "View the technical and soft skills I bring to the table." },
  { id: 5, color: "bg-light", title: "Contact", description: "Reach out to me for collaborations or opportunities." },
  { id: 6, color: "bg-lightest", title: "Let's Go!", description: " " },
];

const SplashScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skipped, setSkipped] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance
  useEffect(() => {
    if (skipped) return; // stop auto-play if skipped

    timerRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < cardsData.length - 1 ? prevIndex + 1 : 0
      );
    }, 1500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, skipped]);

  // Handle skip on click/touch
  const handleSkip = () => {
    setSkipped(true);
    if (timerRef.current) clearTimeout(timerRef.current); // stop timer immediately
    setCurrentIndex(cardsData.length - 1); // jump to last card
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center bg-zinc-900 h-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: easeInOut }}
      onClick={handleSkip}
      onTouchStart={handleSkip}
    >
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-6 md:px-10 mb-10">
        <p className="text-3xl md:text-4xl font-bold text-white">Welcome to My Portfolio</p>
        <p className="mt-4 text-lg md:text-xl text-zinc-300">
          Explore my journey as a developer, my projects, and how to connect with me.
        </p>
      </div>

      <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
        {cardsData.map((card, index) => {
          const isAway = index < currentIndex;
          const angle = isAway ? -48 : -(index - currentIndex) * 10;

          return (
            <div
              key={card.id}
              className={`absolute top-1/2 left-1/2 h-[300px] w-[300px] md:h-[350px] md:w-[350px] p-6 rounded-xl shadow-xl ${card.color} transition-transform duration-500 ease-in-out`}
              style={{
                zIndex: cardsData.length - index,
                transform: isAway
                  ? `translateY(-120vh) rotate(${angle}deg)`
                  : `translate(-50%, -50%) rotate(${angle}deg)`,
              }}
            >
              <div className="flex flex-col justify-center items-center h-full text-center">
                <h3 className="text-2xl font-bold text-zinc-900">{card.title}</h3>
                <p className="mt-2 text-sm md:text-base text-zinc-800">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SplashScreen;
