import { languages } from '$lib/content';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params: { lang } }) => {
	if (!languages.includes(lang)) {
		throw redirect(302, '/en');
	}

	return { lang };
};
