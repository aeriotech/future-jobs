import { jobContent } from '$lib/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params: { lang } }) => {
	const jobs = Object.entries(jobContent)
		.map(([tag, job]) => ({
			...job,
			title: job.title[lang],
			tag,
		}))
		.filter((job) => job.title);

	return { lang, jobs };
};
