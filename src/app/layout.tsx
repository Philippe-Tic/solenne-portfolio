"use client"

import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';

const inter = Inter({ subsets: ["latin"] });
const brasika = localFont({ src: './brasika-display-trial-webfont.woff2' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <style jsx global>{`
        html {
          font-family: ${brasika.style.fontFamily};
        }
        `}</style>
      </head>
      <body className={inter.className}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
