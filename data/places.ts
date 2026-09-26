export type PlaceItem = { id: string; name: string; description: string | null; address: string | null; union: string | null; image: string | null; imageSource: string | null; latitude: number | null; longitude: number | null; googleMapsUrl: string | null; source: string };

export const placeItems: PlaceItem[] = [
  { id: 'kopotakkho-river', name: 'কপোতাক্ষ নদ', description: 'চৌগাছা উপজেলার উল্লেখযোগ্য ভৌগোলিক পরিচয়ের অংশ হিসেবে প্রকাশ্য তালিকায় থাকা নদী।', address: null, union: null, image: null, imageSource: null, latitude: null, longitude: null, googleMapsUrl: null, source: 'চৌগাছা উপজেলা দর্শনীয় স্থান তালিকা' },
  { id: 'katgara-baor', name: 'কাটগড়া বাওড়', description: 'চৌগাছা উপজেলার প্রকাশ্য দর্শনীয় স্থান তালিকায় থাকা একটি বাওড়।', address: null, union: null, image: null, imageSource: null, latitude: null, longitude: null, googleMapsUrl: null, source: 'চৌগাছা উপজেলা দর্শনীয় স্থান তালিকা' },
  { id: 'jagadishpur-cotton-farm', name: 'জগদীশপুর তুলা ফার্ম', description: 'চৌগাছা উপজেলার প্রকাশ্য উল্লেখযোগ্য স্থান তালিকায় থাকা স্থান।', address: null, union: 'জগদিশপুর ইউনিয়ন', image: null, imageSource: null, latitude: null, longitude: null, googleMapsUrl: null, source: 'চৌগাছা উপজেলা দর্শনীয় স্থান তালিকা' },
  { id: 'pir-baluh-dewan', name: 'পীর বলুহ দেওয়ানের মাজার', description: 'প্রকাশ্য উপজেলা তথ্যসূত্রে উল্লেখিত দর্শনীয় স্থান।', address: null, union: null, image: null, imageSource: null, latitude: null, longitude: null, googleMapsUrl: null, source: 'চৌগাছা উপজেলা দর্শনীয় স্থান তালিকা' },
];
