export type EducationType = 'প্রাথমিক বিদ্যালয়' | 'মাধ্যমিক বিদ্যালয়' | 'কলেজ' | 'মাদ্রাসা' | 'কারিগরি শিক্ষা' | 'অন্যান্য';

export type EducationItem = {
  id: string; name: string; banglaName: string; type: EducationType; eiin: string | null; union: string | null; address: string | null; phone: string | null; mobile: string | null; website: string | null; facebook: string | null; established: string | null; image: string | null; imageSource: string | null; latitude: number | null; longitude: number | null; googleMapsUrl: string | null; description: string | null; source: string;
};

export const educationStats = [
  { label: 'সরকারি প্রাথমিক বিদ্যালয়', value: 61, year: 'সরকারি ওয়েবসাইটে প্রকাশিত তথ্য; বছর যাচাই করা হচ্ছে' },
  { label: 'বে-সরকারি প্রাথমিক বিদ্যালয়', value: 62, year: 'সরকারি ওয়েবসাইটে প্রকাশিত তথ্য; বছর যাচাই করা হচ্ছে' },
  { label: 'কমিউনিটি প্রাথমিক বিদ্যালয়', value: 12, year: 'সরকারি ওয়েবসাইটে প্রকাশিত তথ্য; বছর যাচাই করা হচ্ছে' },
  { label: 'সহশিক্ষা উচ্চ বিদ্যালয়', value: 45, year: 'সরকারি ওয়েবসাইটে প্রকাশিত তথ্য; বছর যাচাই করা হচ্ছে' },
  { label: 'বালিকা উচ্চ বিদ্যালয়', value: 1, year: 'সরকারি ওয়েবসাইটে প্রকাশিত তথ্য; বছর যাচাই করা হচ্ছে' },
  { label: 'দাখিল মাদ্রাসা', value: 24, year: 'সরকারি ওয়েবসাইটে প্রকাশিত তথ্য; বছর যাচাই করা হচ্ছে' },
  { label: 'ফাজিল মাদ্রাসা', value: 1, year: 'সরকারি ওয়েবসাইটে প্রকাশিত তথ্য; বছর যাচাই করা হচ্ছে' },
  { label: 'কলেজ (সহপাঠ)', value: 8, year: 'সরকারি ওয়েবসাইটে প্রকাশিত তথ্য; বছর যাচাই করা হচ্ছে' },
  { label: 'কলেজ (বালিকা)', value: 1, year: 'সরকারি ওয়েবসাইটে প্রকাশিত তথ্য; বছর যাচাই করা হচ্ছে' },
];

const base = { eiin: null, union: null, address: null, phone: null, mobile: null, website: null, facebook: null, established: null, image: null, imageSource: null, latitude: null, longitude: null, googleMapsUrl: null, description: null, source: 'সরকারি শিক্ষা-অফিস / শিক্ষা বোর্ডের তালিকা; আরও যাচাই প্রয়োজন' };
const item = (id: string, banglaName: string, type: EducationType, extra: Partial<EducationItem> = {}): EducationItem => ({ ...base, id, name: banglaName, banglaName, type, googleMapsUrl: extra.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${banglaName}, ${extra.address}`)}` : null, ...extra });

export const educationItems: EducationItem[] = [
  item('chowgacha-degree-college', 'চৌগাছা ডিগ্রী কলেজ', 'কলেজ', { name: 'Chowgacha Degree College', eiin: '115718', address: 'চৌগাছা, যশোর', phone: '01715686225', mobile: '01309115718', source: 'প্রদত্ত সরকারি/প্রাতিষ্ঠানিক তালিকা' }),
  item('mridhapara-womens-college', 'চৌগাছা মৃধাপাড়া মহিলা কলেজ', 'কলেজ', { name: 'Chowgacha Mridhapara Women College', eiin: '115714', address: 'চৌগাছা, যশোর', source: 'প্রদত্ত সরকারি শিক্ষা তালিকা' }),
  item('habibur-rahman-college', 'এস এম হাবিবুর রহমান পৌর কলেজ', 'কলেজ', { name: 'S.M. Habibur Rahman Pour College', eiin: '132020', address: 'চৌগাছা, যশোর', source: 'প্রদত্ত সরকারি শিক্ষা তালিকা' }),
  item('tariqul-islam-college', 'তরিকুল ইসলাম পৌর কলেজ', 'কলেজ', { name: 'Tariqul Islam Pour College', address: 'চৌগাছা, যশোর', source: 'প্রদত্ত সরকারি শিক্ষা তালিকা' }),
  item('abcd-college', 'এ.বি.সি.ডি কলেজ', 'কলেজ', { name: 'A.B.C.D College', eiin: '115712', address: 'আরাজি সুলতানপুর, চৌগাছা, যশোর', mobile: '01711010915', source: 'প্রদত্ত সরকারি শিক্ষা তালিকা' }),
  item('solua-college', 'সলুয়া আদর্শ ডিগ্রী কলেজ', 'কলেজ', { name: 'Solua Adarsha Degree College', address: 'সলুয়া বাজার, চৌগাছা, যশোর', mobile: '01712530048', source: 'প্রদত্ত সরকারি শিক্ষা তালিকা' }),
  item('model-secondary', 'চৌগাছা মডেল মাধ্যমিক বিদ্যালয়', 'মাধ্যমিক বিদ্যালয়', { name: 'Chowgacha Model Secondary School', eiin: '115677', source: 'প্রদত্ত সরকারি শিক্ষা তালিকা' }),
  item('hazi-sarder-school', 'চৌগাছা হাজী সরদার মর্ত্তজ আলী মাধ্যমিক বিদ্যালয়', 'মাধ্যমিক বিদ্যালয়', { name: 'Chowgacha Hazi Sarder Martuz Ali Secondary School', eiin: '115647', source: 'প্রদত্ত সরকারি শিক্ষা তালিকা' }),
  item('lyceum-school', 'চৌগাছা উপজেলা পরিষদ লাইসিয়াম স্কুল', 'মাধ্যমিক বিদ্যালয়', { name: 'Chowgacha Upazilla Parishad Lyceum School', eiin: '135005', source: 'প্রদত্ত সরকারি শিক্ষা তালিকা' }),
  item('shahadat-school', 'চৌগাছা শাহাদৎ পাইলট মডেল মাধ্যমিক বিদ্যালয়', 'মাধ্যমিক বিদ্যালয়'),
  item('chara-school', 'চৌগাছা ছারা পাইলট বালিকা মাধ্যমিক বিদ্যালয়', 'মাধ্যমিক বিদ্যালয়'),
  item('ip-school', 'আই পি পৌর মাধ্যমিক বিদ্যালয়', 'মাধ্যমিক বিদ্যালয়'),
  item('kamil-madrasa', 'চৌগাছা কামিল মাদ্রাসা', 'মাদ্রাসা'),
  item('jtk-dakhil', 'জে টি কে ইউ দাখিল মাদ্রাসা', 'মাদ্রাসা'),
];
