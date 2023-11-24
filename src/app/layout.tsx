import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/utils/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Front End",
  description: "Test Front End",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // h-[982px]
        className={clsx(
          inter.className,
          "root-background w-full  scroll-smooth antialiased min-h-screen"
        )}
      >
        <ReduxProvider>

        {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
