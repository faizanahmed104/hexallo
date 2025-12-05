import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hexallo",
  description: "Discover, book & enjoy what's happening around you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
