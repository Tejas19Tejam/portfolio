import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/custom/Header";

const geistSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vasudev Tejam Portfolio",
  description:
    "Portfolio of Vasudev Tejam a Full Stack Developer with 3 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} flex flex-col min-h-screen relative`}
      >
        <Header />
        <main className="max-w-7xl flex-1 px-8  grid grid-cols-12 mx-auto w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
