import computerVisionEngineer from '$lib/assets/computer-vision-engineer.png';
import penetrationTester from '$lib/assets/penetration-tester.png';
import malwareAnalyst from '$lib/assets/malware-analyst.png';
import secutiryAdministrator from '$lib/assets/security-administrator.png';
import promptEngineer from '$lib/assets/prompt-engineer.png';
import artificialIntelligenceAnalyst from '$lib/assets/ai-analyst.png';
import enterpriseArhitect from '$lib/assets/enterprise-architect.png';
import devopsEngineer from '$lib/assets/devops-engineer.png';
import digitalTraformationSpecialist from '$lib/assets/digital-transformation-specialist.png';
import euSl from '$lib/assets/eu_sl.svg';
import euEn from '$lib/assets/eu_en.svg';
import euLt from '$lib/assets/eu_lt.svg';
import about1 from '$lib/assets/about_01.jpg';
import about2 from '$lib/assets/about_02.jpg';
import about3 from '$lib/assets/about_03.jpg';
import about4 from '$lib/assets/about_04.jpg';
import about5 from '$lib/assets/about_05.jpg';

type Section = {
	title: Record<string, string>;
	content: Record<string, string | string[]>;
};

type Job = {
	title: Record<string, string>;
	image: string;
	sections: Section[];
};

type StaticContent = {
	back: string;
	euImg: string;
	about: string;
	aboutContent: ContentElement[];
};

type Type = 'text' | 'list' | 'images';
type ContentElement = {
	type: Type;
	content: any;
};

export const languages = ['en', 'sl', 'lt'];

export const staticContent: Record<string, StaticContent> = {
	sl: {
		back: 'nazaj',
		euImg: euSl,
		about: 'O projektu',
		aboutContent: [
			{
				type: 'text',
				content:
					'Celoten projekt je bil razdeljen na 3 korake in je trajal od 1. septembra 2022 do 1. septembra 2023, pri čemer smo za vsak korak obiskali države drug drugega. Projekt je financiral program Erasmus+. Partnerski organizaciji sta bili Elektrotehniško-Računalniška Strokovna Šola in Gimnazija Ljubljana (Šola, ki je prijavila projekt) in Center za Tehnološko in Inženirsko Usposabljanje v Vilni.',
			},
			{ type: 'text', content: '1. korak' },
			{
				type: 'list',
				content: [
					'Litovci so prišli v Slovenijo',
					'Razdeljeni smo bili po skupinah in delali na svojih predstavitvah',
					'Razpravljali smo o že obstoječih delovnih mestih in ocenili, kako verjetno in kako dolgo bodo ostala pomembna',
				],
			},
			{ type: 'images', content: [about1, about2] },
			{ type: 'text', content: '2. korak' },
			{
				type: 'list',
				content: [
					'Slovenci smo odšli v Litvo',
					'V Litvi smo se pogovarjali in sestavili seznam delovnih mest, ki morda že obstajajo, vendar bodo v bližnji prihodnosti pomembna oz. pomembnejša',
				],
			},
			{ type: 'images', content: [about3, about4] },
			{ type: 'text', content: '3. korak' },
			{
				type: 'list',
				content: [
					'Litovci so odšli v Slovenijo',
					'Podatke iz 2. koraka smo uporabili za oblikovanje spletne strani in brošure v slovenskem, litovskem in angleškem jeziku',
				],
			},
			{ type: 'images', content: [about5] },
			{ type: 'text', content: 'Koordinirala Jernej Pustoslemšek in Jevgenij Chomaniuk' },
		],
	},
	en: {
		back: 'back',
		euImg: euEn,
		about: 'About the project',
		aboutContent: [
			{
				type: 'text',
				content:
					'This whole project was split into 3 steps and lasted from September 1st, 2022, to September 1st, 2023. It was financed by Erasmus+ program. There were 2 partner organizations – The Upper Secondary School of Electrical and Computer Engineering and Technical Gymnasium Ljubljana (the applicants for the project) and Vilnius technology and engineering training center. ',
			},
			{ type: 'text', content: '1st Step' },
			{
				type: 'list',
				content: [
					'Lithuanians went to Slovenia',
					'We were split into groups to work on our own presentations',
					'We discussed already existing jobs and evaluated them on how likely and how long they would stay relevant',
				],
			},
			{ type: 'images', content: [about1, about2] },
			{ type: 'text', content: '2nd step' },
			{
				type: 'list',
				content: [
					'Slovenians went to Lithuania',
					'While in Lithuania we discussed and compiled a list of jobs that might already exist but will be important/more relevant in the near future',
				],
			},
			{ type: 'images', content: [about3, about4] },
			{ type: 'text', content: '3rd step' },
			{
				type: 'list',
				content: [
					'Lithuanians went to Slovenia',
					'We used the data from the 2nd step to design a website and a brochure in Slovenian, Lithuanian and English',
				],
			},
			{ type: 'images', content: [about5] },
			{ type: 'text', content: 'Coordinated by Jernej Pustoslemšek and Jevgenij Chomaniuk' },
		],
	},

	lt: {
		back: 'atgal',
		euImg: euLt,
		about: 'Apie projektą',
		aboutContent: [
			{
				type: 'text',
				content:
					'Projektas buvo padalintas į tris žingsnius ir vyko nuo 2022 m. rugsėjo 1 d. iki 2023 m. rugsėjo 1 d. Projektas finansuotas Erasmus+ programa. Projekte dalyvauja dvi mokyklos - Liublianos elektros ir kompiuterių inžinerijos bei technikos gimnazijos aukštesnioji vidurinė mokykla ir Vilniaus technologijos ir inžinerijos mokymo centras.',
			},
			{ type: 'text', content: '1-as žingsnis' },
			{
				type: 'list',
				content: [
					'Pasiskirste i grupes atlikome prezentacija, kurioje aptareme dabartines profesijas ir jas įvertinome pagal tai, ar jos bus naudingos ateityje.',
				],
			},
			{ type: 'images', content: [about1, about2] },
			{ type: 'text', content: '2-as žingsnis' },
			{
				type: 'list',
				content: ['Apraseme profesijas, kurios gali buti naudingos ateityje.'],
			},
			{ type: 'images', content: [about3, about4] },
			{ type: 'text', content: '3-as žingsnis' },
			{
				type: 'list',
				content: [
					'Pasiskirste i grupes atlikome prezentacija, kurioje aptareme dabartines profesijas ir jas įvertinome pagal tai, ar jos bus naudingos ateityje.',
				],
			},
			{ type: 'images', content: [about5] },
			{ type: 'text', content: 'Koordinavo Jernej Pustoslemšek ir Jevgenij Chomaniuk' },
		],
	},
};

export const jobContent: Record<string, Job> = {
	'penetration-tester': {
		title: { en: 'Penetration Tester', sl: 'Tester varnostnega prodora', lt: 'Penetration Tester' },
		image: penetrationTester,
		sections: [
			{
				title: { en: 'Description', sl: 'Opis', lt: 'Aprašymas' },
				content: {
					en: 'As a penetration tester (pen tester for short), you’ll help businesses identify their security weaknesses before malicious hackers can do the same. You do this by attempting to breach computer networks with the company’s permission',
					sl: 'Tester prodorov (pen tester) pomaga podjetjem prepoznati njihove varnostne šibkosti, preden to lahko storijo zlonamerni hekerji. To stori tako, da poskuša vdreti v računalniška omrežja s soglasjem podjetja.',
					lt: 'Kaip testuotojas, atliekantis penetracijos testavimą, padėsite verslams nustatyti jų saugumo spragas, prieš nei piktybiniai žeklai tai padaro. Tai darote bandydami peržengti kompiuterių tinklus su įmonės leidimu.',
				},
			},
			{
				title: { en: 'Qualifications', sl: 'Kvalifikacije', lt: 'Kvalifikacijos' },
				content: {
					en: [
						'be able to write penetration tests',
						'provide reports of the test results to security decision maker',
						'find vulnerabilities in existing software / hardware',
					],
					sl: [
						'Znati napisati teste prodorov',
						'Predložiti poročila o rezultatih testov odločevalcem o varnost',
						'Najti ranljivosti v obstoječi programski opremi/strojni opremi',
					],
					lt: [
						'gebėjimas rašyti penetracijos testus',
						'pateikti ataskaitas apie testų rezultatus saugumo sprendimų priėmėjams',
						'rasti spragas esamame programiniame / aparatūros įrenginyje',
					],
				},
			},
			{
				title: { en: 'Certifications', sl: 'Certifikati', lt: 'Sertifikatai' },
				content: {
					en: [
						'Certified Ethical Hacker (CEH)',
						'CompTIA PenTest+',
						'GIAC Certified Penetration Tester (GPEN)',
					],
					sl: [
						'Certified Ethical Hacker (CEH)',
						'CompTIA PenTest+',
						'GIAC Certified Penetration Tester (GPEN)',
					],
					lt: [
						'Certified Ethical Hacker (CEH)',
						'CompTIA PenTest+',
						'GIAC Certified Penetration Tester (GPEN)',
					],
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence', lt: 'Kompetencijos' },
				content: {
					en: [
						'A pen tester must be knowledgeable in as many Operating Systems as possible but must be an expert in at least one',
						'Every pen tester should be somewhat knowledgeable about databases',
						'Willingness to Continually Learn',
						'Password and hash cracking',
						'Writing Scripts/Code',
					],
					sl: [
						'Tester prodora mora biti seznanjen s čim več operacijskimi sistemi, vendar mora biti strokovnjak za vsaj enega',
						'Vsak tester bi moral imeti nekaj znanja o podatkovnih bazah',
						'Pripravljenost na nenehno učenje',
						'Lomljenje in odklepanje zaščitenih (kriptiranih) ter navadnih gesel',
						'Pisanje skript/kode',
					],
					lt: [
						'Testuotojas, atliekantis penetracijos testavimą, turi turėti žinių apie kuo daugiau operacinių sistemų, bet turi būti ekspertas bent vienoje',
						'Kiekvienas testuotojas, atliekantis penetracijos testavimą, turėtų turėti šiek tiek žinių apie duomenų bazes',
						'Noras nuolat mokytis',
						'Slaptažodžių ir maišų "kirpimas"',
						'Rašyti skriptus / kodą',
					],
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge', lt: 'Užduotys' },
				content: {
					en: [
						'Perform tests on applications, network devices, and cloud infrastructures',
						'Research and experiment with different types of attacks',
						'Reverse engineer malware or spam',
						'Write technical and executive reports',
						'Develop methodologies for penetration testing',
					],
					sl: [
						'Izvajanje testov na aplikacijah, omrežnih napravah in oblakih',
						'Raziskovanje in preizkušanje različnih vrst napadov',
						'Razčlenjevanje zlonamerne programske opreme ali neželene pošte',
						'Pisanje tehničnih in izvršnih poročil',
						'Razvijanje metodologij za testiranje prodiranja',
					],
					lt: [
						'Atlikti testus taikomoms programoms, tinklo įrenginiams ir debesų infrastruktūroms',
						'Tyrinėti ir eksperimentuoti su skirtingais atakos tipais',
						'Atvirkštinis inžinerijos programinės įrangos arba neprašomo laiškų programos',
						'Rašyti technines ir vykdomąsias ataskaitas',
						'Kūrybinės metodikos, skirtos penetracijos testavimui, kūrimas',
					],
				},
			},
		],
	},
	'malware-analyst': {
		title: {
			en: 'Malware Analyst',
			sl: 'Analitik zlonamerne programske opreme',
			lt: 'Malware analitikas',
		},
		image: malwareAnalyst,
		sections: [
			{
				title: { en: 'Description', sl: 'Opis', lt: 'Aprašymas' },
				content: {
					en: 'Malware analysts are responsible for analysing and reverse engineering malware samples. They look at how these malicious programs work, what they do when they infect a system, and how they can be detected or prevented in the future.',
					sl: 'Analitik zlonamerne programske opreme je odgovoren za analizo in razčlenjevanje vzorcev zlonamerne programske opreme. Ogleda si kako ti zlonamerni programi delujejo, kaj počnejo ko okužijo sistem, in kako jih je mogoče v prihodnosti zaznati ali preprečiti.',
					lt: 'Malware analitikai atsakingi už kenksmingų programų analizę ir atvirkštinio inžinerijos procesą. Jie nagrinėja, kaip veikia šios kenksmingos programos, ką jos daro užkrėtus sistemą ir kaip jas galima aptikti ar ateityje užkirsti tam kelią.',
				},
			},
			{
				title: { en: 'Qualifications', sl: 'Kvalifikacije', lt: 'Kvalifikacijos' },
				content: {
					en: [
						'Analysing malware samples to identify their purpose and origin',
						'Researching new types of malware to help create detection methods for new threat',
						'Conducting forensic analysis on computers to recover data from damaged hard drives',
					],
					sl: [
						'Analiza vzorcev zlonamerne programske opreme za prepoznavanje namena in izvora',
						'Raziskovanje novih vrst zlonamerne programske opreme za pomoč pri ustvarjanju metod za zaznavanje novih groženj',
						'Izvajanje forenzične analize na računalnikih za obnovitev podatkov z okvarjenih trdih diskov',
					],
					lt: [
						'Kenksmingų programų analizės, siekiant nustatyti jų paskirtį ir kilmę',
						'Naujų kenksmingų programų tyrimas, siekiant sukurti naujų grėsmių aptikimo metodus',
						'Forensinis kompiuterių analizavimas, siekiant atkurti duomenis iš pažeistų kietųjų diskų',
					],
				},
			},
			{
				title: { en: 'Certifications', sl: 'Certifikati', lt: 'Sertifikatai' },
				content: {
					en: [
						'OffSec - Offensive Security',
						'CISSP - Certified Information Systems Security Professional',
					],
					sl: [
						'OffSec - Offensive Security',
						'CISSP - Certified Information Systems Security Professional',
					],
					lt: [
						'OffSec - Offensive Security',
						'CISSP - Certified Information Systems Security Professional',
					],
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence', lt: 'Kompetencijos' },
				content: {
					en: [
						'Knowledge of operating systems and networking',
						'Programming skills',
						'Understanding of security principles',
						'Ability to identify, contain, disassemble, and mitigate zero-day malware',
						'Ability to work with high-level programming language',
					],
					sl: [
						'Poznavanje operacijskih sistemov in omrežij',
						'Programerske veščine',
						'Razumevanje varnostnih načel',
						'Sposobnost identifikacije, omejevanja, razstavljanja in blažitve 0day zlonamerne programske opreme',
						'Sposobnost dela s programskimi jeziki visoke ravni',
					],
					lt: [
						'Operacinių sistemų ir tinklo žinių turėjimas',
						'Programavimo įgūdžiai',
						'Supratimas apie saugumo principus',
						'Gebėjimas identifikuoti, apriboti, išardyti ir mažinti nulinio dienos kenksmingų programų poveikį',
						'Gebėjimas dirbti su aukšto lygio programavimo kalba',
					],
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge', lt: 'Užduotys' },
				content: {
					en: [
						'Creates documentation for security policies',
						'Responds to incident reports',
						'Recommends and carries out procedures designed to help systems recover from inflicted damage',
						'Responsible for preventing the spread of malware',
						'Classifies malware based on threats and characteristics',
					],
					sl: [
						'Ustvarja dokumentacijo za varnostne politike',
						'Odziv na poročila o incidentih',
						'Priporoča in izvaja postopke, namenjene pomoči sistemom pri okrevanju po povzročeni škodi',
						'Odgovoren za preprečevanje širjenja zlonamerne programske opreme',
						'Klasificira zlonamerno programsko opremo glede na grožnje in značilnosti',
					],
					lt: [
						'Dokumentacijos kūrimas saugumo politikoms',
						'Reaguojama į incidentų pranešimus',
						'Rekomendacijų teikimas ir vykdymas, skirtas sistemoms atkurti po patirtos žalos',
						'Atsakomybė už kenksmingų programų plitimo prevenciją',
						'Kenksmingų programų klasifikavimas pagal grėsmes ir charakteristikas',
					],
				},
			},
		],
	},
	'security-administrator': {
		title: {
			en: 'Security Administrator',
			sl: 'Varnostni skrbnik',
			lt: 'Apsaugos administratorius',
		},
		image: secutiryAdministrator,
		sections: [
			{
				title: { en: 'Description', sl: 'Opis', lt: 'Aprašymas' },
				content: {
					en: 'Security administrators are responsible for the system overall rather than for specific parts. While network and systems administrators set up and maintain the system, security administrators take a step back for an overall view of security. Rather than focusing on hardware and software like their counterparts, they work to defend the system as a whole and keep it secure from threats',
					sl: 'Skrbniki varnosti so odgovorni za sistem kot celoto, ne pa za posamezne dele. Medtem ko omrežni in sistemske skrbniki vzpostavljajo in vzdržujejo sistem, skrbniki za varnost stopijo korak nazaj za celostni pogled na varnost. Namesto osredotočanja na strojno in programsko opremo, kot njihovi kolegi, delajo na obrambi sistema kot celote in ga varujejo pred grožnjami.',
					lt: 'Apsauga administratoriai yra atsakingi už sistemą kaip visumą, o ne už konkrečias dalis. Tuo tarpu tinklo ir sistemos administratoriai nustato ir palaiko sistemą, o saugumo administratoriai žiūri iš tolimesnio saugumo aspekto. Jie nekoncentruoja dėmesio į aparatūrą ir programinę įrangą, kaip jų kolegos, bet siekia apsaugoti sistemą kaip visumą nuo grėsmių.',
				},
			},
			{
				title: { en: 'Qualifications', sl: 'Kvalifikacije', lt: 'Kvalifikacijos' },
				content: {
					en: [
						'Defending systems against unauthorized access, modification and/or destruction',
						'Scanning and assessing network for vulnerabilities',
						'Configuring and supporting security tools such as firewalls, anti-virus software and patch management systems',
					],
					sl: [
						'Obramba sistemov pred nepooblaščenim dostopom, spremembami in/ali uničenjem',
						'Skeniranje in ocenjevanje omrežja za ranljivosti',
						'Konfiguriranje in podpora varnostnim orodjem, kot so požarni zidovi, protivirusni programi in sistemi za upravljanje popravkov',
					],
					lt: [
						'Sistemos gynyba nuo neautorizuoto prieigos, modifikacijų ir/ar sunaikinimo',
						'Tinklo skenavimas ir vertinimas siekiant nustatyti pažeidžiamumus',
						'Konfigūruojant ir palaikant saugumo įrankius, pvz., ugniasienės, antivirusinės programinės įrangos ir atnaujinimų tvarkymo sistemų',
					],
				},
			},
			{
				title: { en: 'Certifications', sl: 'Certifikati', lt: 'Sertifikatai' },
				content: {
					en: [
						'Security 5 Certification',
						'CISM - Certified Information Security Manager',
						'ISP - Industrial Security Professional Certification',
					],
					sl: [
						'Security 5 Certification',
						'CISM - Certified Information Security Manager',
						'ISP - Industrial Security Professional Certification',
					],
					lt: [
						'Security 5 Certification',
						'CISM - Certified Information Security Manager',
						'ISP - Industrial Security Professional Certification',
					],
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence', lt: 'Kompetencijos' },
				content: {
					en: [
						"An associate's or bachelor's degree in computer science, cyber security, or a related field",
						'A strong understanding and knowledge of computers, networks, and security systems',
						'Good teaching, interpersonal, and communication skill',
						'Strong analytical, critical thinking, and problem-solving skills',
						"Advanced training certifications may be advantageous, so it's best to have them. It also makes you more qualified for the position",
					],
					sl: [
						'Strokovna izobrazba na področju računalništva, kibernetske varnosti ali sorodne discipline',
						'Dobro poznavanje računalnikov, omrežij in varnostnih sistemov',
						'Dobre učne, medosebne in komunikacijske sposobnosti',
						'Močne analitične veščine, veščine kritičnega razmišljanja in reševanja problemov',
						'Napredne certifikacije za usposabljanje so lahko koristne, saj boste imeli večje možnosti za pridobitev dela',
					],
					lt: [
						'Kompiuterijos, kibernetinio saugumo ar susijusių sričių bakalauro ar magistro laipsnis',
						'Geras supratimas ir žinios apie kompiuterius, tinklus ir saugumo sistemas',
						'Geros mokymo, tarpasmeninės ir bendravimo įgūdžiai',
						'Stiprūs analitiniai, kritiniai mąstymo ir sprendimo priėmimo įgūdžiai',
						'Papildomas mokymas ir sertifikatai gali būti naudingi, todėl geriausia juos turėti. Tai taip pat padidina jūsų kvalifikaciją pareigoms atlikti',
					],
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge', lt: 'Užduotys' },
				content: {
					en: [
						'Installing, administering, and troubleshooting network security solutions',
						'Configuring security systems, analysing security requirements, and recommending improvements',
						'Monitoring network traffic for suspicious behaviour',
						'Configuring and supporting security tools, such as firewalls and anti-virus software',
						'Training staff to understand and use security protocols',
					],
					sl: [
						'Nameščanje, upravljanje in odpravljanje težav z varnostnimi rešitvami za omrežja',
						'Konfiguriranje varnostnih sistemov, analiziranje varnostnih zahtev in priporočanje izboljšav',
						'Spremljanje omrežnega prometa za sumljive aktivnost',
						'Konfiguriranje in podpora varnostnih orodij, kot so požarni zidovi in protivirusni programi',
						'Usposabljanje zaposlenih, da razumejo in uporabljajo varnostne protokole',
					],
					lt: [
						'Įdiegti, administruoti ir taisyti tinklo saugumo sprendimus',
						'Konfigūruoti saugumo sistemas, analizuoti saugumo reikalavimus ir rekomenduoti patobulinimus',
						'Stebėti tinklo eismą ir stebėti įtartinas veiklas',
						'Konfigūruoti ir palaikyti saugumo įrankius, pvz., ugniasienes ir antivirusines programas',
						'Mokyti personalą suprasti ir naudoti saugumo protokolus',
					],
				},
			},
		],
	},
	'prompt-engineer': {
		title: { en: 'Prompt Engineer', sl: 'Inženir pozivov', lt: 'Prompt inžinierius' },
		image: promptEngineer,
		sections: [
			{
				title: { en: 'Description', sl: 'Opis', lt: 'Aprašymas' },
				content: {
					en: 'You will be developing models using machine learning algorithms and deep learning neural networks to interpret the user input to give a proper output. Think about how you can create art with just writing a sentence using for example DALL-E',
					sl: 'Inženir pozivov razvija modele z uporabo algoritmov strojnega učenja in nevronskih mrež za obdelavo uporabniškega vnosa in zagotavljanje pravilnega izhoda. Razmislite kako lahko ustvarite umetnost s samo pisanjem stavkov s pomočjo DALL-E.',
					lt: 'Jūs kurti modelius naudojant mašininio mokymosi algoritmus ir giliosios mokymosi neuroninius tinklus, kad galėtume interpretuoti naudotojo įvestį ir duoti tinkamą išvestį. Pagalvokite, kaip galite sukurti meną, naudodami tik vieną sakinį, pavyzdžiui, naudodami DALL-E.',
				},
			},
			{
				title: { en: 'Qualifications', sl: 'Kvalifikacije', lt: 'Kvalifikacijos' },
				content: {
					en: [
						'Statistical analysis and computing',
						'Machine learning',
						'Converting machine learning models to APIs',
					],
					sl: [
						'Statistična analiza in računalništvo',
						'Strojno učenje',
						'Pretvarjanje modelov strojnega učenja v API-je',
					],
					lt: [
						'Statistinė analizė ir skaičiavimai',
						'Mašininis mokymasis ',
						'Mašininio mokymosi modelių konvertavimas į API',
					],
				},
			},
			{
				title: { en: 'Certificates', sl: 'Certifikati', lt: '' },
				content: {
					en: [
						'IBM AI Engineering Professional Certificate',
						'AWS Certified Machine Learning',
						'Professional Machine Learning Engineer by Google',
					],
					sl: [
						'IBM AI Engineering Professional Certificate',
						'AWS Certified Machine Learning',
						'Professional Machine Learning Engineer by Google',
					],
					lt: [
						'IBM AI Engineering Professional Certificate',
						'AWS Certified Machine Learning',
						'Professional Machine Learning Engineer by Google',
					],
				},
			},
		],
	},
	'computer-vision-engineer': {
		title: {
			en: 'Computer Vision Engineer',
			sl: 'Inženir računalniškega vida',
			lt: 'Kompiuterinės vizijos inžinierius',
		},
		image: computerVisionEngineer,
		sections: [
			{
				title: { en: 'Description', sl: 'Opis', lt: 'Aprašymas' },
				content: {
					en: "As a penetration tester (pen tester for short), you'll help businesses identify their security weaknesses before malicious hackers can do the same. You do this by attempting to breach computer networks with the company's permission.",
					sl: 'Inženir računalniškega vida uporablja raziskave računalniškega vida in strojnega učenja za reševanje realnih težav, kot je na primer vožnja brez voznika. Njihovo delo uporablja velike količine podatkov in statistike za izvajanje zapletenih nalog. Poleg tega je inženir računalniškega vida zadolžen, da veliko svojega časa posveti raziskovanju in uvedbi sistemov strojnega učenja in računalniškega vida za svoje stranke in nadrejene korporacije.',
					lt: 'Kompiuterinės regos inžinieriai taiko kompiuterinės regos ir mašininio mokymosi tyrimus siekdami išspręsti realių pasaulio problemų, pvz., savarankiško važiavimo. Jų darbas naudoja didelius duomenų kiekius ir statistiką, siekiant atlikti sudėtingas užduotis. Be to, kompiuterinės regos inžinieriai užsiima daug laiko skirtu tyrimams ir mašininio mokymosi bei kompiuterinės regos sistemų diegimui savo klientų įmonėse ir didžiosiose korporacijose.',
				},
			},
			{
				title: { en: 'Qualifications', sl: 'Kvalifikacije', lt: 'Kvalifikacijos' },
				content: {
					en: [
						'Develop image analysis algorithms',
						'Develop Deep Learning architectures to solve problems',
						'Design and create platforms for image processing and visualization',
						'Understand dataflow programming',
					],
					sl: [
						'Razvijanje algoritmov za analizo slik',
						'Razvijanje arhitektur globokih učenj za reševanje problemov',
						'Oblikovanje in ustvarjanje platform za obdelavo in vizualizacijo slik',
						'Razumevanje programiranja toka podatkov',
					],
					lt: [
						'Kurti vaizdų analizės algoritmus',
						'Kurti giluminio mokymosi architektūras problemoms spręsti',
						'Projektuoti ir kurti platformas vaizdų apdorojimui ir vizualizacijai',
						'Suprasti duomenų srauto programavimą',
					],
				},
			},
			{
				title: { en: 'Certificates', sl: 'Certifikati', lt: 'Sertifikatai' },
				content: {
					en: [
						'Certified Computer Vision Expert Certification (CCVE - AI3080)',
						'Certified Engineer in Computer Vision (CERTIFAI)',
					],
					sl: [
						'Certified Computer Vision Expert Certification (CCVE - AI3080)',
						'Certified Engineer in Computer Vision (CERTIFAI)',
					],
					lt: [
						'Certified Computer Vision Expert Certification (CCVE - AI3080)',
						'Certified Engineer in Computer Vision (CERTIFAI)',
					],
				},
			},
			{
				title: { en: 'Future implications', sl: 'Posledice v prihodnosti', lt: 'Būsimos kryptys' },
				content: {
					en: ['Self-driving', 'Drone delivery', 'Manufacturing automation'],
					sl: ['Vozila brez voznika', 'Dostava z droni', 'Avtomatizacija proizvodnje'],
					lt: [
						'Savarankiškas vairavimas',
						'Skraidančių dronų pristatymas',
						'Gamybos automatizavimas',
					],
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence', lt: '/' },
				content: {
					en: [
						"Full-time degree in computer science or engineering with a specialisation in computer vision or advanced machine learning concepts (Masters, Bachelor's or PhD)",
						'Object-oriented programming skills',
						'Knowledge of Python, C++, Matlab, R, SQL, OpenCV etc.',
						'Rudimentary grasp of linear algebra principles (matrix factorization, principal component analysis, dimensional reduction, linear transformation, matrix multiplication etc.)',
						'Ability to develop machine learning models',
					],
					sl: [
						'Izobrazba na področju računalništva ali strojništva s specializacijo na področju računalniškega vida ali naprednih konceptov strojnega učenja (magisterij, dodiplomski ali doktorat)',
						'Sposobnost objektno orientiranega programiranja',
						'Poznavanje programskih jezikov Python, C++, Matlab, R, SQL, OpenCV itd.',
						'Osnovno poznavanje načel linearne algebre (razcep matrik, glavne komponente, zmanjšanje dimenzij, linearna transformacija, množenje matrik itd.)',
						'Zmožnost razvoja modelov strojnega učenja',
					],
					lt: ['/'],
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge', lt: '/' },
				content: {
					en: [
						'Develop image analysis algorithms',
						'Develop deep learning architectures to solve problems',
						'Design and create platforms for image processing and visualisation',
						'Use knowledge of computer vision libraries',
						'Understand dataflow programming',
					],
					sl: [
						'Razvijanje algoritmov za analizo slik',
						'Razvijanje arhitektur globokih učenj za reševanje problemo',
						'Oblikovanje in ustvarjanje platform za obdelavo in vizualizacijo slik',
						'Uporaba poznavanja knjižnic za računalniški vid',
						'Razumevanje programiranja toka podatkov',
					],
					lt: ['/'],
				},
			},
		],
	},
	'ai-analyst': {
		title: {
			en: 'Artificial Intelligence Analyst',
			sl: 'Analitik umetne inteligence',
			lt: 'Dirbtinio intelekto analitikas',
		},
		image: artificialIntelligenceAnalyst,
		sections: [
			{
				title: { en: 'Description', sl: 'Opis', lt: 'Aprašymas' },
				content: {
					en: 'You will be tasked with evaluating already developed artificial intelligence algorithms, to prove that they are not harmful or unethical and can be safely implemented.',
					sl: 'Analitika umetne inteligence ocenjuje že razvite algoritme umetne inteligence, da dokaže, da niso škodljivi ali neetični ter da se jih lahko varno implementira.',
					lt: 'Jūsų užduotis bus įvertinti jau sukurtus dirbtinio intelekto algoritmus, kad įrodytumėte, jog jie yra saugūs, etiški ir gali būti saugiai įdiegti.',
				},
			},
			{
				title: { en: 'Qualifications', sl: 'Kvalifikacije', lt: 'Kvalifikacijos' },
				content: {
					en: [
						'Deep understanding of AI and machine learning',
						'Knowledge of the code of ethics and law',
					],
					sl: [
						'Globoko razumevanje umetne inteligence in strojnega učenja',
						'Poznavanje etičnega kodeksa in zakonodaje',
					],
					lt: [
						'Gili dirbtinio intelekto ir mašininio mokymosi supratimas',
						'Etikos kodekso ir teisės žinios',
					],
				},
			},
			{
				title: { en: 'Certifications', sl: 'Certifikati', lt: 'Sertifikatai' },
				content: {
					en: [
						'Certified Computer Vision Expert Certification (CCVE – AI3080)',
						'Certified Engineer in Computer Vision (CERTIFAI)',
					],
					sl: [
						'Certificiran strokovnjak za računalniški vid (CCVE - AI3080)',
						'Certificirani inženir za računalniški vid (CERTIFAI)',
					],
					lt: [
						'Certificiran strokovnjak za računalniški vid (CCVE - AI3080)',
						'Certificirani inženir za računalniški vid (CERTIFAI)',
					],
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence', lt: 'Kompetencijos' },
				content: {
					en: [
						'experience in Natural Language Processing, logistic regression',
						'strong oral and written communication skills',
						'the ability to work with multiple teams to understand business needs',
						'experience writing software and APIs',
						'experience with system integration',
					],
					sl: [
						'izkušnje na področju obdelave naravnega jezika in logistične regresije',
						'močne komunikacijske spretnosti v pisni in ustni obliki',
						'zmožnost dela z več ekipami za razumevanje poslovnih potreb',
						'izkušnje s pisanjem programske opreme in API-jev',
						'izkušnje z integracijo sistemov',
					],
					lt: [
						'Patirtis natūralių kalbų apdorojimo ir logistinės regresijos srityje',
						'Stiprios žodinės ir rašytinės komunikacijos įgūdžiai',
						'Sugebėjimas dirbti su keliais komandomis, siekiant suprasti verslo poreikius',
						'Patirtis rašant programinę įrangą ir API Sistemos integracijos patirtis',
					],
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge', lt: 'Užduotys' },
				content: {
					en: ['monitoring', 'mitigating risks', 'training and support', 'compliance', 'security'],
					sl: [
						'nadzorovanje',
						'zmanjševanje tveganj',
						'izobraževanje in podpora',
						'skladnost',
						'varnost',
					],
					lt: [
						'Stebėjimas',
						'Rizikos mažinimas',
						'Mokymas ir palaikymas',
						'Pritaikymas prie reikalavimų',
						'Saugumas',
					],
				},
			},
		],
	},
	'enterprise-architect': {
		title: { en: 'Enterprise Architect', sl: 'Podjetniški arhitekt', lt: 'Verslo architektas ' },
		image: enterpriseArhitect,
		sections: [
			{
				title: { en: 'Description', sl: 'Opis', lt: 'Aprašymas' },
				content: {
					en: 'The enterprise architect is responsible for the care and maintenance of IT networks in the organization. It ensures that everything from services to hardware is running smoothly to increase productivity on the premises of a business or organization.',
					sl: 'Podjetniški arhitekt je odgovoren za skrb in vzdrževanje omrežij IT v organizaciji. Zagotavlja, da vse, od storitev do strojne opreme, nemoteno deluje, da bi se povečala produktivnost v prostorih podjetja ali organizacije. ',
					lt: 'Įmonės architektas yra atsakingas už organizacijos IT tinklų priežiūrą ir palaikymą. Jis užtikrina, kad viskas, pradedant paslaugomis ir baigiant technine įranga, veiktų sklandžiai ir taip padidintų produktyvumą įmonės ar organizacijos patalpose.',
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence', lt: 'Kvalifikacijos' },
				content: {
					en: [
						"Strategic thinking: The ability to understand and align an organization's goals and objectives with technology and business processes.",
						'Technical knowledge: Familiarity with a wide range of technologies and how they can be used to support business goals.',
						'Business acumen: Knowledge of the industry and organization, including its financials, operations, and market dynamics.',
						'Communication skills: The ability to effectively communicate with stakeholders, including business leaders and IT professionals.',
						'Leadership and change management: The ability to lead and manage change within an organization, including the ability to influence and negotiate with stakeholders.',
					],
					sl: [
						'Strateško razmišljanje: Sposobnost razumevanja in usklajevanja ciljev organizacije s poslovnimi procesi in tehnologijo. ',
						'Tehnično znanje: Poznavanje širokega nabora tehnologij in kako jih lahko uporabimo za podporo poslovnim ciljem. ',
						'Poslovna spretnost: Poznavanje industrije in organizacije, vključno s financami, operacijami in tržnimi dinamikami. ',
						'Komunikacijske sposobnosti: Sposobnost učinkovitega komuniciranja s deležniki, vključno z vodilnimi predstavniki poslovanja in IT strokovnjaki. ',
						'Vodenje in upravljanje sprememb: Sposobnost vodenja in upravljanja sprememb znotraj organizacije, vključno s sposobnostjo vplivanja in pogajanja z deležniki. ',
					],
					lt: [
						'Strateginis mąstymas: Gebėjimas suprasti ir suderinti organizacijos tikslus ir uždavinius su technologijomis ir verslo procesais.',
						'Techninės žinios: "Techninės žinios": "Žinios apie įvairias technologijas ir jų panaudojimą verslo tikslams įgyvendinti.',
						'Verslo išmanymas: pramonės šakos ir organizacijos, įskaitant jos finansus, operacijas ir rinkos dinamiką, išmanymas.',
						'Bendravimo įgūdžiai: Gebėjimas veiksmingai bendrauti su suinteresuotosiomis šalimis, įskaitant verslo vadovus ir IT specialistus.',
						'Lyderystė ir pokyčių valdymas: Gebėjimas vadovauti ir valdyti pokyčius organizacijoje, įskaitant gebėjimą daryti įtaką ir derėtis su suinteresuotosiomis šalimis',
					],
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge', lt: 'Užduotys' },
				content: {
					en: [
						"Developing and maintaining the enterprise architecture: This includes creating models and diagrams that show the current and future state of the organization's technology landscape, as well as identifying and documenting the relationships between different systems and components.",
						'Aligning technology with business goals: Enterprise Architects must work closely with business leaders to understand their goals and objectives, and then use this information to guide the design and development of technology solutions that support them.',
						'Managing change: Enterprise Architects must be able to manage and lead change within the organization, including the ability to influence and negotiate with stakeholders.',
						'Governance: Ensure IT governance best practices are followed, including compliance, risk management and alignment with business objectives.',
						"Creating and enforcing standards: Enterprise Architects are often responsible for creating and enforcing standards for the organization's technology landscape, including standards for data, security, and application development.",
						"Identifying and Managing risks: Identify, assess and mitigate risks associated with the organization's technology landscape and the implementation of new solutions",
						'Facilitating communication and collaboration: Enterprise Architects must facilitate communication and collaboration between different teams and departments, including IT, business, and operations.',
						"Continuously monitoring and evaluating the organization's technology landscape: Enterprise Architects must continuously monitor the organization's technology landscape, identify areas for improvement and implement changes to optimize business outcomes.",
					],
					sl: [
						'Razvoj in vzdrževanje podjetniške arhitekture: To vključuje ustvarjanje modelov in diagramov, ki prikazujejo trenutno in prihodnje stanje tehnološke pokrajine organizacije, ter prepoznavanje in dokumentiranje odnosov med različnimi sistemi in komponentami. ',
						'Usklajevanje tehnologije s poslovnimi cilji: Podjetniški arhitekti morajo tesno sodelovati z vodilnimi predstavniki poslovanja, da razumejo njihove cilje in namene, nato pa uporabiti te informacije za vodenje oblikovanja in razvoja tehnoloških rešitev, ki jih podpirajo. ',
						'Upravljanje sprememb: Podjetniški arhitekti morajo biti sposobni upravljati in voditi spremembe znotraj organizacije, vključno s sposobnostjo vplivanja in pogajanja z deležniki. ',
						'Upravljanje z izvrševanjem: Zagotavljanje najboljših praks za izvrševanje IT, vključno s skladnostjo, upravljanjem tveganj in usklajevanjem z poslovnimi cilji. ',
						'Ustvarjanje in izvajanje standardov: Podjetniški arhitekti so pogosto odgovorni za ustvarjanje in izvajanje standardov za tehnološko pokrajino organizacije, vključno s standardi za podatke, varnostjo in razvojem aplikacij. ',
						'Prepoznavanje in upravljanje tveganj: Prepoznavanje, ocenjevanje in blaženje tveganj, povezanih z informacijsko tehnološko pokrajino organizacije in uvedbo novih rešitev. ',
						'Olajšanje komunikacije in sodelovanja: Arhitekti podjetja morajo olajšati komunikacijo in sodelovanje med različnimi ekipami in oddelki. ',
						'Neprekinjeno spremljanje in ocenjevanje informacijsko-tehnološke pokrajine organizacije: Arhitekti podjetja morajo neprekinjeno spremljati informacijsko-tehnološko pokrajino organizacije, prepoznati področja za izboljšanje in izvesti spremembe, da se dosežejo optimalni poslovni rezultati. ',
					],
					lt: [
						'Įmonės architektūros kūrimas ir palaikymas: tai apima modelių ir diagramų, rodančių dabartinę ir būsimą organizacijos technologijų aplinkos būklę, kūrimą, ryšių tarp skirtingų sistemų ir komponentų nustatymą ir dokumentavimą',
						'Įmonių architektai turi glaudžiai bendradarbiauti su verslo vadovais, kad suprastų jų tikslus ir uždavinius, o tada remdamiesi šia informacija kurti ir tobulinti technologinius sprendimus, kurie padėtų juos įgyvendinti',
						'Pokyčių valdymas: įmonių architektai turi gebėti valdyti pokyčius organizacijoje ir jiems vadovauti, įskaitant gebėjimą daryti įtaką ir derėtis su suinteresuotosiomis šalimis',
						'Įgyvendinimo valdymas: užtikrinti geriausią IT įgyvendinimo praktiką, įskaitant atitiktį, rizikos valdymą ir suderinimą su verslo tikslais',
						'Įmonių architektai dažnai yra atsakingi už organizacijos technologinės aplinkos standartų kūrimą ir įgyvendinimą, įskaitant duomenų standartus, saugumą ir taikomųjų programų kūrimą',
						'Rizikos nustatymas ir valdymas: rizikos, susijusios su organizacijos informacinių technologijų aplinka ir naujų sprendimų diegimu, nustatymas, vertinimas ir mažinimas',
						'Palengvinti bendravimą ir bendradarbiavimą: įmonių architektai turi palengvinti skirtingų komandų ir skyrių bendravimą ir bendradarbiavimą',
						'Įmonių architektai turi nuolat stebėti ir vertinti organizacijos IT aplinką: įmonių architektai turi nuolat stebėti organizacijos IT aplinką, nustatyti tobulintinas sritis ir įgyvendinti pokyčius, kad būtų pasiekti optimalūs verslo rezultatai',
					],
				},
			},
		],
	},
	'devops-engineer': {
		title: { en: 'DevOps Engineer', sl: 'DevOps Inženir', lt: 'DevOps inžinierius' },
		image: devopsEngineer,
		sections: [
			{
				title: { en: 'Description', sl: 'Opis', lt: 'Aprašymas' },
				content: {
					en: 'DevOps engineers build, test, and maintain infrastructure and tools so that software can be developed and released. DevOps (development operations) is a set of procedures and processes that help organizations accelerate and automate individual aspects of software development, testing, release and updating.',
					sl: 'Inženirji DevOps gradijo, preizkušajo in vzdržujejo infrastrukturo in orodja, da se lahko programska oprema razvija in izdaja. DevOps (development operacije) je sklop postopkov in procesov, ki organizacijam pomaga pospešiti in avtomatizirati posamezne vidike razvoja, testiranja, izdajanja in posodabljanja programske opreme. ',
					lt: 'DevOps inžinieriai kuria, testuoja ir prižiūri infrastruktūrą bei įrankius, kad būtų galima kurti ir išleisti programinę įrangą. DevOps (angl. development operations) - tai procedūrų ir procesų rinkinys, padedantis organizacijoms paspartinti ir automatizuoti atskirus programinės įrangos kūrimo, testavimo, išleidimo ir atnaujinimo aspektus.',
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence', lt: 'Kvalifikacijos' },
				content: {
					en: [
						'Understanding of software development and deployment processes',
						'Knowledge of cloud infrastructure, particularly AWS, Azure or GCP',
						'Ability to troubleshoot and diagnose issues across the entire system',
						'Experience with performance and scalability testing',
						'Knowledge of network architecture and protocols',
					],
					sl: [
						'Razumevanje procesov razvoja in implementacije programske opreme',
						'Poznavanje infrastrukture oblaka, zlasti AWS, Azure ali GCP',
						'Zmožnost odpravljanja težav in diagnoze težav v celotnem sistemu',
						'Izkušnje s testiranjem zmogljivosti in prilagodljivosti',
						'Poznavanje omrežne arhitekture in protokolov ',
					],
					lt: [
						'Programinės įrangos kūrimo ir diegimo procesų supratimas',
						'Debesijos infrastruktūros, ypač AWS, Azure arba GCP, išmanymas',
						'Gebėjimas šalinti ir diagnozuoti visos sistemos problemas',
						'Patirtis atliekant našumo ir masteliavimo bandymus',
						'Tinklo architektūros ir protokolų išmanymas',
					],
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge', lt: 'Užduotys' },
				content: {
					en: [
						'Automating software deployment and configuration management',
						'Managing and monitoring servers, networks, and storage',
						'Building and maintaining CI/CD pipelines',
						'Performing testing and quality assurance on new software releases',
						'Managing and maintaining monitoring and logging systems.',
					],
					sl: [
						'Avtomatizacija razporejanja programske opreme in upravljanja s konfiguracijo',
						'Upravljanje in spremljanje strežnikov, omrežij in pomnilniških naprav',
						'Izdelava in vzdrževanje CI/CD omrežij',
						'Izvajanje testiranja in zagotavljanje kakovosti za nove izdaje programske opreme',
						'Upravljanje in vzdrževanje sistemov za spremljanje in beleženje. ',
					],
					lt: [
						'Programinės įrangos diegimo ir konfigūracijos valdymo automatizavimas',
						'Serverių, tinklų ir saugyklų valdymas ir stebėjimas',
						'CI/CD vamzdynų kūrimas ir priežiūra',
						'Naujų programinės įrangos versijų testavimas ir kokybės užtikrinimas',
						'Stebėsenos ir registravimo sistemų valdymas ir priežiūra',
					],
				},
			},
		],
	},
	'digital-transformation-specialist': {
		title: {
			en: 'Digital Transformation Specialist',
			sl: 'Specialist za digitalno preobrazbo',
			lt: 'Specialistas skaitmeninei transformacijai',
		},
		image: digitalTraformationSpecialist,
		sections: [
			{
				title: { en: 'Description', sl: 'Opis', lt: 'Aprašymas' },
				content: {
					en: "As a Digital Transformation Specialist, you will work as part of a team that focuses on helping our clients design and implement strategies to reinvent customer experience. You will advise, shape and deliver technology led transformation programs aiming to enhance end customers' digital experience.",
					sl: 'Strokovnjak za digitalno preobrazbo podjetju pomaga pri oblikovanju in izvajanju strategij za prenovo uporabniške izkušnje. Svetuje, oblikuje in izvaja tehnološko vodene programe preoblikovanja, katerih cilj je izboljšati digitalno izkušnjo končnih strank.',
					lt: 'Būdamas skaitmeninės transformacijos specialistu, dirbsite komandoje, kuri padeda klientams kurti ir įgyvendinti strategijas, kaip iš naujo sukurti klientų patirtį. Konsultuosite, formuosite ir įgyvendinsite technologijomis paremtas transformacijos programas, kuriomis siekiama pagerinti galutinių klientų skaitmeninę patirtį.',
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence', lt: 'Kvalifikacijos' },
				content: {
					en: [
						'Technical skills: A strong understanding of digital technologies and how they can be used to improve business processes and operations',
						'Leadership: The ability to lead and manage teams, and to communicate effectively with stakeholders at all levels of the organization',
						'Strategic thinking: The ability to think strategically and to develop and implement long-term plans that align with organizational goals',
						'Data analytics: The ability to analyse and interpret data to drive decision making and measure the success of digital transformation initiatives',
						'Project management: The ability to plan and execute projects effectively, and to manage resources and timelines to deliver results',
					],
					sl: [
						'Tehnične veščine: Močno razumevanje digitalnih tehnologij in kako jih lahko uporabimo za izboljšanje poslovnih procesov in operacij',
						'Vodenje: Sposobnost vodenja in upravljanja s skupinami ter učinkovite komunikacije z deležniki na vseh ravneh organizacije',
						'Strateško razmišljanje: Sposobnost strateškega razmišljanja ter razvoja in izvajanja dolgoročnih načrtov, ki se ujemajo z organizacijskimi cilji',
						'Strateško razmišljanje: Sposobnost strateškega razmišljanja ter razvoja in izvajanja dolgoročnih načrtov, ki se ujemajo z organizacijskimi cilji',
						'Upravljanje projektov: Sposobnost načrtovanja in izvajanja projektov ter upravljanja s časovnimi roki in viri za dosego rezultatov',
					],
					lt: [
						"Techniniai įgūdžiai: 'Techniniai įgūdžiai: geras skaitmeninių technologijų supratimas ir jų panaudojimo verslo procesams ir operacijoms tobulinti'",
						'Vadovavimas: Gebėjimas vadovauti ir valdyti komandas, efektyviai bendrauti su suinteresuotosiomis šalimis visais organizacijos lygmenimis',
						'Strateginis mąstymas: Gebėjimas strategiškai mąstyti ir kurti bei įgyvendinti ilgalaikius planus, atitinkančius organizacijos tikslus',
						'Duomenų analizė: Gebėjimas analizuoti ir interpretuoti duomenis, kad būtų galima priimti sprendimus ir įvertinti skaitmeninės transformacijos iniciatyvų sėkmę',
						'Projektų valdymas: Gebėjimas veiksmingai planuoti ir vykdyti projektus, valdyti išteklius ir terminus, kad būtų pasiekti rezultatai',
					],
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge', lt: 'Užduotys' },
				content: {
					en: [
						'Identifying and analysing business problems and opportunities: This may involve conducting research and working with stakeholders to understand their needs and goals',
						'Developing and implementing digital solutions: This may involve selecting and implementing digital technologies, such as cloud computing, artificial intelligence, and the Internet of Things, to improve business processes and operations',
						'Measuring the success of digital transformation initiatives: This may involve developing and implementing metrics to track progress and evaluate the effectiveness of digital solutions',
						'Managing and leading change: This may involve developing and implementing change management plans to address cultural and organizational challenges that arise during digital transformation',
						'Continuously monitoring and evaluating the digital market and technology advancements to stay current and find new opportunities for the company',
					],
					sl: [
						'Identifikacija in analiza poslovnih težav in priložnosti: To lahko vključuje raziskovanje in sodelovanje z deležniki, da razumete njihove potrebe in cilje',
						'Razvoj in izvajanje digitalnih rešitev: To lahko vključuje izbiro in uvajanje digitalnih tehnologij, kot so računalništvo v oblaku, umetna inteligenca in IoT, za izboljšanje poslovnih procesov in operacij',
						'Merjenje uspeha digitalnih iniciativ: To lahko vključuje razvoj in izvajanje merilnikov za spremljanje napredka in ocenjevanje učinkovitosti digitalnih rešitev',
						'Upravljanje in vodenje sprememb: To lahko vključuje razvoj in izvajanje načrtov za upravljanje s spremembami, da se naslovijo kulturni in organizacijski izzivi, ki se pojavijo med digitalno preobrazbo',
						'Nenehno spremljanje in ocenjevanje digitalnega trga in tehnološkega napredka, da ostanete na tekočem in najdete nove priložnosti za podjetje',
					],
					lt: [
						'Verslo problemų ir galimybių nustatymas ir analizė: Tai gali būti susiję su tyrimų atlikimu ir bendradarbiavimu su suinteresuotosiomis šalimis, siekiant suprasti jų poreikius ir tikslus',
						'Skaitmeninių sprendimų kūrimas ir įgyvendinimas: Tai gali apimti skaitmeninių technologijų, pavyzdžiui, debesų kompiuterijos, dirbtinio intelekto ir daiktų interneto, parinkimą ir diegimą siekiant pagerinti verslo procesus ir operacijas',
						'Skaitmeninės transformacijos iniciatyvų sėkmės vertinimas: Tai gali apimti metrikų, skirtų pažangai stebėti ir skaitmeninių sprendimų veiksmingumui vertinti, kūrimą ir diegimą',
						'Pokyčių valdymas ir vadovavimas jiems: Tai gali apimti pokyčių valdymo planų, skirtų spręsti kultūrinius ir organizacinius iššūkius, kylančius skaitmeninės transformacijos metu, kūrimą ir įgyvendinimą',
						'Nuolat stebėti ir vertinti skaitmeninę rinką ir technologijų pažangą, kad įmonė būtų nuolat atnaujinama ir rastų naujų galimybių',
					],
				},
			},
		],
	},
};
