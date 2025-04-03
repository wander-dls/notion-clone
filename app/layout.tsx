import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header"
import SideBar from "@/components/SideBar";


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
                <div className="flex  min-h-screen">
                  <SideBar />
                  <div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide">
                    {children}
                  </div>
                </div>
              </body>
            </html>
          </ClerkProvider>
    </>
  );
}
