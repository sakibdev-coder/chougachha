import { ArrowUpRight, Flame, GraduationCap, Hospital, MapPinned } from 'lucide-react';
import Link from 'next/link';
import { educationItems } from '@/data/education';
import { emergencyItems } from '@/data/emergency';
import { hospitalItems } from '@/data/hospitals';
import { unionItems } from '@/data/unions';

const previews = [
  { key: 'education', label: 'শিক্ষা', title: 'শিক্ষা প্রতিষ্ঠান', description: 'স্কুল, কলেজ ও অন্যান্য শিক্ষা প্রতিষ্ঠানের তথ্য দেখুন।', count: educationItems.length, href: '/education', icon: GraduationCap, items: educationItems.slice(0, 3).map((item) => item.banglaName) },
  { key: 'health', label: 'স্বাস্থ্য', title: 'স্বাস্থ্যসেবা', description: 'হাসপাতাল, স্বাস্থ্যকেন্দ্র ও চিকিৎসা সেবার তালিকা।', count: hospitalItems.length, href: '/health', icon: Hospital, items: hospitalItems.slice(0, 3).map((item) => item.name) },
  { key: 'emergency', label: 'জরুরি', title: 'জরুরি যোগাযোগ', description: 'প্রয়োজনের সময়ে যাচাইকৃত জরুরি নম্বরগুলো এক জায়গায়।', count: emergencyItems.length, href: '/emergency', icon: Flame, items: emergencyItems.slice(0, 3).map((item) => `${item.label} · ${item.value}`) },
];

export function HomePreviews() {
  return <section className="home-previews section-wrap"><div className="container"><div className="home-preview-heading"><div><span className="eyebrow">দ্রুত প্রবেশ / ০২</span><h2>যে তথ্যটি <em>খুঁজছেন।</em></h2></div><p>বিস্তারিত তথ্য প্রতিটি আলাদা পাতায় সাজানো আছে।</p></div><div className="union-preview-strip"><div><MapPinned size={21} /><span className="eyebrow">ইউনিয়ন directory</span><h3>{unionItems.length}টি ইউনিয়ন</h3><p>{unionItems.slice(0, 3).map((union) => union.name).join(' · ')} সহ সম্পূর্ণ তালিকা</p></div><Link className="button ghost-button" href="/unions">সব ইউনিয়ন দেখুন <ArrowUpRight size={16} /></Link></div><div className="home-preview-grid">{previews.map((preview) => { const Icon = preview.icon; return <article className="home-preview-card" key={preview.key}><div className="home-preview-card-top"><Icon size={22} /><span>{String(preview.count).padStart(2, '0')} entry</span></div><span className="eyebrow">{preview.label}</span><h3>{preview.title}</h3><p>{preview.description}</p><ul>{preview.items.map((item) => <li key={item}>{item}</li>)}</ul><Link className="card-link" href={preview.href}>বিস্তারিত দেখুন <ArrowUpRight size={15} /></Link></article>; })}</div></div></section>;
}
