'use client';

import { ArrowLeft, ExternalLink, MapPin, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ImageWithFallback } from './ImageWithFallback';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import type { Village } from '@/data/unions';

export function VillagePage({ village }: { village: Village }) { return <div className="site-shell village-page"><Navbar /><main><section className="village-detail-hero"><div className="container village-detail-grid"><div><Link className="back-link" href={`/unions/${village.unionId}`}><ArrowLeft size={15} /> ইউনিয়নে ফিরে যান</Link><span className="eyebrow">গ্রাম / বিস্তারিত</span><h1>{village.name}</h1><p><MapPin size={15} /> {village.unionName}</p><div className="village-detail-status"><ShieldCheck size={16} /> তথ্য যাচাই করা হচ্ছে</div></div><ImageWithFallback src={village.image} source={village.imageSource} alt={village.name} sizes="(max-width: 800px) 92vw, 48vw" /></div></section><section className="village-detail-content section-wrap"><div className="container village-detail-content-inner"><div><span className="eyebrow">গ্রামের তথ্য</span><h2>{village.description ?? 'বিস্তারিত তথ্য যাচাই করে যুক্ত হবে।'}</h2>{village.population != null && <p>জনসংখ্যা: {village.population}</p>}{village.googleMapsUrl && <a className="button cyan-button" href={village.googleMapsUrl} target="_blank" rel="noreferrer">Google Maps-এ দেখুন <ExternalLink size={15} /></a>}</div><div className="village-source-card"><strong>তথ্যের উৎস</strong><p>{village.source ?? 'সরকারি উৎস যাচাই করা হচ্ছে'}</p>{village.imageSource && <a href={village.imageSource} target="_blank" rel="noreferrer">ছবির উৎস দেখুন <ExternalLink size={14} /></a>}</div></div></section></main><Footer /></div>; }
