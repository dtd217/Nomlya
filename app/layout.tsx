import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

const nunitoSans = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomlya",
  description: "Nomlya - A modern booking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-kantu="1">
      <body className={`${nunitoSans.className} antialiased`}>
        <ClientOnly>
          <Modal isOpen={true} title="Hello" actionLabel="CLICK HERE"  />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}