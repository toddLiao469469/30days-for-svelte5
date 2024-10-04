import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ data }) => {
	console.log('+layout.ts load', data);
	error(401, 'Unauthorized');
};
