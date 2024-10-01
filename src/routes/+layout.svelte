<script>
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import '../app.css';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<nav>
	<a href="/">Home</a>
	<a href="/day16">day16</a>
	<a href="/day17">day17</a>
</nav>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
