import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ["100", "200","300","400","600"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Shop.co",
  description: "e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
