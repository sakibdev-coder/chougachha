import { Building2, Flame, Hospital, Phone, ShieldCheck } from 'lucide-react';
import { emergencyItems } from '@/data/emergency';
import { SectionTitle } from './SectionTitle';

const icons = { phone: Phone, shield: ShieldCheck, flame: Flame, building: Building2, hospital: Hospital };
export function EmergencySection() { return <section className="section-wrap emergency-section" id="contact"><div className="container"><SectionTitle eyebrow="স্থানীয় তথ্য / ০৮" title={<>প্রয়োজনের তথ্য,<br /><em>সঠিকভাবে।</em></>} >ফোন নম্বর বা ঠিকানা যাচাই না হওয়া পর্যন্ত placeholder রাখা হয়েছে। স্থানীয় প্রশাসনিক উৎস থেকে তথ্য পাওয়া গেলে data/emergency.ts আপডেট করুন।</SectionTitle><div className="emergency-grid">{emergencyItems.map((item) => { const Icon = icons[item.icon]; return <div className="emergency-card" key={item.label}><Icon size={23} /><strong>{item.label}</strong><span>{item.value}</span></div>; })}</div></div></section>; }
