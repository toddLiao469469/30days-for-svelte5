<script lang="ts">
	import { type Snippet } from 'svelte';

	interface PageLayoutProps {
		children: Snippet;
	}
	let { children }: PageLayoutProps = $props();
</script>

<div class="max-w-3xl mx-auto">
	{@render children()}
</div>
