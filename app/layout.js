import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weights: [400, 500, 600, 700],
});

const ovo = Ovo({
  subsets: ['latin'],
  weight: '400', 
});

export const metadata = {
  title: "Faiz Azmi | Software Engineer",
  description: "Faiz Azmi is a software engineer based in Kuala Lumpur, Malaysia.",
};

export default function RootLayout({ children }) {

  console.log(`
                                                                                                        
                                                 ████                                               
                                               ██   ███████ ███                                     
                                              ██     ███     ██   ███                               
                                             ██     ███      ██████  ██                             
                                       ████████     ███     ███      ██                             
                                       █     ███   ████   ████       ██                             
                                ████████      ████ █ ██  ██ █      ██████                           
                                ██     █████   ███████  ██ ██    ████    ██                         
                                 ██     ███████ ████████████  █████      ██                         
                                  ██     ██████████████████ █████       ██                          
                                    ████████ ██████████████████      ████                           
                               ████    ████████████████████████████████                             
                             ██               ███████████████████       ███                         
                              ████          ████ ████████  █████         ██                         
                                 ██████████████ ███████████ ██████████████                          
                                         ██     ████████ ██     ███                                 
                                        ██      ███ ███████      ██                                 
                                        █      ████ ███ ████     ██                                 
                                        █    ███ ██ █████  ███████                                  
                                        ██████    ██████                                            
                                                    █ ██                                            
                                                   ████                                             
                                                  ██ ██                                             
                                                                                                    
    Hi, I am Faiz, Welcome to my portfolio~
  `);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden `}>
        <NavigationBar className='my-6'/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
