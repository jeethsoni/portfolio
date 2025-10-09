import { Work_Sans, DM_Sans, Sora, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

import GalaxyBackground from "./components/GalaxyBackground";
import Navbar from "./components/Navbar";

// Fonts
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-sans" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"], variable: "--font-bebas" });

export const metadata = {
  title: "Jeet Soni | Software Developer",
  description: "Turning Ideas into Reality through Code and Creativity.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${workSans.variable} ${dmSans.variable} ${inter.variable} ${bebasNeue.variable} antialiased relative`}>

        <GalaxyBackground density={0.3} glowIntensity={0.1} transparent={false} speed={0.2} mouseInteraction={false} mouseRepulsion={false} twinkleIntensity={0.2} starSpeed={0.1}/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
