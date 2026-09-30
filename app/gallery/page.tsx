import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = { title: 'ফটো গ্যালারি | আমার চৌগাছা', description: 'চৌগাছা উপজেলার ছবি ও স্থানীয় দৃশ্যের responsive gallery।' };
export default function GalleryRoute() { return <div className="site-shell gallery-page"><Navbar /><main><Gallery /></main><Footer /></div>; }
