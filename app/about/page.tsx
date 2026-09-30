import type { Metadata } from 'next';
import { AboutPage } from '@/components/AboutPage';

export const metadata: Metadata = { title: 'চৌগাছা সম্পর্কে | আমার চৌগাছা', description: 'চৌগাছা উপজেলার পরিচিতি, ভূগোল, ইতিহাস ও গুরুত্বপূর্ণ পরিসংখ্যান।' };
export default function AboutRoute() { return <AboutPage />; }
