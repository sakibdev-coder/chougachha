import type { Metadata } from 'next';
import { HospitalPage } from '@/components/HospitalPage';

export const metadata: Metadata = {
  title: 'হাসপাতাল ও চিকিৎসা | আমার চৌগাছা',
  description: 'চৌগাছা, যশোরের হাসপাতাল ও স্বাস্থ্যসেবা তথ্যের একটি যাচাই-প্রথম directory।',
};

export default function HospitalsRoute() {
  return <HospitalPage />;
}
