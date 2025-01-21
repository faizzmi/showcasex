import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden `}>
       <main>{children}</main>
      </body>
    </html>
  );
}
