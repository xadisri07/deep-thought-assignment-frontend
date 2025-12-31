import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deep Thought ",
  description: "Deep Thought Assignment",
  icons: "/logo_main_short.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white h-full">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-white h-full flex flex-col`}
      >
        <Header />
        <div className="flex flex-1 overflow-auto">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
        <FloatingActionButtons />
      </body>
    </html>
  );
}
