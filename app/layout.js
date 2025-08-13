import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = { 
  title: "Engr. Ibrahim O. Musa - CEO of Velanox Energy | U.S. Oil & Gas Visionary",
  description:
    "Discover the professional journey of Engr. Ibrahim O. Musa, CEO of Velanox Energy. Learn how his leadership is driving innovation, sustainability, and excellence in the American oil and gas industry.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://velanoxenergy.com" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Analytics/>
      </body>
    </html>
  );
}
