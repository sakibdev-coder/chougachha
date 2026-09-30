'use client';

import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { educationItems } from '@/data/education';
import { hospitalItems } from '@/data/hospitals';
import { placeItems } from '@/data/places';
import { unionItems } from '@/data/unions';
import { ThreeDBackground } from './3DBackground';

export function Hero() {
  const stats = [{ value: unionItems.length, label: 'ইউনিয়ন' }, { value: educationItems.length, label: 'শিক্ষা entry' }, { value: hospitalItems.length, label: 'স্বাস্থ্য entry' }, { value: placeItems.length, label: 'ঐতিহ্য / স্থান' }];
  return <section className="hero-modern" id="top"><ThreeDBackground /><div className="container hero-modern-grid"><motion.div className="hero-modern-copy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}><div className="location-pill"><MapPin size={13} /> চৌগাছা, যশোর, বাংলাদেশ</div><h1>আমার <em>চৌগাছা</em></h1><p className="hero-tagline">আমাদের ইতিহাস • আমাদের ঐতিহ্য •<br />আমাদের ভালোবাসা</p><p className="hero-description">চৌগাছা উপজেলার মানুষ, স্থান, ইতিহাস ও স্থানীয় তথ্যকে এক জায়গায় রাখার একটি আধুনিক উদ্যোগ।</p><div className="hero-buttons"><a className="button cyan-button" href="/about">চৌগাছা সম্পর্কে জানুন <ArrowRight size={17} /></a><a className="button ghost-button" href="/history">ইতিহাস দেখুন <ArrowRight size={17} /></a></div><div className="hero-status"><span /> তথ্যভান্ডার ধীরে ধীরে সমৃদ্ধ হচ্ছে</div><div className="hero-stats">{stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><small>ডেটা entry</small></div>)}</div></motion.div><motion.div className="hero-modern-visual" initial={{ opacity: 0, scale: .9, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .15 }}><div className="hero-image-frame"><Image src="/images/chowgacha-town.svg" alt="চৌগাছা, যশোরের স্থানীয় দৃশ্যের placeholder ছবি" fill priority sizes="(max-width: 800px) 92vw, 55vw" /></div><div className="hero-image-caption"><span>০১</span><span>চৌগাছা / যশোর</span></div><div className="hero-orb-label"><strong>১১</strong><span>ইউনিয়ন<br />একসাথে</span></div></motion.div></div></section>;
}
