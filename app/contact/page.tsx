import type { Metadata } from 'next';
import { ContactPage } from '@/components/ContactPage';

export const metadata: Metadata = { title: 'যোগাযোগ | আমার চৌগাছা', description: 'চৌগাছা সম্পর্কিত তথ্য, ঠিকানা ও প্রয়োজনীয় যোগাযোগের পথ।' };
export default function ContactRoute() { return <ContactPage />; }
