import { inter, poppins } from "@/utils/fonts";
import ReduxProvider from "@/utils/redux/ReduxProvider";
import clsx from "clsx";
import type { Metadata } from "next";
import "./globals.css";

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
          inter.variable,
          poppins.variable,
          "root-background w-full font-inter  scroll-smooth antialiased min-h-screen"
        )}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
