import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${nunitoSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}