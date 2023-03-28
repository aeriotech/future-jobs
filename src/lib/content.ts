import computerVisionEngineer from '$lib/assets/computer-vision-engineer.png';
import penetrationTester from '$lib/assets/penetration-tester.png';
import malwareAnalyst from '$lib/assets/malware-analyst.png';
import secutiryAdministrator from '$lib/assets/security-administrator.png';
import promptEngineer from '$lib/assets/prompt-engineer.png';
import artificialIntelligenceAnalyst from '$lib/assets/ai-analyst.png';
import enterpriseArhitect from '$lib/assets/enterprise-architect.png';
import devopsEngineer from '$lib/assets/devops-engineer.png';
import digitalTraformationSpecialist from '$lib/assets/digital-transformation-specialist.png';

type Section = {
	title: Record<string, string>;
	content: Record<string, string | string[]>;
};

type Job = {
	title: Record<string, string>;
	image: string;
	salary?: string;
	sections: Section[];
};

const content: Record<string, Job> = {
	'penetration-tester': {
		title: { en: 'Penetration Tester', sl: 'Tester varnostnega prodora' },
		image: penetrationTester,
		salary: '97,383',
		sections: [
			{
				title: { en: 'Description', sl: 'Opis' },
				content: {
					en: 'As a penetration tester (pen tester for short), you’ll help businesses identify their security weaknesses before malicious hackers can do the same. You do this by attempting to breach computer networks with the company’s permission',
					sl: 'Tester prodorov (pen tester) pomaga podjetjem prepoznati njihove varnostne šibkosti, preden to lahko storijo zlonamerni hekerji. To stori tako, da poskuša vdreti v računalniška omrežja s soglasjem podjetja.',
				},
			},
			{
				title: { en: 'Qualifications', sl: 'Kvalifikacije' },
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
				},
			},
			{
				title: { en: 'Certifications', sl: 'Certifikati' },
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
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence' },
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
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge' },
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
				},
			},
		],
	},
	'malware-analyst': {
		title: { en: 'Malware Analyst', sl: 'Analitik zlonamerne programske opreme' },
		image: malwareAnalyst,
		salary: '86,925',
		sections: [
			{
				title: { en: 'Description', sl: 'Opis' },
				content: {
					en: 'Malware analysts are responsible for analysing and reverse engineering malware samples. They look at how these malicious programs work, what they do when they infect a system, and how they can be detected or prevented in the future.',
					sl: 'Analitik zlonamerne programske opreme je odgovoren za analizo in razčlenjevanje vzorcev zlonamerne programske opreme. Ogleda si kako ti zlonamerni programi delujejo, kaj počnejo ko okužijo sistem, in kako jih je mogoče v prihodnosti zaznati ali preprečiti.',
				},
			},
			{
				title: { en: 'Qualifications', sl: 'Kvalifikacije' },
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
				},
			},
			{
				title: { en: 'Certifications', sl: 'Certifikati' },
				content: {
					en: [
						'OffSec - Offensive Security',
						'CISSP - Certified Information Systems Security Professional',
					],
					sl: [
						'OffSec - Offensive Security',
						'CISSP - Certified Information Systems Security Professional',
					],
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence' },
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
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge' },
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
				},
			},
		],
	},
	'security-administrator': {
		title: { en: 'Security Administrator', sl: 'Varnostni skrbnik' },
		image: secutiryAdministrator,
		salary: '90,532',
		sections: [
			{
				title: { en: 'Description', sl: 'Opis' },
				content: {
					en: 'Security administrators are responsible for the system overall rather than for specific parts. While network and systems administrators set up and maintain the system, security administrators take a step back for an overall view of security. Rather than focusing on hardware and software like their counterparts, they work to defend the system as a whole and keep it secure from threats',
					sl: 'Skrbniki varnosti so odgovorni za sistem kot celoto, ne pa za posamezne dele. Medtem ko omrežni in sistemske skrbniki vzpostavljajo in vzdržujejo sistem, skrbniki za varnost stopijo korak nazaj za celostni pogled na varnost. Namesto osredotočanja na strojno in programsko opremo, kot njihovi kolegi, delajo na obrambi sistema kot celote in ga varujejo pred grožnjami.',
				},
			},
			{
				title: { en: 'Qualifications', sl: 'Kvalifikacije' },
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
				},
			},
			{
				title: { en: 'Certifications', sl: 'Certifikati' },
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
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence' },
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
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge' },
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
				},
			},
		],
	},
	'prompt-engineer': {
		title: { en: 'Prompt Engineer', sl: 'Inženir pozivov' },
		image: promptEngineer,
		salary: '135,000',
		sections: [
			{
				title: { en: 'Description', sl: 'Opis' },
				content: {
					en: 'You will be developing models using machine learning algorithms and deep learning neural networks to interpret the user input to give a proper output. Think about how you can create art with just writing a sentence using for example DALL-E',
					sl: 'Inženir pozivov razvija modele z uporabo algoritmov strojnega učenja in nevronskih mrež za obdelavo uporabniškega vnosa in zagotavljanje pravilnega izhoda. Razmislite kako lahko ustvarite umetnost s samo pisanjem stavkov s pomočjo DALL-E.',
				},
			},
			{
				title: { en: 'Qualifications', sl: 'Kvalifikacije' },
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
				},
			},
			{
				title: { en: 'Certificates', sl: '' },
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
				},
			},
		],
	},
	'computer-vision-engineer': {
		title: { en: 'Computer Vision Engineer', sl: 'Inženir računalniškega vida' },
		image: computerVisionEngineer,
		salary: '64,420',
		sections: [
			{
				title: { en: 'Description', sl: 'Opis' },
				content: {
					en: "As a penetration tester (pen tester for short), you'll help businesses identify their security weaknesses before malicious hackers can do the same. You do this by attempting to breach computer networks with the company's permission.",
					sl: 'Inženir računalniškega vida uporablja raziskave računalniškega vida in strojnega učenja za reševanje realnih težav, kot je na primer vožnja brez voznika. Njihovo delo uporablja velike količine podatkov in statistike za izvajanje zapletenih nalog. Poleg tega je inženir računalniškega vida zadolžen, da veliko svojega časa posveti raziskovanju in uvedbi sistemov strojnega učenja in računalniškega vida za svoje stranke in nadrejene korporacije.',
				},
			},
			{
				title: { en: 'Qualifications', sl: 'Kvalifikacije' },
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
				},
			},
			{
				title: { en: 'Certificates', sl: 'Certifikati' },
				content: {
					en: [
						'Certified Computer Vision Expert Certification (CCVE - AI3080)',
						'Certified Engineer in Computer Vision (CERTIFAI)',
					],
					sl: [
						'Certified Computer Vision Expert Certification (CCVE - AI3080)',
						'Certified Engineer in Computer Vision (CERTIFAI)',
					],
				},
			},
			{
				title: { en: 'Future implications', sl: 'Posledice v prihodnosti' },
				content: {
					en: ['Self-driving', 'Drone delivery', 'Manufacturing automation'],
					sl: ['Vozila brez voznika', 'Dostava z droni', 'Avtomatizacija proizvodnje'],
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence' },
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
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge' },
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
				},
			},
		],
	},
	'ai-analyst': {
		title: { en: 'Artificial Intelligence Analyst', sl: 'Analitik umetne inteligence' },
		image: artificialIntelligenceAnalyst,
		salary: '105,205',
		sections: [
			{
				title: { en: 'Description', sl: 'Opis' },
				content: {
					en: 'You will be tasked with evaluating already developed artificial intelligence algorithms, to prove that they are not harmful or unethical and can be safely implemented.',
					sl: 'Analitika umetne inteligence ocenjuje že razvite algoritme umetne inteligence, da dokaže, da niso škodljivi ali neetični ter da se jih lahko varno implementira.',
				},
			},
			{
				title: { en: 'Qualifications', sl: 'Kvalifikacije' },
				content: {
					en: [
						'Deep understanding of AI and machine learning',
						'Knowledge of the code of ethics and law',
					],
					sl: [
						'Globoko razumevanje umetne inteligence in strojnega učenja',
						'Poznavanje etičnega kodeksa in zakonodaje',
					],
				},
			},
			{
				title: { en: 'Certifications', sl: 'Certifikati' },
				content: {
					en: [
						'Certified Computer Vision Expert Certification (CCVE – AI3080)',
						'Certified Engineer in Computer Vision (CERTIFAI)',
					],
					sl: [
						'Certificiran strokovnjak za računalniški vid (CCVE - AI3080)',
						'Certificirani inženir za računalniški vid (CERTIFAI)',
					],
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence' },
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
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge' },
				content: {
					en: ['monitoring', 'mitigating risks', 'training and support', 'compliance', 'security'],
					sl: [
						'nadzorovanje',
						'zmanjševanje tveganj',
						'izobraževanje in podpora',
						'skladnost',
						'varnost',
					],
				},
			},
		],
	},
	'enterprise-architect': {
		title: { en: 'Enterprise Architect', sl: 'Podjetniški arhitekt' },
		image: enterpriseArhitect,
		salary: 'unknown',
		sections: [
			{
				title: { en: 'Description', sl: 'Opis' },
				content: {
					en: 'The enterprise architect is responsible for the care and maintenance of IT networks in the organization. It ensures that everything from services to hardware is running smoothly to increase productivity on the premises of a business or organization.',
					sl: 'Podjetniški arhitekt je odgovoren za skrb in vzdrževanje omrežij IT v organizaciji. Zagotavlja, da vse, od storitev do strojne opreme, nemoteno deluje, da bi se povečala produktivnost v prostorih podjetja ali organizacije. ',
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence' },
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
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge' },
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
				},
			},
		],
	},
	'devops-engineer': {
		title: { en: 'DevOps Engineer', sl: 'DevOps Inženir' },
		image: devopsEngineer,
		salary: 'unknown',
		sections: [
			{
				title: { en: 'Description', sl: 'Opis' },
				content: {
					en: 'DevOps engineers build, test, and maintain infrastructure and tools so that software can be developed and released. DevOps (development operations) is a set of procedures and processes that help organizations accelerate and automate individual aspects of software development, testing, release and updating.',
					sl: 'Inženirji DevOps gradijo, preizkušajo in vzdržujejo infrastrukturo in orodja, da se lahko programska oprema razvija in izdaja. DevOps (development operacije) je sklop postopkov in procesov, ki organizacijam pomaga pospešiti in avtomatizirati posamezne vidike razvoja, testiranja, izdajanja in posodabljanja programske opreme. ',
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence' },
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
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge' },
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
				},
			},
		],
	},
	'digital-transformation-specialist': {
		title: { en: 'Digital Transformation Specialist', sl: 'Specialist za digitalno preobrazbo' },
		image: digitalTraformationSpecialist,
		salary: 'unknown',
		sections: [
			{
				title: { en: 'Description', sl: 'Opis' },
				content: {
					en: "As a Digital Transformation Specialist, you will work as part of a team that focuses on helping our clients design and implement strategies to reinvent customer experience. You will advise, shape and deliver technology led transformation programs aiming to enhance end customers' digital experience.",
					sl: 'Strokovnjak za digitalno preobrazbo podjetju pomaga pri oblikovanju in izvajanju strategij za prenovo uporabniške izkušnje. Svetuje, oblikuje in izvaja tehnološko vodene programe preoblikovanja, katerih cilj je izboljšati digitalno izkušnjo končnih strank.',
				},
			},
			{
				title: { en: 'Competences', sl: 'Kompetence' },
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
				},
			},
			{
				title: { en: 'Tasks', sl: 'Naloge' },
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
				},
			},
		],
	},
};

export default content;
