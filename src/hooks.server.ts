import { error, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('[hook]', event.request.url);
	if (event.url.pathname === '/day23/detail') {
		const session = event.cookies.get('session');
		if (!session) {
			error(401, 'Unauthorized');
		}
	}

	return await resolve(event);
};
