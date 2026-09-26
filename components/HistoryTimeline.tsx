import { CalendarDays, CheckCircle2, CircleDashed } from 'lucide-react';
import { historyItems } from '@/data/history';
import { SectionTitle } from './SectionTitle';

export function HistoryTimeline() {
  return <section className="section-wrap history-modern" id="history"><div className="container"><SectionTitle eyebrow="চৌগাছার ইতিহাস / ০২" title={<>শিকড় থেকে <em>আগামীর পথে।</em></>} >প্রকাশ্য তথ্যসূত্রে পাওয়া ইতিহাস আলাদা করে দেখানো হয়েছে। আরও তথ্য যাচাই হলে এই timeline-এ যুক্ত করা যাবে।</SectionTitle><div className="timeline">{historyItems.map((item, index) => <article className="timeline-item" key={item.title}><div className="timeline-node">{item.status === 'verified' ? <CheckCircle2 size={18} /> : <CircleDashed size={18} />}</div><div className="timeline-content"><span className="timeline-period"><CalendarDays size={13} /> {item.period}</span><h3>{item.title}</h3><p>{item.description}</p>{item.status === 'placeholder' && <small>যাচাইয়ের অপেক্ষায়</small>}</div><span className="timeline-index">0{index + 1}</span></article>)}</div></div></section>;
}
