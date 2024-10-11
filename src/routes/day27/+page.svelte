<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	// import { env } from '$env/dynamic/private';
	import { env as publicEnv } from '$env/dynamic/public';

	console.log(`PUBLIC_API_URL=${PUBLIC_API_URL}`);
	console.log(`$env/dynamic/public=${JSON.stringify(publicEnv, null, 2)}`);
</script>

<h1>Day 27</h1>
