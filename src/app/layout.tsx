import type { Metadata } from "next";
import logo from "../../public/logo.png";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { Footer, Navbar } from "@/layout";
import { SmoothScroll } from "@/components";

export const metadata: Metadata = {
  title: "Stripe Clone | Financial Infrastructure to Grow Revenue",
  description:
    "Build financial products and scale revenue with Stripe's unified APIs and tools trusted by millions of businesses.",
  icons: {
    icon: logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <MantineProvider>
          <SmoothScroll />
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
