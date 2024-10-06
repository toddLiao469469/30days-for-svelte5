import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	console.log('day22/+page.ts load');
	return {
		foo: 'foo',
		bar: 'bar'
	};
};
