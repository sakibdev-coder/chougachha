import type { Metadata } from 'next';
import { EducationPage } from '@/components/EducationPage';

export const metadata: Metadata = {
  title: 'শিক্ষা প্রতিষ্ঠান | আমার চৌগাছা',
  description: 'চৌগাছা, যশোরের স্কুল, কলেজ, মাদ্রাসা ও অন্যান্য শিক্ষা প্রতিষ্ঠানের searchable directory।',
};

export default function EducationRoute() {
  return <EducationPage />;
}
