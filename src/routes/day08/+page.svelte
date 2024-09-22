<script lang="ts">
	import { onMount } from 'svelte';
	import Input from './Input.svelte';

	let value = $state('');
	let inputElement: Input | undefined = $state(undefined);
	onMount(() => {
		console.log('\x1b[33m%s\x1b[0m', '[onMount]', $state.snapshot(inputElement));
	});
	$effect(() => {
		console.log('\x1b[32m%s\x1b[0m', '[+page.svelte]', value);
	});
</script>

<div class="inputContainer">
	<Input bind:this={inputElement} label="name" bind:value />
</div>

<button
	onclick={() => {
		inputElement?.greet();
	}}
>
	Input.greet</button
>

<style>
	:root {
		--background: #fff;
		--text: #000;
		--border: #ccc;
		--body-background: #f5f5f5;
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--background: #333;
			--text: #fff;
			--border: #555;
			--body-background: #222;
		}
	}

	:global(body) {
		background-color: var(--body-background);
	}

	.inputContainer {
		width: 40%;
	}
</style>
