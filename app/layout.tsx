import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "আমার চৌগাছা | Chowgacha, Jashore",
  description: "চৌগাছার ইতিহাস, শিক্ষা, চিকিৎসা, গুরুত্বপূর্ণ স্থান ও স্থানীয় তথ্যের একটি আধুনিক ওয়েবসাইট।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="bn"><body>{children}</body></html>;
}
