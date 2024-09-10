<script lang="ts">
	const nameList = ['Todd', 'Larry', 'Danny'];

	const promise: Promise<string> = new Promise((resolve) => {
		setTimeout(() => {
			resolve('Hello, World!');
		}, 5000);
	});

	const errorPromise = new Promise((_, reject) => {
		setTimeout(() => {
			reject('Error: Something went wrong');
		}, 5000);
	});

	const fetchData = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		const data = (await response.json()) as {
			id: number;
			title: string;
			completed: boolean;
			userId: number;
		};
		return data;
	};
</script>

{#if true}
	<h1>it will always be shown</h1>
{/if}

{#if false}
	<h1>it will never be shown</h1>
{/if}

<select>
	{#each nameList as name}
		<option>{name}</option>
	{/each}
</select>

{#await promise}
	<h1>Loading...</h1>
{:then result}
	<h1>{result}</h1>
{:catch error}
	<h1>Error: {error}</h1>
{/await}

{#await errorPromise}
	<h1>Loading...</h1>
{:then result}
	<h1>1{result}</h1>
{:catch error}
	<h1>Error: {error}</h1>
{/await}

{#await fetchData()}
	<h1>Loading...</h1>
{:then result}
	<div>
		<p>id: {result.id}</p>
		<p>title: {result.title}</p>
		<p>completed: {result.completed}</p>
		<p>userId: {result.userId}</p>
	</div>
{:catch error}
	<h1>Error: {error}</h1>
{/await}

<style>
	h1 {
		color: cadetblue;
	}
</style>
