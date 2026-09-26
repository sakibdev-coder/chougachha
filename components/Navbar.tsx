'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { GlobalSearch } from './GlobalSearch';

const links = [['পরিচিতি', '/#about'], ['ইতিহাস', '/history'], ['শিক্ষা', '/education'], ['চিকিৎসা', '/hospitals'], ['ইউনিয়ন', '/unions'], ['স্থান', '/#places']];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-nav"><div className="nav-inner"><Link className="logo" href="/"><span>চ</span><b>আমার<br /><i>চৌগাছা</i></b></Link><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav><GlobalSearch /><Link className="nav-cta" href="/#contact">যোগাযোগ <span>↗</span></Link><button className="menu-button" aria-label="মেনু খুলুন" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button></div></header>;
}
