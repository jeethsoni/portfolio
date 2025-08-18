import { Work_Sans, JetBrains_Mono, DM_Sans } from "next/font/google";
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

export const metadata = {
  title: "Portfolio",
  description: "Jeet Soni's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
