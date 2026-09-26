export type HospitalItem = { name: string; image: string; address: string; phone: string; emergency: string; hours: string; maps: string; verified: boolean };

export const hospitalItems: HospitalItem[] = [
  { name: 'চৌগাছা উপজেলা স্বাস্থ্য কমপ্লেক্স', image: '/images/chowgacha-hospital.svg', address: 'সরকারি উৎস থেকে ঠিকানা যাচাই করে যুক্ত হবে', phone: 'ফোন নম্বর যাচাই করে যুক্ত হবে', emergency: 'জরুরি নম্বর যাচাই করে যুক্ত হবে', hours: 'সেবা সময় যাচাই করে যুক্ত হবে', maps: '', verified: false },
  { name: 'স্থানীয় হাসপাতাল ও ক্লিনিক', image: '/images/chowgacha-hospital.svg', address: 'প্রতিষ্ঠানের ঠিকানা যুক্ত হবে', phone: 'ফোন নম্বর যুক্ত হবে', emergency: 'জরুরি নম্বর যুক্ত হবে', hours: 'সেবা সময় যুক্ত হবে', maps: '', verified: false },
];
