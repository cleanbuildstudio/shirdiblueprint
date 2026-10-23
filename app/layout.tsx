import type { Metadata } from "next";
import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Blueprint Shirdi | Private Balinese Villas",
  description: "A limited private collection of 50 Balinese villas with land ownership in Shirdi Central.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${bebasNeue.variable}`}>
      <body className={`${montserrat.className} antialiased min-h-screen bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}