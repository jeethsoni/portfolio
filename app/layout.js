import { Work_Sans, DM_Sans, Sora, Inter } from "next/font/google";
import "./globals.css";

// Body font
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Headings font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


export const metadata = {
  title: "Portfolio",
  description: "Jeet Soni's Portfolio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${dmSans.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
