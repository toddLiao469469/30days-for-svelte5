import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ data }) => {
	console.log('+layout.ts load', data);
	return {
		data: '[+layout.ts] Hello world!'
	};
};
