import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log('+page.server.ts load');

	return {
		title: '[+page.server.ts] Day 19',
		content: '[+page.server.ts] This is the content of day 19',
		source: 'server'
	};
};
