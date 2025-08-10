import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/_styles/globals.css";
import { ThemeProvider } from "./_providers/theme-provider";
import { Header, ModeToggle } from "./_components/custom";

const geistSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vasudev Tejam",
  description:
    "Portfolio of Vasudev Tejam a Full Stack Developer with 3 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} flex flex-col min-h-screen relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className=" flex-1 px-8  grid grid-cols-12 mx-auto w-full">
            {children}
          </main>
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
