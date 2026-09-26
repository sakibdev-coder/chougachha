import Image from 'next/image';
import { SectionTitle } from './SectionTitle';

const gallery = [
  ['chowgacha-town.svg', 'চৌগাছা শহর'],
  ['chowgacha-road.svg', 'চৌগাছার পথ'],
  ['chowgacha-village.svg', 'গ্রামবাংলা'],
  ['chowgacha-nature.svg', 'প্রকৃতি'],
  ['chowgacha-history.svg', 'ইতিহাস'],
];

export function Gallery() { return <section className="section-wrap gallery-modern" id="gallery"><div className="container"><SectionTitle eyebrow="ফটো গ্যালারি / ০৭" title={<>চোখে দেখা <em>চৌগাছা।</em></>} >Local placeholder assets রাখা হয়েছে। আপনার বাস্তব Chowgacha photographs public/images-এ একই নামে বসালেই gallery আপডেট হবে।</SectionTitle><div className="masonry-gallery">{gallery.map(([file, label], index) => <figure key={file} className={`gallery-tile tile-${index + 1}`}><Image src={`/images/${file}`} alt={`${label} এর placeholder ছবি`} fill sizes="(max-width: 700px) 90vw, 40vw" /><figcaption>{label}<span>0{index + 1}</span></figcaption></figure>)}</div></div></section>; }
