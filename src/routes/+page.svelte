<script lang="ts">
	import type { PageData } from './$types';
	const name = 'Todd';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const handleClick = (name: string) => {
		console.log(`Hello, ${name}!`);
	};
	console.log('data', data);
</script>

<h1 id="title">Hi, <span class="name">{name}</span>! Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button onclick={() => handleClick(name)}>Click me</button>
