import type { Metadata } from 'next';
import { EmergencySection } from '@/components/EmergencySection';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = { title: 'জরুরি সেবা | আমার চৌগাছা', description: 'চৌগাছার পুলিশ, ফায়ার সার্ভিস, হাসপাতাল ও অন্যান্য জরুরি যোগাযোগ নম্বর।' };
export default function EmergencyRoute() { return <div className="site-shell emergency-page"><Navbar /><main><EmergencySection /></main><Footer /></div>; }
