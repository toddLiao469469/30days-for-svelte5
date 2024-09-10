<script lang="ts">
	const randomNumber = Math.floor(Math.random() * 5);
	const user = {
		name: 'Todd',
		email: 'todd@example.com',
		phone: '09123456789'
	};

	const map = new Map([
		['name', 'Todd'],
		['email', 'todd@example.com'],
		['phone', '09123456789']
	]);
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

<h2>{'{#if}'}</h2>
{#if true}
	<p>it will always be shown</p>
{/if}

{#if false}
	<p>it will never be shown</p>
{/if}

{#if randomNumber === 0}
	<p>randomNumber is 0</p>
{:else if randomNumber >= 1 && randomNumber <= 3}
	<p>randomNumber is between 1 and 3</p>
{:else}
	<p>randomNumber is 4</p>
{/if}

<div class="divider"></div>

<h2>{'{#each}'}</h2>

{#each ['Todd', 'Larry', 'Danny'] as name}
	<p>name: {name}</p>
{/each}

{#each Object.entries(user) as [key, value]}
	<p>{key} : {value}</p>
{/each}

{#each map as [key, value]}
	<p>{key} : {value}</p>
{/each}

<div class="divider"></div>

<h2>{'{#await}'}</h2>
{#await promise}
	<p>Loading...</p>
{:then result}
	<p>{result}</p>
{:catch error}
	<p>Error: {error}</p>
{/await}

{#await errorPromise}
	<p>Loading...</p>
{:then result}
	<p>1{result}</p>
{:catch error}
	<p>Error: {error}</p>
{/await}

{#await fetchData()}
	<p>Loading...</p>
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
	.divider {
		border: 1px solid #000;
	}
	h1 {
		color: cadetblue;
	}
</style>
