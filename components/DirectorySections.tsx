'use client';

import { Search, MapPin, Phone, Clock3 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { educationItems } from '@/data/education';
import { hospitalItems } from '@/data/hospitals';
import { GlassCard } from './GlassCard';
import { SectionTitle } from './SectionTitle';
import { ImageWithFallback } from './ImageWithFallback';

function SearchBar({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) { return <label className="search-bar"><Search size={17} /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} aria-label={placeholder} /></label>; }

export function EducationSection() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => educationItems.filter((item) => `${item.banglaName} ${item.name} ${item.type}`.includes(query)), [query]);
  return <section className="section-wrap directory-section" id="education"><div className="container"><SectionTitle eyebrow="শিক্ষা / ০৩" title={<>শেখার জায়গা,<br /><em>গড়ার জায়গা।</em></>} >প্রতিষ্ঠানের নাম ও তথ্য data file-এ রাখা হয়েছে। যাচাই না হওয়া contact detail দেখানো হচ্ছে না।</SectionTitle><SearchBar value={query} onChange={setQuery} placeholder="স্কুল, কলেজ বা মাদ্রাসা খুঁজুন" /><div className="directory-grid">{filtered.map((item) => <GlassCard key={item.id}><div className="card-image"><ImageWithFallback src={item.image} source={item.imageSource} alt={item.banglaName} sizes="(max-width: 700px) 90vw, 30vw" /></div><div className="card-body"><span className="category-label">{item.type}</span><h3>{item.banglaName}</h3><p><MapPin size={14} /> {item.address ?? 'ঠিকানা যাচাই করা হচ্ছে'}</p><p className="muted">{item.phone ?? item.mobile ?? 'ফোন নম্বর যাচাই করা হচ্ছে'}</p><span className="pending-label">{item.source}</span></div></GlassCard>)}</div></div></section>;
}

export function HospitalSection() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => hospitalItems.filter((item) => `${item.banglaName} ${item.type} ${item.union ?? ''}`.includes(query)), [query]);
  return <section className="section-wrap hospital-section" id="hospitals"><div className="container"><SectionTitle eyebrow="হাসপাতাল ও চিকিৎসা / ০৪" title={<>সেবার তথ্য,<br /><em>বিশ্বাসের সঙ্গে।</em></>} >জরুরি ও যোগাযোগের তথ্য সরকারি বা প্রতিষ্ঠানভিত্তিক উৎস থেকে যাচাই করে যুক্ত করা হবে।</SectionTitle><SearchBar value={query} onChange={setQuery} placeholder="হাসপাতাল বা ক্লিনিক খুঁজুন" /><div className="directory-grid">{filtered.map((item) => <GlassCard key={item.id}><div className="card-image"><ImageWithFallback src={item.image} source={item.imageSource} alt={item.banglaName} sizes="(max-width: 700px) 90vw, 30vw" /></div><div className="card-body"><span className="category-label">{item.type}</span><h3>{item.banglaName}</h3><p><MapPin size={14} /> {item.union ?? 'ঠিকানা যাচাই করা হচ্ছে'}</p><p><Phone size={14} /> {item.phone ?? 'ফোন নম্বর যাচাই করা হচ্ছে'}</p><p><Clock3 size={14} /> {item.openingHours ?? 'সেবা সময় যাচাই করা হচ্ছে'}</p><span className="pending-label">{item.source}</span></div></GlassCard>)}</div></div></section>;
}
