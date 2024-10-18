import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { nunito } from "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
