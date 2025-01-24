'use client';
import React, { useEffect, useState } from 'react';
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Contact from '@/components/Contact';
import { AnimatePresence, motion } from 'framer-motion';

const Template = ({ children }) => {
  const [openContact, setOpenContact] = useState(false);
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <NavigationBar openContact={openContact} setOpenContact={setOpenContact} className="my-6" />
      <AnimatePresence mode="wait">
        <motion.div
          key="template-content"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 3 }} 
        >
          {children}
          <Footer />
        </motion.div>
        {delay && (
          <motion.div
            key="motion-slide-in"
            className="slide-out"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        {!delay && (
          <motion.div
            key="motion-slide-out"
            className="slide-in"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>
      <ScrollToTopButton />
      {openContact && <Contact isOpen={openContact} onClose={() => setOpenContact(false)} />}
    </div>
  );
};

export default Template;
