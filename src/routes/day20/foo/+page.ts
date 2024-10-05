import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	console.log('foo/+page.ts load', params);

	error(401, 'Unauthorized');
};
