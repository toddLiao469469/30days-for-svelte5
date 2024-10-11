import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { API_KEY } from '$env/static/private';
import { PUBLIC_API_URL } from '$env/static/public';

import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = () => {
	console.log(`API_KEY=${API_KEY}`);
	console.log(`PUBLIC_API_URL=${PUBLIC_API_URL}`);
	console.log(`[$env/dynamic/private]API_KEY_2=${env.API_KE}`);
	console.log(`[$env/dynamic/private]PUBLIC_API_URL_2=${env.PUBLIC_API_URL_2}`);
	console.log(`[$env/dynamic/public]PUBLIC_API_URL_2=${publicEnv.PUBLIC_API_URL_2}`);
	console.log(`[$env/dynamic/public]=${JSON.stringify(publicEnv, null, 2)}`);
};
