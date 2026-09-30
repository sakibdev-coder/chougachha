'use client';

import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { unionItems, verifiedVillages } from '@/data/unions';

export function VillagesSection() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredUnions = useMemo(() => unionItems.map((union) => ({
    ...union,
    villages: union.villages.filter((village) => !normalizedQuery || village.name.toLocaleLowerCase().includes(normalizedQuery) || union.name.toLocaleLowerCase().includes(normalizedQuery) || union.nameEn.toLocaleLowerCase().includes(normalizedQuery) || union.unionNo.includes(normalizedQuery)),
  })).filter((union) => union.villages.length), [normalizedQuery]);

  return <section className="villages-section section-wrap" id="villages"><div className="container"><div className="section-header village-section-header"><span className="section-tag">LOCAL INFORMATION</span><h2>চৌগাছার ইউনিয়ন ও গ্রামসমূহ</h2><p>চৌগাছা উপজেলার ১১টি ইউনিয়নের গ্রামসমূহ</p></div><div className="village-summary"><div className="summary-card"><strong>{unionItems.length}</strong><span>ইউনিয়ন</span></div><div className="summary-card"><strong>{verifiedVillages.length}</strong><span>গ্রাম</span></div></div><label className="village-search village-section-search"><Search size={18} /><input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="গ্রামের নাম অথবা ইউনিয়নের নাম লিখুন..." aria-label="গ্রামের নাম অথবা ইউনিয়নের নাম লিখুন" /></label><div className="union-village-container">{filteredUnions.length ? filteredUnions.map((union) => <article className="union-village-card" key={union.id}><div className="union-village-header"><div><span className="union-number">{union.unionNo} নং ইউনিয়ন</span><h3>{union.name}</h3><small>{union.nameEn}</small></div><div className="village-count">{union.villages.length}টি গ্রাম</div></div><div className="village-list">{union.villages.map((village, index) => <div className="village-item" key={village.id}><span className="village-number">{index + 1}</span><span>{village.name}</span></div>)}</div></article>) : <div className="no-result"><Search size={27} /><h3>কোনো গ্রাম পাওয়া যায়নি</h3><p>অন্য নাম দিয়ে চেষ্টা করুন।</p></div>}</div></div></section>;
}
