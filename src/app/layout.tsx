import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Uttam Motors | Premium Automotive Retail & Accessories',
  description: 'Uttam Motors is your trusted partner for high-quality car and bike accessories, parts, and expert services in Rajkot. Explore our extensive range and experience automotive excellence.',
  keywords: ["Uttam Motors, automotive retail, car accessories, bike accessories, auto parts, car service, bike service, Rajkot, Gujarat, premium automotive, car detailing, performance parts"],
  openGraph: {
    "title": "Uttam Motors | Premium Automotive Retail & Accessories",
    "description": "Your ultimate destination for quality car and bike products and services in Rajkot. Driving excellence for over two decades.",
    "url": "https://www.uttam-motors.com",
    "siteName": "Uttam Motors",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/back-black-car-with-red-rear-light_23-2147963062.jpg",
        "alt": "Luxury sports car at Uttam Motors"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Uttam Motors | Premium Automotive Retail & Accessories",
    "description": "Your ultimate destination for quality car and bike products and services in Rajkot. Driving excellence for over two decades.",
    "images": [
      "http://img.b2bpic.net/free-photo/back-black-car-with-red-rear-light_23-2147963062.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
