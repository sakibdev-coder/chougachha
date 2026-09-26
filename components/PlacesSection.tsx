import Image from 'next/image';
import { ExternalLink, MapPin } from 'lucide-react';
import { placeItems } from '@/data/places';
import { SectionTitle } from './SectionTitle';
import { GlassCard } from './GlassCard';

export function PlacesSection() { return <section className="section-wrap places-section" id="places"><div className="container"><SectionTitle eyebrow="গুরুত্বপূর্ণ স্থান / ০৫" title={<>চৌগাছাকে <em>চেনা যাক।</em></>} >প্রকাশ্য তথ্যসূত্রে থাকা স্থানগুলোর সংক্ষিপ্ত পরিচয়। ছবি ও map link পরে স্থানীয়ভাবে যাচাই করে যুক্ত করা যাবে।</SectionTitle><div className="places-grid">{placeItems.map((place, index) => <GlassCard key={place.name} className={index === 0 ? 'featured-place' : ''}><div className="card-image"><Image src={place.image} alt={`${place.name} এর placeholder ছবি`} fill sizes="(max-width: 700px) 90vw, 38vw" /></div><div className="card-body"><span className="category-label">০{index + 1} / দর্শনীয় স্থান</span><h3>{place.name}</h3><p>{place.description}</p><p><MapPin size={14} /> {place.location}</p><a className="card-link disabled-link" href="#contact">Google Maps <ExternalLink size={14} /></a></div></GlassCard>)}</div></div></section>; }
