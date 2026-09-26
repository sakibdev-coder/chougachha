import type { Metadata } from 'next';
import { UnionSection } from '@/components/UnionSection';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = { title: 'চৌগাছার ইউনিয়নসমূহ | আমার চৌগাছা', description: 'চৌগাছা উপজেলার ১১টি ইউনিয়নের তথ্যভান্ডার।' };
export default function UnionsRoute() { return <div className="site-shell"><Navbar /><main><UnionSection /></main><Footer /></div>; }
