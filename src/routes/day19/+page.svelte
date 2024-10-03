<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}
	let { data }: Props = $props();
	console.log('svelte');
</script>

<h1>data from load</h1>
<pre>{JSON.stringify(data, null, 2)}</pre>
