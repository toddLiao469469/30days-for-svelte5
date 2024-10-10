import { redirect } from '@sveltejs/kit';
import type { Action } from './$types';

export const actions: Action = {
	default: ({ cookies }) => {
		cookies.delete('logged_in', { path: '/' });
		throw redirect(303, '/day26/login');
	}
};
