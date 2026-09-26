'use client';

import { ArrowUpRight, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { educationItems } from '@/data/education';
import { hospitalItems } from '@/data/hospitals';
import { placeItems } from '@/data/places';
import { unionItems } from '@/data/unions';

type SearchResult = { id: string; title: string; meta: string; href: string };

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];
    const term = query.toLocaleLowerCase();
    return [
      ...educationItems.filter((item) => `${item.banglaName} ${item.name} ${item.type}`.toLocaleLowerCase().includes(term)).map((item) => ({ id: item.id, title: item.banglaName, meta: `শিক্ষা / ${item.type}`, href: '/education' })),
      ...hospitalItems.filter((item) => `${item.banglaName} ${item.type} ${item.union ?? ''}`.toLocaleLowerCase().includes(term)).map((item) => ({ id: item.id, title: item.banglaName, meta: `চিকিৎসা / ${item.type}`, href: '/hospitals' })),
      ...unionItems.filter((item) => item.name.toLocaleLowerCase().includes(term)).map((item) => ({ id: item.id, title: item.name, meta: 'ইউনিয়ন', href: '/#unions' })),
      ...placeItems.filter((item) => `${item.name} ${item.union ?? ''}`.toLocaleLowerCase().includes(term)).map((item) => ({ id: item.id, title: item.name, meta: 'গুরুত্বপূর্ণ স্থান', href: '/#places' })),
    ].slice(0, 8);
  }, [query]);

  return <><button className="global-search-trigger" onClick={() => setOpen(true)} aria-label="সার্চ খুলুন"><Search size={17} /></button>{open && <div className="search-overlay" role="dialog" aria-modal="true" aria-label="গ্লোবাল সার্চ"><div className="search-modal"><div className="search-modal-head"><span className="eyebrow">সব তথ্য একসাথে</span><button onClick={() => { setOpen(false); setQuery(''); }} aria-label="সার্চ বন্ধ করুন"><X size={19} /></button></div><label className="global-search-input"><Search size={19} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="স্কুল, হাসপাতাল, ইউনিয়ন বা স্থান খুঁজুন" /></label>{query && <div className="global-results">{results.length ? results.map((result) => <Link href={result.href} key={`${result.id}-${result.meta}`} onClick={() => setOpen(false)}><span><strong>{result.title}</strong><small>{result.meta}</small></span><ArrowUpRight size={16} /></Link>) : <p>কোনো ফলাফল পাওয়া যায়নি।</p>}</div>}</div></div>}</>;
}
