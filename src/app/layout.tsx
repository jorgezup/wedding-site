import type { Metadata } from "next";
import { Satisfy, Montserrat } from "next/font/google";
import "./globals.css";

const playfairDisplay = Satisfy({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: "Eiva & Jorge - Casamento",
  description: "Celebre conosco nosso casamento em 14 de Fevereiro de 2026. Encontre todas as informações sobre a cerimônia, festa e lista de presentes.",
  keywords: ["casamento", "Eiva", "Jorge", "14 de fevereiro", "2026", "cerimônia", "festa"],
  authors: [{ name: "Eiva & Jorge" }],
  openGraph: {
    title: "Eiva & Jorge - Casamento",
    description: "Celebre conosco nosso casamento em 14 de Fevereiro de 2026. Encontre todas as informações sobre a cerimônia, festa e lista de presentes.",
    type: "website",
    locale: "pt_BR",
    siteName: "Casamento Eiva & Jorge",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Casamento Eiva & Jorge - 14 de Fevereiro de 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eiva & Jorge - Casamento",
    description: "Celebre conosco nosso casamento em 14 de Fevereiro de 2026",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfairDisplay.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Casamento Eiva & Jorge",
              "description": "Celebre conosco nosso casamento em 14 de Fevereiro de 2026",
              "startDate": "2026-02-14T19:00:00-03:00",
              "endDate": "2026-02-15T02:00:00-03:00",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Local da Cerimônia e Festa",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Adamantina",
                  "addressRegion": "SP",
                  "addressCountry": "BR"
                }
              },
              "organizer": [
                {
                  "@type": "Person",
                  "name": "Eiva"
                },
                {
                  "@type": "Person", 
                  "name": "Jorge"
                }
              ],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "BRL",
                "availability": "https://schema.org/InStock",
                "url": "https://eivaejorge.vercel.app"
              },
              "image": "https://eivaejorge.vercel.app/og",
              "url": "https://eivaejorge.vercel.app"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}