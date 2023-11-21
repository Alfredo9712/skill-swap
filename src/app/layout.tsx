import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import NextAuthProvider from "@/components/providers/NextAuthProvider";
import Navbar from "@/components/ui/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={roboto.className}>
          <div className="flex justify-center sm:px-5 md:px-10 ">
            <div className=" w-full md:max-w-5xl lg:max-w-7xl ">
              <Navbar />
              {children}
            </div>
          </div>
        </body>
      </NextAuthProvider>
    </html>
  );
}
