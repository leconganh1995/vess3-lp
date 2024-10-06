import type { Metadata } from "next";

import { MainLayout } from "@/layouts";
import { poppins } from "@/fonts/poppins";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vess3",
  description:
    "The first hybrid Account abstraction wallet to support Basic (EOA) and Smart accounts, improving security withpersonal and multisig support, and provide seamless user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/tt-octosquares-trl?styles=146083,146086,146088,146079,146077"
          rel="stylesheet"
        />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
