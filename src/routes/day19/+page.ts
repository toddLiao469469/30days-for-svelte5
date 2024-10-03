import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	console.log('+page.ts load;');
	console.log(data);
	return {
		title: '[+page.ts] Day 19',
		content: '[+page.ts] This is the content of day 19'
	};
};
