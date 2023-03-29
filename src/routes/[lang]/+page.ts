import { content } from '$lib/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params: { lang } }) => {
	const jobs = Object.entries(content).map(([tag, job]) => ({
		...job,
		title: job.title[lang],
		tag,
	}));

	return { lang, jobs };
};
