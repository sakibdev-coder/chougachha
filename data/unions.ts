export type Village = { id: string; name: string; unionId: string; unionName: string; description?: string | null; population?: number | null; image?: string | null; imageSource?: string | null; latitude?: number | null; longitude?: number | null; googleMapsUrl?: string | null; source?: string | null };
export type Union = { id: string; number: number; unionNo: string; name: string; nameEn: string; villages: Village[]; image?: string | null; imageSource?: string | null; description?: string | null; chairman?: string | null; phone?: string | null; address?: string | null; source?: string | null };
export type UnionItem = Union;

type UnionVillageData = { unionNo: string; name: string; nameEn: string; villages: string[] };

const unionVillages: UnionVillageData[] = [
	{ unionNo: '01', name: 'ফুলসারা ইউনিয়ন', nameEn: 'Phulsara Union', villages: ['Afra', 'Arardaha', 'Balidapara', 'Baraihati', 'Chanda', 'Charabari', 'Durgabarkati', 'Jamira', 'Kotalipur', 'Mohammadpur', 'Phulsara', 'Raynagar', 'Salua', 'Shibnagar', 'Syedpur', 'Tentulbaria'] },
	{ unionNo: '02', name: 'পাশাপোল ইউনিয়ন', nameEn: 'Pashapol Union', villages: ['Banurhuda', 'Bara Gobindapur', 'Bariali', 'Bil Eral', 'Burindia', 'Dashpakia', 'Duriali', 'Gopinathpur', 'Hauli', 'Kaliakundi', 'Maliganti', 'Matsyaranga', 'Palua', 'Pashapol', 'Raghunathpur', 'Raniali', 'Sureshwarkati'] },
	{ unionNo: '03', name: 'সিংহঝুলী ইউনিয়ন', nameEn: 'Singhajhuli Union', villages: ['Garibpur', 'Huda Fatepur', 'Jagannathpur', 'Jahangirpur', 'Jamalta', 'Majali', 'Mashiurnagar', 'Pitambarpur', 'Singhajhuli'] },
	{ unionNo: '04', name: 'ধুলিয়ানী ইউনিয়ন', nameEn: 'Dhuliani Union', villages: ['Azmatpur', 'Bhadra', 'Dhuliani', 'Fatepur', 'Bara Kabilpur', 'Chhota Kabilpur', 'Kushtia', 'Moktarpur', 'Mukundapur', 'Shahzadpur', 'Ujirpur'] },
	{ unionNo: '05', name: 'চৌগাছা ইউনিয়ন', nameEn: 'Chougachha Union', villages: ['Ber Gobindapur', 'Chandpur', 'Dighalsingha', 'Dakkhin Kayarpara', 'Uttar Kayarpara', 'Laskarpur', 'Manmathapur', 'Mashwampur'] },
	{ unionNo: '06', name: 'জগদিশপুর ইউনিয়ন', nameEn: 'Jagadishpur Union', villages: ['Arkandi', 'Arpara', 'Dakkhin Sagar', 'Jagadishpur', 'Jhinaikundu', 'Kandi', 'Marua', 'Mirzapur', 'Sarfarajpur'] },
	{ unionNo: '07', name: 'পাতিবিলা ইউনিয়ন', nameEn: 'Patibila Union', villages: ['Bhabanipur', 'Bishwanathpur', 'Hayatpur', 'Muktadaha', 'Niamatpur', 'Patibila', 'Purahuda', 'Rostampur', 'Sadipur', 'Teghari'] },
	{ unionNo: '08', name: 'হাকিমপুর ইউনিয়ন', nameEn: 'Hakimpur Union', villages: ['Arazi Debipur', 'Arazi Sultanpur', 'Baksipur', 'Chakla', 'Chandrapara', 'Debipur', 'Fakirabad', 'Hajipur', 'Hakimpur', 'Math Hakimpur', 'Dulalpur', 'Jatrapur', 'Komarpur', 'Math Chakla', 'Swaruppur', 'Taherpur', 'Tajbijpur'] },
	{ unionNo: '09', name: 'স্বরূপদহ ইউনিয়ন', nameEn: 'Swarupdaha Union', villages: ['Andharkota', 'Bagardari', 'Chutarhuda', 'Dighari', 'Gadadharpur', 'Gayra', 'Hijli', 'Bara Kakuria', 'Chhota Kakuria', 'Kakuria Naodapara', 'Nayra', 'Tilakpur', 'Bahilapota', 'Baje Kharincha', 'Debalaya', 'Kharincha', 'Kharincha Naodapara', 'Madhabpur', 'Lakkhipur', 'Masila', 'Sanchadanga', 'Sarbananda Huda', 'Kadamtala', 'Swarupdaha', 'Tengurpur'] },
	{ unionNo: '10', name: 'নারায়ণপুর ইউনিয়ন', nameEn: 'Narayanpur Union', villages: ['Bahadurpur', 'Bara Khanpur', 'Batikamari', 'Bhagabanpur', 'Bundalitala', 'Chandpara', 'Guatali', 'Kadbila', 'Kismat Khanpur', 'Mandartalapara', 'Hazrakhana', 'Hogaldanga', 'Ilishmari', 'Mangirpara', 'Narayanpur', 'Petbhara'] },
	{ unionNo: '11', name: 'সুখপুকুরিয়া ইউনিয়ন', nameEn: 'Sukhpukuria Union', villages: ['Andulia', 'Arsingri', 'Ballabhpur', 'Barni', 'Daulatpur', 'Durgapur', 'Indrapur', 'Kulia', 'Makapur', 'Nagar Barni', 'Pukuria', 'Purapara', 'Rajapur', 'Ramkrishnapur', 'Sukhpukuria', 'Tilakpur'] },
];

const unionIds = ['phulsara', 'pashapole', 'singhajhuli', 'dhuliani', 'chowgacha', 'jagadishpur', 'patibila', 'hakimpur', 'swarupdaha', 'narayanpur', 'sukpukhuria'];
const source = 'চৌগাছা উপজেলার ইউনিয়নভিত্তিক গ্রাম তালিকা';

export const unionItems: Union[] = unionVillages.map((union, index) => {
	const id = unionIds[index];
	const number = index + 1;
	return {
		id,
		number,
		unionNo: union.unionNo,
		name: `${number}নং ${union.name.replace(' ইউনিয়ন', '')} ইউনিয়ন`,
		nameEn: union.nameEn,
		villages: union.villages.map((name, villageIndex) => ({
			id: `${id}-${villageIndex + 1}`,
			name,
			unionId: id,
			unionName: union.name,
			googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${union.name}, Chougachha, Jashore`)}`,
			source,
		})),
		image: null,
		imageSource: null,
		description: `${union.nameEn}; ${union.villages.length}টি গ্রাম`,
		chairman: null,
		phone: null,
		address: null,
		source,
	};
});

export const unionSourceUrl = 'https://chougachha.jessore.gov.bd/';
export const verifiedVillages = unionItems.flatMap((union) => union.villages);
