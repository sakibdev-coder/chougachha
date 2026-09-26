export type GalleryCategory = 'town' | 'village' | 'nature' | 'river' | 'heritage' | 'education' | 'other';
export type GalleryItem = { id: string; title: string; image: string | null; imageSource: string | null; category: GalleryCategory; description?: string | null };

export const galleryItems: GalleryItem[] = [
  { id: 'chowgacha-town', title: 'চৌগাছা শহর', image: null, imageSource: null, category: 'town', description: 'যাচাই করা স্থানীয় ছবি যুক্ত হবে।' },
  { id: 'chowgacha-village', title: 'গ্রামের দৃশ্য', image: null, imageSource: null, category: 'village', description: 'যাচাই করা স্থানীয় ছবি যুক্ত হবে।' },
  { id: 'kopotakkho-river', title: 'কপোতাক্ষ নদ', image: null, imageSource: null, category: 'river', description: 'যাচাই করা স্থানীয় ছবি যুক্ত হবে।' },
  { id: 'chowgacha-nature', title: 'চৌগাছার প্রকৃতি', image: null, imageSource: null, category: 'nature', description: 'যাচাই করা স্থানীয় ছবি যুক্ত হবে।' },
  { id: 'chowgacha-heritage', title: 'চৌগাছার ঐতিহ্য', image: null, imageSource: null, category: 'heritage', description: 'যাচাই করা স্থানীয় ছবি যুক্ত হবে।' },
];
