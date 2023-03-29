import { content, staticContent } from '$lib/content';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params: { job: jobLabel, lang } }) => {
	const job = content[jobLabel];
	if (!job) throw redirect(302, `/${lang}`);

	const localJob = {
		...job,
		sections: job.sections.map((section) => ({
			title: section.title[lang],
			content: section.content[lang],
		})),
		title: job.title[lang],
	};

	return { job: localJob, lang, static: staticContent[lang] };
};
