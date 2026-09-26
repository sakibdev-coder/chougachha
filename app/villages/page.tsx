import type { Metadata } from 'next';
import { VillagesPage } from '@/components/VillagesPage';

export const metadata: Metadata = { title: 'চৌগাছার গ্রামসমূহ | আমার চৌগাছা', description: 'চৌগাছা উপজেলার ইউনিয়নভিত্তিক যাচাইকৃত গ্রামের তথ্যভান্ডার।' };
export default function VillagesRoute() { return <VillagesPage />; }
