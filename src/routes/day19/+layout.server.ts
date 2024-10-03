import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	return {
		data: '[+layout.server.ts] Hello world!'
	};
};
