import Container from "../components/Container";
import { Inter } from "next/font/google";
import "./globals.css";

import { ReactLenis } from "@/hooks/useLenis";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agung Rosyandi",
  description: "portfolio V2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${inter.className} bg-[#ffffff] text-[#464646]`}>
          <Container>
            {children} <Footer />
          </Container>
        </body>
      </ReactLenis>
    </html>
  );
}
