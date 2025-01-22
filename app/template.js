'use client'
import React, { useState } from 'react';
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Contact from '@/components/Contact';


const Template = ({children}) => {
  const [openContact, setOpenContact] = useState(false);

  return (
    <div>
        <NavigationBar openContact={openContact} setOpenContact={setOpenContact} className='my-6'/>
        {children}
        <Footer />
        <ScrollToTopButton />
        {openContact && <Contact isOpen={openContact} onClose={() => setOpenContact(false)} />}
    </div>
  )
}

export default Template