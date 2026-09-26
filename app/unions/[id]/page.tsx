import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { UnionPage } from '@/components/UnionPage';
import { unionItems } from '@/data/unions';

export function generateStaticParams() { return unionItems.map((union) => ({ id: union.id })); }
export function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> { return params.then(({ id }) => { const union = unionItems.find((item) => item.id === id); return { title: union ? `${union.name} | আমার চৌগাছা` : 'ইউনিয়ন | আমার চৌগাছা' }; }); }
export default async function UnionRoute({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const union = unionItems.find((item) => item.id === id); if (!union) notFound(); return <UnionPage union={union} />; }
