import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	return {
		name: params?.name || 'foo',
		title: '[Day 17] Hello world! '
	};
};
