<script lang="ts">
	let count = $state(0);
	let count2 = $state(0);

	let double = $derived(count * 2);

	let total = $derived(count + count2);

	let objectState: Record<string, number> = $state({ a: 1, b: 2, c: 3 });
	const objectItemIncrement = (key: string) => () => {
		objectState[key] += 1;
	};
	let arrayState = $state([1, 2, 3]);

	const increment = () => {
		count += 1;
	};
	const decrement = () => {
		count -= 1;
	};
</script>

<p class="content">
	Count: {count}
	Double: {double}
</p>

<button onclick={increment}>Increment</button>
<button onclick={decrement}>Decrement</button>
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

<div class="container">
	{#each Object.entries(objectState) as [key, value]}
		<p class="content">
			{key}: {value}
		</p>
	{/each}
</div>
<button onclick={objectItemIncrement('a')}>a + 1</button>
<button onclick={objectItemIncrement('b')}>b + 1</button>
<button onclick={objectItemIncrement('c')}>c + 1</button>
<button
	onclick={() => {
		objectState.d = 4;
	}}>add d</button
>
<button
	onclick={() => {
		objectState = { a: 1, b: 2, c: 3 };
	}}
>
	Reset
</button>

<div class="divider"></div>

<div>
	<span class="content">
		{arrayState.join(', ')}
	</span>
</div>

<button
	onclick={() => {
		arrayState.push(arrayState.length + 1);
	}}
>
	Push new item
</button>
<button
	onclick={() => {
		arrayState[0] += 1;
	}}
>
	Increment first item
</button>

<button
	onclick={() => {
		arrayState = [1, 2, 3];
	}}
>
	Reset
</button>

<style>
	.divider {
		border: 1px solid #000;
		margin: 24px 0;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(4, 100px);
	}
	.content {
		font-size: 2rem;
		font-weight: 600;
	}
</style>
