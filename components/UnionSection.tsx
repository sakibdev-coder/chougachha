import { ArrowUpRight, Landmark } from 'lucide-react';
import { unionItems } from '@/data/unions';
import { SectionTitle } from './SectionTitle';

export function UnionSection() { return <section className="section-wrap union-section" id="unions"><div className="container"><SectionTitle eyebrow="ইউনিয়নসমূহ / ০৬" title={<>এক উপজেলার<br /><em>এগারো পরিচয়।</em></>} >চৌগাছা উপজেলার ১১টি ইউনিয়নের নাম data file-এ আলাদা রাখা হয়েছে। ভবিষ্যতে প্রতিটির জন্য detail page যোগ করা যাবে।</SectionTitle><div className="union-grid">{unionItems.map((union, index) => <a className="union-card" href={`#union-${union.slug}`} key={union.slug}><span className="union-number">{String(index + 1).padStart(2, '0')}</span><Landmark size={22} /><strong>{union.name} ইউনিয়ন</strong><small>{union.note}</small><ArrowUpRight className="union-arrow" size={18} /></a>)}</div></div></section>; }
