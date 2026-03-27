import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TekDev",
  description:
    "TekDev is a software development company that builds, fixes, and scales software quickly and reliably."
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
