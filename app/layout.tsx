import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "আমার চৌগাছা | Chowgacha, Jashore",
  description: "চৌগাছার ইতিহাস, শিক্ষা, হাসপাতাল, স্বাস্থ্যসেবা, ইউনিয়ন, গুরুত্বপূর্ণ স্থান ও স্থানীয় তথ্যের একটি আধুনিক তথ্যভিত্তিক ওয়েবসাইট।",
  openGraph: {
    title: "আমার চৌগাছা | Chowgacha, Jashore",
    description: "চৌগাছার ইতিহাস, শিক্ষা, স্বাস্থ্যসেবা, ইউনিয়ন ও স্থানীয় তথ্যের আধুনিক তথ্যভান্ডার।",
    type: "website",
    locale: "bn_BD",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="bn"><body>{children}</body></html>;
}
