export type EmergencyItem = { id: string; label: string; value: string; description: string; icon: 'phone' | 'shield' | 'flame' | 'building' | 'hospital' | 'users' | 'cloud'; source: string };

export const emergencyItems: EmergencyItem[] = [
  { id: 'national', label: 'জাতীয় জরুরি সেবা', value: '999', description: 'Police, Fire Service ও Ambulance', icon: 'phone', source: 'সরকারি জরুরি সেবা' },
  { id: 'fire', label: 'ফায়ার সার্ভিস', value: '102', description: 'অগ্নিকাণ্ড ও জরুরি উদ্ধার', icon: 'flame', source: 'ফায়ার সার্ভিস জরুরি নম্বর' },
  { id: 'health-complex', label: 'চৌগাছা উপজেলা স্বাস্থ্য কমপ্লেক্স', value: '01701-248571', description: 'স্বাস্থ্য/হাসপাতাল সংক্রান্ত জরুরি যোগাযোগ', icon: 'hospital', source: 'চৌগাছা উপজেলা স্বাস্থ্য কমপ্লেক্স' },
  { id: 'police', label: 'চৌগাছা থানা', value: '999', description: 'জরুরি পুলিশ সহায়তা', icon: 'shield', source: 'জাতীয় জরুরি সেবা' },
  { id: 'women-children', label: 'নারী ও শিশু সহায়তা', value: '109', description: 'নারী ও শিশু নির্যাতন প্রতিরোধ', icon: 'users', source: 'নারী ও শিশু সহায়তা হেল্পলাইন' },
  { id: 'disaster', label: 'দুর্যোগ সহায়তা', value: '1090', description: 'দুর্যোগ সংক্রান্ত সহায়তা', icon: 'cloud', source: 'দুর্যোগ সহায়তা হেল্পলাইন' },
  { id: 'health', label: 'স্বাস্থ্য বাতায়ন', value: '16263', description: 'চিকিৎসা সংক্রান্ত পরামর্শ', icon: 'hospital', source: 'স্বাস্থ্য বাতায়ন' },
];
