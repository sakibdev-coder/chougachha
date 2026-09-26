export type EducationCategory = 'স্কুল' | 'কলেজ' | 'মাদ্রাসা' | 'অন্যান্য';
export type EducationItem = { name: string; category: EducationCategory; image: string; address: string; phone: string; location: string; website: string; verified: boolean };

export const educationItems: EducationItem[] = [
  { name: 'চৌগাছা সরকারি কলেজ', category: 'কলেজ', image: '/images/chowgacha-school.svg', address: 'ঠিকানা যাচাই করে যুক্ত হবে', phone: 'ফোন নম্বর যাচাই করে যুক্ত হবে', location: 'চৌগাছা, যশোর', website: 'ওয়েবসাইট / ফেসবুক লিংক যাচাই করে যুক্ত হবে', verified: false },
  { name: 'চৌগাছা শাহাদৎ পাইলট মাধ্যমিক বিদ্যালয়', category: 'স্কুল', image: '/images/chowgacha-school.svg', address: 'ঠিকানা যাচাই করে যুক্ত হবে', phone: 'ফোন নম্বর যাচাই করে যুক্ত হবে', location: 'চৌগাছা, যশোর', website: 'ওয়েবসাইট / ফেসবুক লিংক যাচাই করে যুক্ত হবে', verified: false },
  { name: 'স্থানীয় মাদ্রাসা তথ্য', category: 'মাদ্রাসা', image: '/images/chowgacha-school.svg', address: 'প্রতিষ্ঠানের ঠিকানা যুক্ত হবে', phone: 'ফোন নম্বর যুক্ত হবে', location: 'চৌগাছা, যশোর', website: 'লিংক যুক্ত হবে', verified: false },
];
