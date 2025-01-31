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
    <body className={inter.className}>
      <AnimatePresence mode="wait">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"

        >
          <div className="min-h-screen flex overflow-x-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col min-h-screen md:pl-[290px]">
              <main className="flex-1 w-full">
                <div className=" mx-auto p-0">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </AnimatePresence>
    </body>
  </html>
  );
}