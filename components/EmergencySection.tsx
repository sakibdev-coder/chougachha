import { Building2, CloudSun, Flame, Hospital, Phone, ShieldCheck, Users } from 'lucide-react';
import { emergencyItems } from '@/data/emergency';
import { SectionTitle } from './SectionTitle';

const icons = { phone: Phone, shield: ShieldCheck, flame: Flame, building: Building2, hospital: Hospital, users: Users, cloud: CloudSun };
export function EmergencySection() { return <section className="section-wrap emergency-section" id="contact"><div className="container"><SectionTitle eyebrow="জরুরি যোগাযোগ / ০৮" title={<>প্রয়োজনের তথ্য,<br /><em>সঠিকভাবে।</em></>} >জরুরি মুহূর্তে দ্রুত যোগাযোগের জন্য যাচাইকৃত সেবা নম্বরগুলো এক জায়গায়।</SectionTitle><div className="emergency-grid">{emergencyItems.map((item) => { const Icon = icons[item.icon]; return <div className="emergency-card" key={item.id}><Icon size={23} /><strong>{item.label}</strong><span>{item.description}</span><a href={`tel:${item.value.replace(/[^\d+]/g, '')}`}>{item.value}</a></div>; })}</div></div></section>; }
