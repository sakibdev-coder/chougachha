'use client';

import Image from 'next/image';
import { ExternalLink, Search, MapPin, Phone, Clock3 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { educationItems } from '@/data/education';
import { hospitalItems } from '@/data/hospitals';
import { GlassCard } from './GlassCard';
import { SectionTitle } from './SectionTitle';

function SearchBar({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) { return <label className="search-bar"><Search size={17} /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} aria-label={placeholder} /></label>; }

export function EducationSection() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => educationItems.filter((item) => `${item.name} ${item.category}`.includes(query)), [query]);
  return <section className="section-wrap directory-section" id="education"><div className="container"><SectionTitle eyebrow="শিক্ষা / ০৩" title={<>শেখার জায়গা,<br /><em>গড়ার জায়গা।</em></>} >প্রতিষ্ঠানের নাম ও তথ্য data file-এ রাখা হয়েছে। যাচাই না হওয়া contact detail দেখানো হচ্ছে না।</SectionTitle><SearchBar value={query} onChange={setQuery} placeholder="স্কুল, কলেজ বা মাদ্রাসা খুঁজুন" /><div className="directory-grid">{filtered.map((item) => <GlassCard key={item.name}><div className="card-image"><Image src={item.image} alt={`${item.name} placeholder ছবি`} fill sizes="(max-width: 700px) 90vw, 30vw" /></div><div className="card-body"><span className="category-label">{item.category}</span><h3>{item.name}</h3><p><MapPin size={14} /> {item.location}</p><p className="muted">{item.address}</p><p className="muted">{item.phone}</p><span className="pending-label">তথ্য যাচাই করে আপডেট হবে</span></div></GlassCard>)}</div></div></section>;
}

export function HospitalSection() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => hospitalItems.filter((item) => item.name.includes(query)), [query]);
  return <section className="section-wrap hospital-section" id="hospitals"><div className="container"><SectionTitle eyebrow="হাসপাতাল ও চিকিৎসা / ০৪" title={<>সেবার তথ্য,<br /><em>বিশ্বাসের সঙ্গে।</em></>} >জরুরি ও যোগাযোগের তথ্য সরকারি বা প্রতিষ্ঠানভিত্তিক উৎস থেকে যাচাই করে যুক্ত করা হবে।</SectionTitle><SearchBar value={query} onChange={setQuery} placeholder="হাসপাতাল বা ক্লিনিক খুঁজুন" /><div className="directory-grid">{filtered.map((item) => <GlassCard key={item.name}><div className="card-image"><Image src={item.image} alt={`${item.name} placeholder ছবি`} fill sizes="(max-width: 700px) 90vw, 30vw" /></div><div className="card-body"><span className="category-label">স্বাস্থ্যসেবা</span><h3>{item.name}</h3><p><MapPin size={14} /> {item.address}</p><p><Phone size={14} /> {item.phone}</p><p><Clock3 size={14} /> {item.hours}</p><a className="card-link disabled-link" href="#contact" aria-label="তথ্য যাচাইয়ের পর মানচিত্র যুক্ত হবে">Google Maps <ExternalLink size={14} /></a></div></GlassCard>)}</div></div></section>;
}
