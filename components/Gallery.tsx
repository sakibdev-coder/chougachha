'use client';

import { motion } from 'framer-motion';
import { galleryItems } from '@/data/gallery';
import { ImageWithFallback } from './ImageWithFallback';
import { SectionTitle } from './SectionTitle';

export function Gallery() { return <section className="section-wrap gallery-modern" id="gallery"><div className="container"><SectionTitle eyebrow="ফটো গ্যালারি / ০৭" title={<>চোখে দেখা <em>চৌগাছা।</em></>} >শুধু যাচাই করা Chowgacha photograph যুক্ত করা হবে। ছবি না পাওয়া গেলে placeholder দেখানো হবে, কোনো random image নয়।</SectionTitle><div className="masonry-gallery">{galleryItems.map((item, index) => <motion.figure key={item.id} className={`gallery-tile tile-${index + 1}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }}><ImageWithFallback src={item.image} source={item.imageSource} alt={item.title} sizes="(max-width: 700px) 90vw, 40vw" /><figcaption>{item.title}<span>0{index + 1}</span></figcaption></motion.figure>)}</div></div></section>; }
