import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const manropeRegular = localFont({
  src: "./fonts/Manrope-Regular.woff2",
  variable: "--font-manrope-regular",
  display: "swap",
});

const manropeMedium = localFont({
  src: "./fonts/Manrope-Medium.woff2",
  variable: "--font-manrope-medium",
  display: "swap",
});

const manropeSemibold = localFont({
  src: "./fonts/Manrope-Semibold.woff2",
  variable: "--font-manrope-semibold",
  display: "swap",
});

const manropeBold = localFont({
  src: "./fonts/Manrope-Bold.woff2",
  variable: "--font-manrope-bold",
  display: "swap",
});

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.woff2",
  variable: "--font-poppins-regular",
  display: "swap",
});

const poppinsSemibold = localFont({
  src: "./fonts/Poppins-SemiBold.woff2",
  variable: "--font-poppins-semibold",
  display: "swap",
});

const poppinsBold = localFont({
  src: "./fonts/Poppins-Bold.woff2",
  variable: "--font-poppins-bold",
  display: "swap",
});

export const metadata = {
  title: "Sí a Todo | Créditos rápidos y garantizados",
  description:
    "En Sí te Presto te ayudamos a cumplir tus metas con créditos accesibles, rápidos y respaldados. Tu futuro financiero empieza aquí.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?=4"],
  },
  openGraph: {
    title: "Sí te Presto | Créditos rápidos y garantizados",
    description:
      "En Sí te Presto te ayudamos a cumplir tus metas con créditos accesibles, rápidos y respaldados. Tu futuro financiero empieza aquí.",
    url: "https://financiera-six.vercel.app",
    siteName: "Sí te Presto",
    images: [
      {
        url: "https://financiera-six.vercel.app/og-siatodo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manropeRegular.variable} ${manropeSemibold.variable} ${manropeBold.variable} ${poppinsSemibold.variable} ${poppinsBold.variable} ${poppinsRegular.variable} ${manropeMedium.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
