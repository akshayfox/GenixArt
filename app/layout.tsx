import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import { AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Image Generator",
  description: "Generate images using AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <AnimatePresence mode="wait">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex flex-col overflow-x-hidden">
              {/* <MainNav /> */}
              <div className="flex-1 flex-col">
                <Sidebar />
                <main
                  // className={`flex-1 py-8 ${isOpen ? "ml-[290px]" : ""} md:ml-[290px]`}
                >
                  {children}
                  <Footer />
                </main>
              </div>
            </div>
          </ThemeProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
