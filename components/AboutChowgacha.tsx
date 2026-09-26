import { Building2, Map, Users } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { SectionTitle } from './SectionTitle';

export function AboutChowgacha() {
  return <section className="section-wrap about-modern" id="about"><div className="container"><SectionTitle eyebrow="আমাদের চৌগাছা / ০১" title={<>একটি ঠিকানা নয়,<br /><em>একটি অনুভব।</em></>} >চৌগাছা যশোর জেলার একটি উপজেলা। এই প্ল্যাটফর্মে যাচাই করা স্থানীয় তথ্য, ইতিহাস ও জায়গাগুলো ধীরে ধীরে যুক্ত করা হবে।</SectionTitle><div className="about-cards"><GlassCard><Map className="card-icon" /><strong>যশোরের জনপদ</strong><p>দক্ষিণ-পশ্চিম বাংলাদেশের একটি পরিচিত উপজেলা।</p></GlassCard><GlassCard><Users className="card-icon" /><strong>মানুষ ও গল্প</strong><p>স্থানীয় মানুষের স্মৃতি, ঐতিহ্য ও উদ্যোগের জায়গা।</p></GlassCard><GlassCard><Building2 className="card-icon" /><strong>ভবিষ্যৎ তথ্যভান্ডার</strong><p>যাচাই করা শিক্ষা, চিকিৎসা ও সরকারি তথ্য এখানে যুক্ত হবে।</p></GlassCard></div></div></section>;
}
