import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Automation",
  description:
    "AI automation platform with premium product marketing pages, feature storytelling, pricing, learning resources, and consultation booking."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
