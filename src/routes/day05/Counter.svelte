<script lang="ts">
	let obj = $state({ value: 0 });

	let derivedObj = $derived({ value: obj.value * 2 });
	let p: HTMLParagraphElement | null = $state(null);

	$effect.pre(() => {
		console.log(
			'\x1b[36m%s\x1b[0m',
			`[Pre Effect]\n`,
			`p.innerText: ${p?.innerText} \n obj.value: ${obj.value}`
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
		console.log(
			'\x1b[32m%s\x1b[0m',
			`[Effect 1]\n`,
			`p.innerText: ${p?.innerText} \n obj.value: ${obj.value}`
		);
		return () => {
			console.log(
				'\x1b[32m%s\x1b[0m',
				`[Effect 1 Cleanup]\n`,
				`p.innerText: ${p?.innerText} \n obj.value: ${obj.value}`
			);
		};
	});

	$effect(() => {
		console.log(`[Effect 2] obj: ${obj}`);
	});

	$effect(() => {
		console.log(`[Effect 3] derivedObj: ${derivedObj}`);
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
