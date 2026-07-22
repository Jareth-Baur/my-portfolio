import type { Metadata } from "next";

import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Jareth Baur | Developer Portfolio",
  description:
    "Portfolio of Jareth Baur — Full Stack, Mobile, and AI Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
