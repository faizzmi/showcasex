import React from 'react';
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";


const Template = ({children}) => {
  return (
    <div>
        <NavigationBar className='my-6'/>
        {children}
        <Footer />
        <ScrollToTopButton />
    </div>
  )
}

export default Template