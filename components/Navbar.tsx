'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [['পরিচিতি', '#about'], ['ইতিহাস', '#history'], ['শিক্ষা', '#education'], ['চিকিৎসা', '#hospitals'], ['স্থান', '#places']];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-nav"><div className="nav-inner"><a className="logo" href="#top"><span>চ</span><b>আমার<br /><i>চৌগাছা</i></b></a><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><a className="nav-cta" href="#contact">যোগাযোগ <span>↗</span></a><button className="menu-button" aria-label="মেনু খুলুন" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button></div></header>;
}
