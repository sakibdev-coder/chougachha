export type GalleryCategory = 'town' | 'village' | 'nature' | 'river' | 'heritage' | 'education' | 'other';
export type GalleryItem = { id: string; title: string; image: string | null; imageSource: string | null; category: GalleryCategory; description?: string | null };
import { imageSources } from './images';

export const galleryItems: GalleryItem[] = [
  { id: 'chowgacha-town', title: 'চৌগাছা উপজেলা', image: imageSources.gallery[0], imageSource: imageSources.officialGallery, category: 'town', description: 'চৌগাছা উপজেলা সরকারি ফটো গ্যালারি থেকে নেওয়া ছবি।' },
  { id: 'chowgacha-village', title: 'চৌগাছার জনপদ', image: imageSources.gallery[1], imageSource: imageSources.officialGallery, category: 'village', description: 'চৌগাছা উপজেলা সরকারি ফটো গ্যালারি থেকে নেওয়া ছবি।' },
  { id: 'kopotakkho-river', title: 'চৌগাছার স্থানীয় দৃশ্য', image: imageSources.gallery[2], imageSource: imageSources.officialGallery, category: 'river', description: 'চৌগাছা উপজেলা সরকারি ফটো গ্যালারি থেকে নেওয়া ছবি।' },
  { id: 'chowgacha-nature', title: 'চৌগাছার প্রকৃতি', image: imageSources.about, imageSource: imageSources.officialPortal, category: 'nature', description: 'চৌগাছা উপজেলা সরকারি পোর্টালের ছবি।' },
  { id: 'chowgacha-heritage', title: 'চৌগাছার ঐতিহ্য', image: imageSources.officialAbout, imageSource: imageSources.officialPortal, category: 'heritage', description: 'চৌগাছা উপজেলা সরকারি পোর্টালের ছবি।' },
];
