'use client';

import { motion } from 'framer-motion';
import { AboutChowgacha } from '@/components/AboutChowgacha';
import { BackToTop } from '@/components/BackToTop';
import { EducationSection, HospitalSection } from '@/components/DirectorySections';
import { EmergencySection } from '@/components/EmergencySection';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Hero } from '@/components/Hero';
import { HistoryTimeline } from '@/components/HistoryTimeline';
import { Navbar } from '@/components/Navbar';
import { PlacesSection } from '@/components/PlacesSection';
import { UnionSection } from '@/components/UnionSection';

export default function Home() {
  return <div className="site-shell modern-site"><Navbar /><main><Hero /><motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .08 }} variants={{ hidden: {}, show: { transition: { staggerChildren: .08 } } }}><AboutChowgacha /><HistoryTimeline /><EducationSection /><HospitalSection /><PlacesSection /><UnionSection /><Gallery /><EmergencySection /></motion.div></main><Footer /><BackToTop /></div>;
}
