import type { Metadata } from 'next';
import { HistoryPage } from '@/components/HistoryPage';

export const metadata: Metadata = {
  title: 'চৌগাছার ইতিহাস | আমার চৌগাছা',
  description: 'চৌগাছা, যশোরের নাম, প্রশাসন ও মুক্তিযুদ্ধের ইতিহাসের সম্পাদনাযোগ্য timeline।',
};

export default function HistoryRoute() {
  return <HistoryPage />;
}
