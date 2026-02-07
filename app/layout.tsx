import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import {
  Home,
  FolderKanban,
  Wrench,
  GraduationCap,
  Briefcase,
  FileText,
  Mail,
  Cpu,
} from "lucide-react";
import "./globals.css";

/* Fonts */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delight Chirume | Computer Engineer",
  description:
    "Computer Engineering student specializing in embedded systems, robotics, and AI integration.",
};

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "Skills", path: "/skills", icon: Wrench },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Experience", path: "/experience", icon: Briefcase },
  { name: "Resume", path: "/resume", icon: FileText },
  { name: "Contact", path: "/contact", icon: Mail },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${mono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-br from-gray-950 to-gray-100 dark:from-gray-900 dark:to-gray-950`}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="group flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-xl group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 bg-clip-text text-transparent">
                    Delight Chirume
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Computer Engineer
                  </p>
                </div>
              </Link>

              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="group flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-500" />
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </header>

        {/* Main */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Delight Chirume</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Computer Engineering Student
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Building intelligent systems with precision and passion.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {navItems.slice(1).map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Connect
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Open to opportunities and collaborations in software
                  development, embedded systems, and applied engineering.
                </p>
                <a
                  href="mailto:email@example.com"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg text-sm hover:scale-105 transition-transform"
                >
                  Email Me
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} Delight Chirume. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
