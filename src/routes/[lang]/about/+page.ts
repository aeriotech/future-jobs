import { staticContent } from '$lib/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params: { lang } }) => {
	return staticContent[lang];
};
