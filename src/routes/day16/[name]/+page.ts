import type { PageLoad } from './$types';
export const load: PageLoad = ({ params }) => {
	return {
		title: `Hello  ${params.name}!`,
		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	};
};

export const ssr = false;
