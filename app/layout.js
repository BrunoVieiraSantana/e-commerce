import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CartProvider from "@/components/cartProvider";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "E-Rede",
  description: "Projeto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={kumbhSans.className}>
        <CartProvider>
          <div className="container">
            <Nav />
            {children}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
