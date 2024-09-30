<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	console.log('data', $page.params);
</script>

<h1>{$page.params.name}</h1>

<h1>
	{data.title}
</h1>
<p>
	{data.content}
</p>
