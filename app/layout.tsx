import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Guild Depths",
  description: "Raid Guild cohort onboarding prototype"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
