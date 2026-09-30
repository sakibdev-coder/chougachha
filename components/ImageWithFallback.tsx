'use client';

import Image from 'next/image';
import { Expand, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ImageWithFallback({ src, alt, source, sizes = '100vw', className = '' }: { src?: string | null; alt: string; source?: string | null; sizes?: string; className?: string }) {
  const [imageSrc, setImageSrc] = useState(src);
  const [lightbox, setLightbox] = useState(false);
  useEffect(() => setImageSrc(src), [src]);
  useEffect(() => { if (!lightbox) return; const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setLightbox(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [lightbox]);
  return <>{imageSrc ? <button className={`image-frame image-frame-real ${className}`} onClick={() => setLightbox(true)} aria-label={`${alt} বড় করে দেখুন`}><Image src={imageSrc} alt={alt} fill sizes={sizes} className="object-cover" onError={() => setImageSrc(null)} /><span className="image-expand"><Expand size={15} /></span></button> : <div className={`image-frame image-frame-empty ${className}`} role="img" aria-label={`${alt}: ছবি পাওয়া যায়নি`}><span>Image not available</span><small>ছবি যাচাই করে যুক্ত হবে</small></div>}{lightbox && imageSrc && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="ছবি বড় করে দেখুন" onClick={() => setLightbox(false)}><div className="lightbox-inner" onClick={(event) => event.stopPropagation()}><button onClick={() => setLightbox(false)} aria-label="ছবি বন্ধ করুন"><X size={22} /></button><div className="lightbox-image"><Image src={imageSrc} alt={alt} fill sizes="100vw" className="object-contain" /></div>{source && <a href={source} target="_blank" rel="noreferrer">Photo Source</a>}</div></div>}</>;
}
