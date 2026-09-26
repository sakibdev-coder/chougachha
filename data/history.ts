export type HistoryItem = { period: string; title: string; description: string; status: 'verified' | 'placeholder' };

export const historyItems: HistoryItem[] = [
  { period: 'পরিচিতি', title: 'যশোরের দক্ষিণ-পশ্চিমের জনপদ', description: 'চৌগাছা যশোর জেলার একটি উপজেলা। নদী, কৃষি, গ্রামীণ জনপদ ও মানুষের জীবনযাত্রা এই এলাকার পরিচয়ের অংশ।', status: 'verified' },
  { period: 'নামের ইতিহাস', title: 'চার বটগাছের জনশ্রুতি', description: 'প্রচলিত জনশ্রুতি অনুযায়ী নদীর দুই পাড়ে থাকা চারটি বটগাছ থেকে “চৌগাছা” নামের উৎপত্তি। এটি স্থানীয় ঐতিহ্য হিসেবে সংরক্ষণযোগ্য একটি গল্প।', status: 'verified' },
  { period: 'মুক্তিযুদ্ধ', title: '৬ ডিসেম্বর ১৯৭১', description: 'প্রকাশ্য তথ্যসূত্রে ৬ ডিসেম্বর ১৯৭১ তারিখে চৌগাছা শত্রুমুক্ত হওয়ার কথা উল্লেখ আছে।', status: 'verified' },
  { period: 'প্রশাসন', title: 'থানা থেকে উপজেলা', description: '১৯৭৭ সালে থানা পুনর্গঠিত এবং ১৯৮২ সালে চৌগাছা উপজেলা হিসেবে উন্নীত হয়।', status: 'verified' },
  { period: 'গুরুত্বপূর্ণ ব্যক্তিত্ব', title: 'স্থানীয় ইতিহাসের মানুষ', description: 'এই অংশে যাচাই করা জীবনী ও অবদান যুক্ত করা হবে। তথ্য যাচাই না হওয়া পর্যন্ত এটি placeholder হিসেবে রাখা হয়েছে।', status: 'placeholder' },
];
