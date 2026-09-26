export type Village = { id: string; name: string; unionId: string; unionName: string; description?: string | null; population?: number | null; image?: string | null; imageSource?: string | null; latitude?: number | null; longitude?: number | null; googleMapsUrl?: string | null; source?: string | null };
export type Union = { id: string; number: number; name: string; villages: Village[]; image?: string | null; imageSource?: string | null; description?: string | null; chairman?: string | null; phone?: string | null; address?: string | null; source?: string | null };
export type UnionItem = Union;

const names = ['ফুলসারা', 'পাশাপোল', 'সিংহঝুলী', 'ধুলিয়ানী', 'চৌগাছা', 'জগদিশপুর', 'পাতিবিলা', 'হাকিমপুর', 'স্বরূপদাহ', 'নারায়নপুর', 'সুখপুকুরিয়া'];
const source = 'চৌগাছা উপজেলা সরকারি portal; ইউনিয়নভিত্তিক সম্পূর্ণ গ্রাম তালিকা যাচাই করা হচ্ছে';

export const unionItems: Union[] = names.map((name, index) => ({ id: ['phulsara', 'pashapole', 'singhajhuli', 'dhuliani', 'chowgacha', 'jagadishpur', 'patibila', 'hakimpur', 'swarupdaha', 'narayanpur', 'sukpukhuria'][index], number: index + 1, name: `${index + 1}নং ${name} ইউনিয়ন`, villages: [], image: null, imageSource: null, description: null, chairman: null, phone: null, address: null, source }));

export const unionSourceUrl = 'https://chougachha.jessore.gov.bd/';
export const verifiedVillages = unionItems.flatMap((union) => union.villages);
