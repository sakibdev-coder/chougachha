import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { unionSourceUrl } from '@/data/unions';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function ContactPage() {
  return <div className="site-shell contact-page"><Navbar /><main><section className="info-hero contact-hero"><div className="container info-hero-grid"><div><span className="eyebrow">যোগাযোগ / ০১</span><h1>চৌগাছার সঙ্গে<br /><em>যুক্ত থাকুন।</em></h1><p>স্থানীয় তথ্য, সংশোধন বা নতুন উৎস জানাতে সরকারি ও যাচাইকৃত যোগাযোগের পথ ব্যবহার করুন।</p></div><div className="info-hero-stamp"><Mail size={22} /><strong>স্থানীয় তথ্য</strong><span>উৎসসহ তথ্য পাঠান</span></div></div></section><section className="contact-directory section-wrap"><div className="container contact-grid"><div><span className="eyebrow">প্রয়োজনীয় ঠিকানা / ০২</span><h2>কোথায় <em>যোগাযোগ করবেন?</em></h2><p>চৌগাছা উপজেলা, যশোর, বাংলাদেশ</p><div className="contact-list"><div><MapPin size={18} /><span><strong>অবস্থান</strong>চৌগাছা, যশোর, বাংলাদেশ</span></div><div><Phone size={18} /><span><strong>জরুরি সহায়তা</strong><Link href="/emergency">জরুরি নম্বরগুলো দেখুন</Link></span></div><div><Mail size={18} /><span><strong>সরকারি পোর্টাল</strong><a href={unionSourceUrl} target="_blank" rel="noreferrer">চৌগাছা উপজেলা পোর্টাল <ExternalLink size={13} /></a></span></div></div></div><div className="contact-panel"><span className="eyebrow">তথ্য সংশোধন</span><h3>আপনার জানা তথ্য যুক্ত করুন</h3><p>কোনো প্রতিষ্ঠান, স্থান বা গ্রামের তথ্য সংশোধনের আগে অনুগ্রহ করে সরকারি বা নির্ভরযোগ্য উৎস প্রস্তুত রাখুন।</p><Link className="button cyan-button" href="/emergency">জরুরি তথ্য দেখুন <Phone size={16} /></Link></div></div></section></main><Footer /></div>;
}
