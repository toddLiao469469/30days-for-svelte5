<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	console.log('data', $page.params, data);
</script>

<h1>{$page.params.name}</h1>
