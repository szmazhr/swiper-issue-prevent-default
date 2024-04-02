import type { Metadata } from "next";
import ThemeProvider from "@/ThemeProvider";

export const metadata: Metadata = {
  title: "SwiperJS issue Unable to preventDefault inside passive event listener invocation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>

      <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
