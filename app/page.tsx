import { AboutChowgacha } from '@/components/AboutChowgacha';
import { BackToTop } from '@/components/BackToTop';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HomePreviews } from '@/components/HomePreviews';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return <div className="site-shell modern-site"><Navbar /><main><Hero /><AboutChowgacha /><HomePreviews /></main><Footer /><BackToTop /></div>;
}
