import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { email, password } = await request.json();
	if (email === 'todd@example.com' && password === '123456') {
		cookies.set('session', email, {
			path: '/',
			httpOnly: true,
			maxAge: 60 * 60 * 24
		});

		return new Response(JSON.stringify({ success: true }));
	}

	error(401, 'Invalid email or password');
};
