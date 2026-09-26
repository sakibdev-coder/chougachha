'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTop() { const [visible, setVisible] = useState(false); useEffect(() => { const onScroll = () => setVisible(window.scrollY > 600); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []); return visible ? <a className="back-to-top" href="#top" aria-label="উপরে ফিরে যান"><ArrowUp size={18} /></a> : null; }
