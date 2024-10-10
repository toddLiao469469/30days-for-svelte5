import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ cookies, url }) => {
	if (!cookies.get('logged_in')) {
		throw redirect(303, `/day26/login?redirectTo=${url.pathname}`);
	}
};
