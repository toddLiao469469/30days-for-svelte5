<script lang="ts">
	let count = $state(0);
	let count2 = $state(0);

	let double = $derived(count * 2);
	let total = $derived(count + count2);

	$effect(() => {
		console.log(`[Effect 1] Count: ${count} , Double: ${double}`);
	});

	$effect(() => {
		console.log(`[Effect 2] Count2: ${count2}`);
	});

	$effect(() => {
		console.log(`[Effect 3] Total: ${total}`);
	});
</script>

<p class="content">
	Count: {count}
	Double: {double}
</p>

<button
	onclick={() => {
		count += 1;
	}}>Increment</button
>
<button
	onclick={() => {
		count -= 1;
	}}>Decrement</button
>
<button
	onclick={() => {
		count = 0;
	}}
>
	Reset
</button>

<p class="content">
	Count2: {count2}
</p>
<button
	onclick={() => {
		count2 += 1;
	}}
>
	Increment count2
</button>
<button
	onclick={() => {
		count2 -= 1;
	}}
>
	Decrement count2
</button>

<button
	onclick={() => {
		count2 = 0;
	}}
>
	Reset count2
</button>

<p class="content">
	Total: {total}
</p>

<div class="divider"></div>

<style>
	.divider {
		border: 1px solid #000;
		margin: 24px 0;
	}

	.content {
		font-size: 2rem;
		font-weight: 600;
	}
</style>
