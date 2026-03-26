import { Header } from "@/components/header /header";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`bg-black align-center justify-center ${geistSans.variable} ${geistMono.variable}`}>
      <Header />
    </div>
  );
}
