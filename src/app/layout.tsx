import type { Metadata } from "next";
import logo from "../../public/logo.png";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Footer, Navbar } from "@/layout";
import { SmoothScroll } from "@/components";
import '@mantine/core/styles.css';

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
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript defaultValue="light" />
      </head>
      <body className={`antialiased`} cz-shortcut-listen="true">
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
