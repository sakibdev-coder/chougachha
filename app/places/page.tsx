import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { PlacesSection } from '@/components/PlacesSection';

export const metadata: Metadata = { title: 'চৌগাছার গুরুত্বপূর্ণ স্থান | আমার চৌগাছা', description: 'চৌগাছা, যশোরের গুরুত্বপূর্ণ স্থানগুলোর তথ্যভিত্তিক তালিকা।' };

export default function PlacesRoute() {
  return <div className="site-shell"><Navbar /><main><PlacesSection /></main><Footer /></div>;
}
