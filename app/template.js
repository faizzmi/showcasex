'use client';
import React, { useEffect, useState } from 'react';
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Contact from '@/components/Contact';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import SplashScreen from '@/components/SplashScreen';

const Template = ({ children }) => {
  const pathName = usePathname();
  const pageName = pathName.split('/').pop();

  const [openContact, setOpenContact] = useState(false);
  const [delay, setDelay] = useState(false);
  const [showSplash, setShowSplash] = useState(pageName === "");
  const [transition, setTransition] = useState(false);
  const [prevPathName, setPrevPathName] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (pageName === "") {
      const splashTimer = setTimeout(() => {
        setShowSplash(false);
      }, 9000);

      return () => clearTimeout(splashTimer);
    }
  }, [pathName]);

  useEffect(() => {
    if (prevPathName?.startsWith('/project/') && !pathName.startsWith('/project/') || pathName.startsWith('/project/')) {
      setTransition(false);
    } else {
      setTransition(true);
    }

    setPrevPathName(pathName);
  }, [pathName, prevPathName]);

  return (
    <div>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <AnimatePresence>
          <motion.div key="main-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <NavigationBar openContact={openContact} setOpenContact={setOpenContact} className="my-6" />
            <AnimatePresence mode="wait">
              <motion.div key="template-content">
                {children}
                <Footer />
              </motion.div>
              {(transition && delay) && (
                <motion.div
                  key="motion-slide-out"
                  className="slide-out m-auto flex items-center justify-center"
                  initial={{ scaleY: 1 }}
                  animate={{ scaleY: 0 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2 className="text-white font-bold text-4xl">{pageName !== "" && pageName}</h2>
                </motion.div>
              )}
              {(transition && !delay) && (
                <motion.div
                  key="motion-slide-in"
                  className="slide-in m-auto flex items-center justify-center"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2 className="text-white font-bold text-4xl">{pageName !== "" && pageName}</h2>
                </motion.div>
              )}
            </AnimatePresence>
            <ScrollToTopButton />
            {openContact && <Contact isOpen={openContact} onClose={() => setOpenContact(false)} />}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Template;
