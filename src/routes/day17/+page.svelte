<script lang="ts">
	import { type PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	console.log('data', data);
</script>

<h1>Day17</h1>
