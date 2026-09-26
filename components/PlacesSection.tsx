import { ExternalLink, MapPin } from 'lucide-react';
import { placeItems } from '@/data/places';
import { SectionTitle } from './SectionTitle';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './ImageWithFallback';

export function PlacesSection() { return <section className="section-wrap places-section" id="places"><div className="container"><SectionTitle eyebrow="গুরুত্বপূর্ণ স্থান / ০৫" title={<>চৌগাছাকে <em>চেনা যাক।</em></>} >প্রকাশ্য তথ্যসূত্রে থাকা স্থানগুলোর সংক্ষিপ্ত পরিচয়। ছবি ও map link পরে স্থানীয়ভাবে যাচাই করে যুক্ত করা যাবে।</SectionTitle><div className="places-grid">{placeItems.map((place, index) => <GlassCard key={place.id} className={index === 0 ? 'featured-place' : ''}><div className="card-image"><ImageWithFallback src={place.image} source={place.imageSource} alt={place.name} sizes="(max-width: 700px) 90vw, 38vw" /></div><div className="card-body"><span className="category-label">০{index + 1} / দর্শনীয় স্থান</span><h3>{place.name}</h3><p>{place.description ?? 'বিস্তারিত তথ্য যাচাই করা হচ্ছে'}</p><p><MapPin size={14} /> {place.address ?? place.union ?? 'ঠিকানা যাচাই করা হচ্ছে'}</p><span className="card-link disabled-link">Google Maps <ExternalLink size={14} /></span><small className="pending-label">{place.source}</small></div></GlassCard>)}</div></div></section>; }
