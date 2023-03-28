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
	'computer-vision-engineer': {
		title: { en: 'Computer Vision Engineer' },
		image: computerVisionEngineer,
		salary: '64,420',
		sections: [
			{
				title: { en: 'Description' },
				content: {
					en: 'As a penetration tester (pen tester for short), you’ll help businesses identify their security weaknesses before malicious hackers can do the same. You do this by attempting to breach computer networks with the company’s permission.',
				},
			},
			{
				title: { en: 'Qualifications' },
				content: {
					en: [
						'be able to write penetration tests',
						'provide reports of the test results to security decision makers',
						'find vulnerabilities in existing software / hardware',
					],
				},
			},
		],
	},
	// 'penetration-tester': {
	// 	title: 'Penetration Tester',
	// 	image: penetrationTester,
	// 	sections: [],
	// },
	// 'malware-analyst': {
	// 	title: 'Malware Analyst',
	// 	image: malwareAnalyst,
	// 	sections: [],
	// },
	// 'security-administrator': {
	// 	title: 'Security Administrator',
	// 	image: secutiryAdministrator,
	// 	sections: [],
	// },
	// 'prompt-engineer': {
	// 	title: 'Prompt Engineer',
	// 	image: promptEngineer,
	// 	sections: [],
	// },
	// 'ai-analyst': {
	// 	title: 'Artificial Intelligence Analyst',
	// 	image: artificialIntelligenceAnalyst,
	// 	sections: [],
	// },
	// 'enterprise-architect': {
	// 	title: 'Enterprise Architect',
	// 	image: enterpriseArhitect,
	// 	sections: [],
	// },
	// 'devops-engineer': {
	// 	title: 'DevOps Engineer',
	// 	image: devopsEngineer,
	// 	sections: [],
	// },
	// 'digital-transformation-specialist': {
	// 	title: 'Digital Transformation Specialist',
	// 	image: digitalTraformationSpecialist,
	// 	sections: [],
	// },
};

export default content;
