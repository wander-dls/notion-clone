import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header"


export const metadata: Metadata = {
  title: "notion-clone",
  description: "an API productivity app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
          <ClerkProvider>
            <html lang="en">
              <body
                className={`antialiased`}
              >
                <Header />
                {children}
              </body>
            </html>
          </ClerkProvider>
    </>
  );
}
