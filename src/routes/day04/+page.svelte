<script lang="ts">
	let count = $state(0);
	const increment = () => {
		count += 1;
	};
	const decrement = () => {
		count -= 1;
	};

	let objectState: Record<string, number> = $state({ a: 1, b: 2, c: 3 });
	const objectItemIncrement = (key: string) => () => {
		objectState[key] += 1;
	};
	let arrayState = $state([1, 2, 3]);
</script>

<h1>
	<span>
		Count: {count}
	</span>
</h1>

<button onclick={increment}>Increment</button>
<button onclick={decrement}>Decrement</button>
<button
	onclick={() => {
		count = 0;
	}}
>
	Reset
</button>

<h1>
	Object State: {JSON.stringify(objectState)}
</h1>
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

<h1>
	Array State: {JSON.stringify(arrayState)}
</h1>

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
