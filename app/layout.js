import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Engr. Ibrahim O. Musa - CEO of Velanox Energy | Visionary Oil & Gas Leader",
  description:
    "Explore the inspiring journey of Engr. Ibrahim O. Musa, the CEO of Velanox Energy. Discover his mission to lead sustainable energy development across Africa and the USA, driving innovation in oil and gas infrastructure.",
  keywords: [
    "Engr. Ibrahim O. Musa",
    "Velanox Energy CEO",
    "Oil and Gas Executive",
    "African Energy Leader",
    "Nigerian CEO",
    "Velanox Energy",
    "Petroleum Industry",
    "Oil and Gas Visionary",
    "Energy Leadership Africa",
    "Energy Innovation",
  ],
  openGraph: {
    title: "Meet Engr. Ibrahim O. Musa - Visionary CEO of Velanox Energy",
    description:
      "Learn about the leadership, values, and vision of Engr. Ibrahim O. Musa, who is revolutionizing the energy industry with Velanox Energy.",
    type: "profile",
    profile: {
      firstName: "Ibrahim",
      lastName: "Musa",
      username: "engr-ibrahim-musa",
      gender: "male",
    },
    locale: "en_US",
    url: "https://velanoxenergy.com/ceo", // Replace with actual URL of the CEO page
    images: [
      {
        url: "https://media.istockphoto.com/id/166091073/photo/technician-in-uniform-and-hard-hat-working-on-a-machinery.jpg?s=612x612&w=0&k=20&c=AGDulP9luXhq3cXbjFz5QPfaqG73lNj9RWKKYVeYiJ8=", // Replace with real image
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
      "Get to know Engr. Ibrahim O. Musa, the man driving energy transformation across Africa and the U.S. as CEO of Velanox Energy.",
    images: ["https://media.istockphoto.com/id/166091073/photo/technician-in-uniform-and-hard-hat-working-on-a-machinery.jpg?s=612x612&w=0&k=20&c=AGDulP9luXhq3cXbjFz5QPfaqG73lNj9RWKKYVeYiJ8="],
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
