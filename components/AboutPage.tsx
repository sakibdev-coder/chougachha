import { BarChart3, Map, ShieldCheck, Users } from 'lucide-react';
import { unionItems, verifiedVillages } from '@/data/unions';
import { historyItems } from '@/data/history';
import { AboutChowgacha } from './AboutChowgacha';
import { Footer } from './Footer';
import { HistoryTimeline } from './HistoryTimeline';
import { Navbar } from './Navbar';

export function AboutPage() {
  return <div className="site-shell about-page"><Navbar /><main><section className="info-hero"><div className="container info-hero-grid"><div><span className="eyebrow">চৌগাছা পরিচিতি / ০১</span><h1>একটি জনপদ,<br /><em>অনেক গল্প।</em></h1><p>যশোরের দক্ষিণ-পশ্চিমে অবস্থিত চৌগাছা উপজেলা। মানুষ, ইতিহাস, শিক্ষা ও স্থানীয় সেবার নির্ভরযোগ্য তথ্য এক জায়গায় সাজানোই এই উদ্যোগের উদ্দেশ্য।</p></div><div className="info-hero-stamp"><ShieldCheck size={22} /><strong>তথ্য আগে</strong><span>উৎসসহ স্থানীয় তথ্যভান্ডার</span></div></div></section><section className="about-stat-band"><div className="container about-stat-grid"><div><Map size={18} /><strong>চৌগাছা</strong><span>যশোরের উপজেলা</span></div><div><Users size={18} /><strong>{unionItems.length}</strong><span>ইউনিয়ন</span></div><div><BarChart3 size={18} /><strong>{verifiedVillages.length}</strong><span>গ্রাম তালিকাভুক্ত</span></div><div><ShieldCheck size={18} /><strong>{historyItems.length}</strong><span>ইতিহাসের অধ্যায়</span></div></div></section><AboutChowgacha /><section className="about-geography section-wrap"><div className="container about-geography-grid"><div><span className="eyebrow">ভূগোল ও জীবন / ০২</span><h2>মাটি, মানুষ<br /><em>ও চলমান জীবন।</em></h2></div><div><p>চৌগাছার ইউনিয়ন ও গ্রামগুলো কৃষি, বাজার, শিক্ষা এবং স্থানীয় সেবাকে ঘিরে একে অন্যের সঙ্গে যুক্ত। এই সাইটে প্রতিটি তথ্য আলাদা ডেটা উৎসে রাখা হয়েছে, যাতে নতুন তথ্য যোগ করা ও সংশোধন করা সহজ হয়।</p><p>ভৌগোলিক, প্রশাসনিক ও জনজীবনের তথ্য ধাপে ধাপে যাচাই করে যুক্ত করা হবে। অনুমানভিত্তিক তথ্যের বদলে অসম্পূর্ণতা স্পষ্টভাবে দেখানো এই প্ল্যাটফর্মের নীতি।</p></div></div></section><HistoryTimeline /></main><Footer /></div>;
}
