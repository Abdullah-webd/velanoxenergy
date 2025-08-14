import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Velanox Energy | Innovation in Oil & Gas Solutions",
  description:
    "Velanox Energy drives innovation, sustainability, and excellence in the global oil and gas industry. Learn about our projects, solutions, and vision for the future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="u0RwejHQzwl3IxnIt5CM4mSJgGRlHZBOxCxXw9yfYQI"
        />
        <link rel="canonical" href="https://velanoxenergy.com" />

        {/* Open Graph */}
        <meta property="og:title" content="Velanox Energy | Innovation in Oil & Gas Solutions" />
        <meta property="og:description" content="Velanox Energy drives innovation, sustainability, and excellence in the global oil and gas industry." />
        <meta property="og:url" content="https://velanoxenergy.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://velanoxenergy.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Velanox Energy | Innovation in Oil & Gas Solutions" />
        <meta name="twitter:description" content="Velanox Energy drives innovation, sustainability, and excellence in the global oil and gas industry." />
        <meta name="twitter:image" content="https://velanoxenergy.com/og-image.jpg" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
