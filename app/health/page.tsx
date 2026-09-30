import type { Metadata } from 'next';
import { HospitalPage } from '@/components/HospitalPage';

export const metadata: Metadata = { title: 'স্বাস্থ্যসেবা | আমার চৌগাছা', description: 'চৌগাছার হাসপাতাল, স্বাস্থ্য কমপ্লেক্স ও চিকিৎসা সেবার তথ্য।' };
export default function HealthRoute() { return <HospitalPage />; }
