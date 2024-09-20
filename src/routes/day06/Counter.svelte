<script lang="ts">
	import { onDestroy, onMount, tick, untrack } from 'svelte';

	let obj = $state({ value: 0 });

	let derivedObj = $derived({ value: obj.value * 2 });
	let p: HTMLParagraphElement | null = $state(null);

	$effect.pre(() => {
		console.log(
			'\x1b[36m%s\x1b[0m',
			`[Pre Effect]\n`,
			`p.innerText: ${untrack(() => p?.innerText)} \n obj.value: ${obj.value}`
		);
		return () => {
			console.log(
				'\x1b[36m%s\x1b[0m',
				`[Pre Effect Cleanup]\n`,
				`p.innerText: ${p?.innerText} \n obj.value: ${obj.value}`
			);
		};
	});

	$effect(() => {
		console.log('\x1b[32m%s\x1b[0m', `[Effect 1]\n`, `obj.value: ${obj.value}`);
		return () => {
			console.log('\x1b[32m%s\x1b[0m', `[Effect 1 Cleanup]\n`, `obj.value: ${obj.value}`);
		};
	});

	onMount(() => {
		console.log(`\x1b[33m%s\x1b[0m`, `[onMount]\n`, `p.innerText: ${p?.innerText}`);
	});

	onDestroy(() => {
		tick().then(() => {
			console.log(
				'\x1b[31m%s\x1b[0m',
				`[onDestroy]\n`,
				`p.innerText: ${p?.innerText} \n obj.value: ${obj.value}`
			);
		});
	});
</script>

<button onclick={() => (obj.value += 1)}> Increment obj.value </button>
<button
	onclick={() =>
		(obj = {
			...obj,
			value: obj.value + 1
		})}
>
	Increment obj.value (immutable)</button
>

<p class="content" bind:this={p}>{obj.value} doubled is {derivedObj.value}</p>

<style>
	.content {
		font-size: 2rem;
		font-weight: 600;
	}
</style>
