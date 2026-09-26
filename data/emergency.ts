export type EmergencyItem = { label: string; value: string; icon: 'phone' | 'shield' | 'flame' | 'building' | 'hospital' };

export const emergencyItems: EmergencyItem[] = [
  { label: 'জরুরি নম্বর', value: 'সরকারি হেল্পলাইন যাচাই করে যুক্ত হবে', icon: 'phone' },
  { label: 'থানা', value: 'যোগাযোগের তথ্য যাচাই করে যুক্ত হবে', icon: 'shield' },
  { label: 'ফায়ার সার্ভিস', value: 'যোগাযোগের তথ্য যাচাই করে যুক্ত হবে', icon: 'flame' },
  { label: 'উপজেলা পরিষদ', value: 'যোগাযোগের তথ্য যাচাই করে যুক্ত হবে', icon: 'building' },
  { label: 'হাসপাতাল', value: 'যোগাযোগের তথ্য যাচাই করে যুক্ত হবে', icon: 'hospital' },
];
