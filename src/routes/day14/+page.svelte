<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { watch } from 'runed';

	interface Todo {
		id: number;
		title: string;
		completed: boolean;
		userId: number;
	}

	const fetchData = async (): Promise<Todo[]> => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos?_page=1');
		const data = await response.json();
		return data;
	};

	const query = createQuery<Todo[]>({
		queryKey: ['queryKey'],
		queryFn: async () => await fetchData()
	});

	const status = $derived($query.status);
	$effect(() => {
		console.log('status', status);
	});
</script>

<div class="p-12">
	{#if $query.isPending}
		Loading...
	{/if}

	{#if $query.isError}
		Error: {$query.error.message}
	{/if}

	{#if $query.isSuccess}
		<div class="flex items-center flex-col gap-4">
			{#each $query.data as todo}
				<div class="card bg-primary text-primary-content w-96">
					<div class="card-body">
						<h2 class="card-title">{todo.title}</h2>
						<p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	<!-- <div class="divider"></div>

	<h1 class="text-center mb-4">Using Await Block</h1>
	{#await fetchData()}
		Loading...
	{:then data}
		<div class="flex items-center flex-col gap-4">
			{#each data as todo}
				<div class="card bg-primary text-primary-content w-96">
					<div class="card-body">
						<h2 class="card-title">{todo.title}</h2>
						<p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
					</div>
				</div>
			{/each}
		</div>
	{:catch error}
		Error: {error.message}
	{/await} -->
</div>
