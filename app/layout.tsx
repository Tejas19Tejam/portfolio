import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/app/_styles/globals.css";
import { ThemeProvider } from "./_providers/theme-provider";
import Header from "@/app/_components/custom/header";
import ModeToggle from "./_components/custom/mode-toggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vasudev Tejam - Full Stack Developer",
  description:
    "Full Stack Developer with 3 years of experience building scalable web applications with React, Next.js, Node.js, and modern technologies.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "Web Development",
  ],
  authors: [{ name: "Vasudev Tejam" }],
  creator: "Vasudev Tejam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Vasudev Tejam - Full Stack Developer",
    description:
      "Full Stack Developer with 3 years of experience building scalable web applications.",
    siteName: "Vasudev Tejam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasudev Tejam - Full Stack Developer",
    description:
      "Full Stack Developer with 3 years of experience building scalable web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="font-inter flex flex-col min-h-screen relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <ModeToggle className="fixed bottom-4 right-4 z-50" />
        </ThemeProvider>
      </body>
    </html>
  );
}
