import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { UnionPage } from '@/components/UnionPage';
import { VillagePage } from '@/components/VillagePage';
import { unionItems, verifiedVillages } from '@/data/unions';

export const dynamicParams = true;
export function generateStaticParams() { return [...verifiedVillages.map((village) => ({ id: village.id })), ...unionItems.map((union) => ({ id: union.id }))]; }
export function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> { return params.then(({ id }) => { const village = verifiedVillages.find((item) => item.id === id); const union = unionItems.find((item) => item.id === id); return { title: village ? `${village.name} | আমার চৌগাছা` : union ? `${union.name} | আমার চৌগাছা` : 'গ্রাম | আমার চৌগাছা' }; }); }
export default async function VillageRoute({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const village = verifiedVillages.find((item) => item.id === id); if (village) return <VillagePage village={village} />; const union = unionItems.find((item) => item.id === id); if (union) return <UnionPage union={union} />; notFound(); }
