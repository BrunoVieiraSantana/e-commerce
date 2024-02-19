import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CartProvider from "@/components/cartProvider";
import { headers } from "next/dist/client/components/headers";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "E-Rede",
  description: "Projeto",
};

export default async function RootLayout({ children }) {
  const headersList = headers()
  const pathname = headersList.get("x-invoke-path") || "";
  const specificRoute = ["/signin", "/signup"]

  console.log("pathname:", pathname);
  console.log("specificRoute:", specificRoute);

  return (
    <html lang="pt-BR">
      <body className={kumbhSans.className}>
        <CartProvider>
          <div className="container">
            {pathname !== specificRoute && <Nav />}
            {children}
            {pathname !== specificRoute && <Footer />}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
