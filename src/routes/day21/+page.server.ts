import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	// default: async ({ request }) => {
	// 	const data = await request.formData();
	// 	const email = data.get('email');
	// 	const password = data.get('password');
	// 	console.log('day21/+page.server.ts actions.login', email, password);

	// 	if (!email || !password) {
	// 		return fail(400, { email, missing: true });
	// 	}

	// 	return {
	// 		status: 200,

	// 		success: true
	// 	};
	// },
	login: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		if (!email || !password) {
			return fail(400, { email, missing: true });
		}
		console.log('day21/+page.server.ts actions.login', data.get('email'), data.get('password'));

		return {
			status: 200,

			success: true
		};
	},
	register: async ({ request }) => {
		const data = await request.formData();
		console.log('day21/+page.server.ts actions.register', data.get('email'), data.get('password'));
	}
} satisfies Actions;
