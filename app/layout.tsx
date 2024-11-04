import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
import "./globals.css";
import { MenuModal, Navbar } from "./components/navigation/Navbar";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "YumBox",
  description: "Groceries Shopping App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} ${nunito.className} antialiased`}
      >
        <Navbar pageTitleText="This is the title" backButtonOn />
        <MenuModal />
        {children}
      </body>
    </html>
  );
}
