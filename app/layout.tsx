import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CanvasCraft",
  description: "CanvasCraft is an innovative collaborative whiteboarding platform designed to empower your creativity and streamline team collaboration. With a robust set of features, CanvasCraft provides a dynamic workspace where ideas come to life. From sketching out concepts to detailed planning, our platform offers a seamless experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ConvexClientProvider> 
        <Toaster/>
        {children}
      </ConvexClientProvider>
      </body>
    </html>
  );
}
