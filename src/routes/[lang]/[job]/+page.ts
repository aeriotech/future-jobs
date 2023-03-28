import content from '$lib/content';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params: { job: jobLabel, lang } }) => {
	const job = content[jobLabel];
	if (!job) throw error(404, 'Not Found');

	const localJob = {
		...job,
		sections: job.sections.map((section) => ({
			title: section.title[lang],
			content: section.content[lang],
		})),
		title: job.title[lang],
	};

	return { job: localJob, lang };
};
