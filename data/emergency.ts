export type EmergencyItem = { id: string; label: string; value: string | null; icon: 'phone' | 'shield' | 'flame' | 'building' | 'hospital'; source: string };

export const emergencyItems: EmergencyItem[] = [
  { id: 'national', label: 'জাতীয় জরুরি সেবা', value: null, icon: 'phone', source: 'সরকারি নম্বর যাচাই করা হচ্ছে' },
  { id: 'police', label: 'পুলিশ', value: null, icon: 'shield', source: 'চৌগাছা থানার নম্বর যাচাই করা হচ্ছে' },
  { id: 'fire', label: 'ফায়ার সার্ভিস', value: null, icon: 'flame', source: 'স্থানীয় ফায়ার সার্ভিস নম্বর যাচাই করা হচ্ছে' },
  { id: 'ambulance', label: 'অ্যাম্বুলেন্স', value: null, icon: 'hospital', source: 'স্থানীয় সরকারি নম্বর যাচাই করা হচ্ছে' },
  { id: 'health', label: 'স্বাস্থ্যসেবা', value: null, icon: 'hospital', source: 'উপজেলা স্বাস্থ্যসেবা নম্বর যাচাই করা হচ্ছে' },
  { id: 'administration', label: 'উপজেলা প্রশাসন', value: null, icon: 'building', source: 'উপজেলা প্রশাসনের নম্বর যাচাই করা হচ্ছে' },
];
