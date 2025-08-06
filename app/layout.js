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
  keywords: [
    "Engr. Ibrahim O. Musa",
    "Velanox Energy CEO",
    "Oil and Gas Executive USA",
    "American Energy Industry",
    "Oil and Gas Leadership",
    "Energy Innovation",
    "U.S. Petroleum Sector",
    "Velanox Energy",
    "Energy Executive Profile"
  ],
  openGraph: {
    title: "Engr. Ibrahim O. Musa - CEO of Velanox Energy",
    description:
      "Explore the leadership, innovation, and vision of Engr. Ibrahim O. Musa, the CEO guiding Velanox Energy's impact across the United States energy sector.",
    type: "profile",
    profile: {
      firstName: "Ibrahim",
      lastName: "Musa",
      username: "engr-ibrahim-musa",
      gender: "male",
    },
    locale: "en_US",
    url: "https://velanoxenergy.com/ceo", // <-- make sure this matches your actual route
    images: [
      {
        url: "https://media.istockphoto.com/id/166091073/photo/technician-in-uniform-and-hard-hat-working-on-a-machinery.jpg?s=612x612&w=0&k=20&c=AGDulP9luXhq3cXbjFz5QPfaqG73lNj9RWKKYVeYiJ8=",
        width: 1200,
        height: 630,
        alt: "Engr. Ibrahim O. Musa - CEO of Velanox Energy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engr. Ibrahim O. Musa - CEO of Velanox Energy",
    description:
      "Meet Engr. Ibrahim O. Musa, the visionary behind Velanox Energy, transforming the U.S. oil and gas industry through innovation and strategic leadership.",
    images: [
      "https://media.istockphoto.com/id/166091073/photo/technician-in-uniform-and-hard-hat-working-on-a-machinery.jpg?s=612x612&w=0&k=20&c=AGDulP9luXhq3cXbjFz5QPfaqG73lNj9RWKKYVeYiJ8="
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://velanoxenergy.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Engr. Ibrahim O. Musa",
            jobTitle: "Chief Executive Officer",
            worksFor: {
              "@type": "Organization",
              name: "Velanox Energy",
              url: "https://velanoxenergy.com",
            },
            image: "https://media.istockphoto.com/id/166091073/photo/technician-in-uniform-and-hard-hat-working-on-a-machinery.jpg?s=612x612&w=0&k=20&c=AGDulP9luXhq3cXbjFz5QPfaqG73lNj9RWKKYVeYiJ8=",
            sameAs: [
              "https://linkedin.com/in/ibrahimomusa",
              "https://velanoxenergy.com/ceo",
            ],
            nationality: "American",
            description:
              "Engr. Ibrahim O. Musa is the CEO of Velanox Energy, a United States-based oil and gas company known for its commitment to innovation, sustainability, and global energy leadership.",
          })}
        </script>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
