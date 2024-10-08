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

<nav class="mb-4">
	<a href="/">Home</a>
	<a href="/day16">day16</a>
	<a href="/day17">day17</a>
	<a href="/day18">day18</a>
	<a href="/day19">day19</a>
	<a href="/day20">day20</a>
	<a href="/day21">day21</a>
	<a href="/day22" data-sveltekit-preload-data="hover" data-sveltekit-preload-code="eager">day22</a>
	<a href="/day23">day23</a>
	<a href="/day24">day24</a>
</nav>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
