import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const font = Sora({
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "ObraFacil",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font.className}  antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
