import { Karla } from "next/font/google";
import "../app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-karla",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${karla.variable} antialiased`}>
      <body className="antialiased">
        <Header />
        <main className="flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}