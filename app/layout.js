import { Work_Sans, DM_Sans, Sora, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

// ⬇️ Import the client wrapper (this is allowed)
import GalaxyBackground from "./components/GalaxyBackground";
// Fonts
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-sans" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"], variable: "--font-bebas" });

export const metadata = {
  title: "Portfolio",
  description: "Jeet Soni's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Make body relative so the absolute background positions correctly */}
      <body className={`${workSans.variable} ${dmSans.variable} ${inter.variable} ${bebasNeue.variable} antialiased relative`}>
        {/* Global Galaxy Background (client) */}
        <GalaxyBackground density={0.5} glowIntensity={0.3} transparent={false} />

        {/* App content */}
        {children}
      </body>
    </html>
  );
}
