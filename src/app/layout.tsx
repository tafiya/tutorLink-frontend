import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/providers/Providers";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TutorLink",
  description: "A online tutor platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={roboto.className}>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </html>
    </Providers>
  );
}
