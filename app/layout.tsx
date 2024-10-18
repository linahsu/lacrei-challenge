"use client";

import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { nunito } from "./ui/fonts";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <html lang="pt-br">
        <body className={`loadingBody ${nunito.className} antialiased`}>
          <Image src="/logo.svg" alt="logo" width={400} height={400} />
          <p>Carregando...</p>
        </body>
      </html>
    )
  }

  return (
    <html lang="pt-br">
      <body className={`${nunito.className} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
