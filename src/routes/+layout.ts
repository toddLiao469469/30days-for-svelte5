import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		title: 'Hello world! ',
		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	};
};
