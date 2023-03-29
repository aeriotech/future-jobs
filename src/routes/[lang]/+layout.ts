import { languages } from '$lib/content';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params: { lang }, url: { pathname } }) => {
	if (!languages.includes(lang)) {
		throw redirect(302, '/en');
	}

	const parts = pathname.split('/');
	parts.shift(); // Remove space
	parts.shift(); // Remove lang

	const links = languages.map((l) => ({
		href: ['', l, ...parts].join('/'),
		active: l === lang,
		lang: l,
	}));

	return { links, lang };
};
