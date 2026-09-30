export type HospitalType = 'সরকারি হাসপাতাল' | 'স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র' | 'ক্লিনিক' | 'কমিউনিটি ক্লিনিক' | 'অন্যান্য';
import { imageSources } from './images';
export type HospitalItem = { id: string; name: string; banglaName: string; type: HospitalType; address: string | null; phone: string | null; emergency: string | null; union: string | null; openingHours: string | null; services: string[] | null; image: string | null; imageSource: string | null; googleMapsUrl: string | null; source: string };

const facilityNames = [
  ['upazila-health-complex', 'উপজেলা স্বাস্থ্য কমপ্লেক্স', 'সরকারি হাসপাতাল', 'চৌগাছা, যশোর'],
  ['phulsara-family-center', 'ফুলসারা ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'ফুলসারা ইউনিয়ন'],
  ['pashapole-family-center', 'পাশাপোল ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'পাশাপোল ইউনিয়ন'],
  ['singhajhuli-family-center', 'সিংহঝুলী ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'সিংহঝুলী ইউনিয়ন'],
  ['dhuliani-family-center', 'ধুলিয়ানী ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'ধুলিয়ানী ইউনিয়ন'],
  ['chowgacha-family-center', 'চৌগাছা ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'চৌগাছা ইউনিয়ন'],
  ['sadar-clinic', 'উপজেলা পঃপঃ সদর ক্লিনিক', 'ক্লিনিক', 'চৌগাছা, যশোর'],
  ['jagadishpur-family-center', 'জগদীশপুর ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'জগদীশপুর ইউনিয়ন'],
  ['patibila-family-center', 'পাতিবিলা ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'পাতিবিলা ইউনিয়ন'],
  ['hakimpur-family-center', 'হাকিমপুর ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'হাকিমপুর ইউনিয়ন'],
  ['swarupdaha-family-center', 'স্বরুপদাহ ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'স্বরূপদাহ ইউনিয়ন'],
  ['narayanpur-family-center', 'নারায়নপুর ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'নারায়ণপুর ইউনিয়ন'],
  ['sukpukhuria-family-center', 'সুখপুকুরিয়া ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র', 'সুখপুকুরিয়া ইউনিয়ন'],
] as const;

export const hospitalItems: HospitalItem[] = facilityNames.map(([id, banglaName, type, union]) => ({ id, name: banglaName, banglaName, type, address: null, phone: null, emergency: null, union, openingHours: null, services: null, image: imageSources.health, imageSource: imageSources.officialPortal, googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${banglaName}, ${union}, Chowgacha, Jashore`)}`, source: 'চৌগাছা উপজেলা সরকারি স্বাস্থ্যসেবা তালিকা; contact details যাচাই করা হচ্ছে' }));
