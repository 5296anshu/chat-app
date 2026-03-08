import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chat App",
  description: "A beautiful and responsive chat application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 min-h-screen flex flex-col`}
      >
        <header className="bg-white shadow-md sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">ChatApp</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Home</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">About</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
              </nav>
              <div className="md:hidden">
                <button className="text-gray-500 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center p-4">
          {children}
        </main>
        <footer className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="text-center text-gray-500">
              <p>&copy; 2024 ChatApp. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
