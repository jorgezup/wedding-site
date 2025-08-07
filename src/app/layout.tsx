import type { Metadata } from "next";
import { Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Eiva & Jorge - Casamento",
    description: "Celebre conosco nosso casamento em 14 de Fevereiro de 2026",
  },
  icons: {
    icon: [
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
        className={`${greatVibes.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}