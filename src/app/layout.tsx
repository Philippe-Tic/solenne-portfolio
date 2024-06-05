"use client"

import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ["latin"] });
export const brasika = localFont({ src: './brasika-display-trial-webfont.woff2' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
