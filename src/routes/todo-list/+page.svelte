<script lang="ts">
	interface Todo {
		id: number;
		title: string;
		content: string;
		done: boolean;
	}

	let todoList: Todo[] = $state([
		{
			id: Date.now(),
			title: 'First todo',
			content: 'This is the first todo',
			done: false
		}
	]);

	let title = $state('');
	let content = $state('');

	const addTodo = () => {
		todoList.push({
			id: Date.now(),
			title,
			content,
			done: false
		});

		title = '';
		content = '';
	};
</script>

<div class="max-w-3xl mx-auto">
	<div class="grid grid-cols-2 mb-8 gap-x-8">
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text text-primary">Title</span>
			</div>
			<input type="text" class="input input-bordered w-full" bind:value={title} />
		</label>

		<label class="form-control w-full">
			<div class="label">
				<span class="label-text text-primary">Content</span>
			</div>
			<input type="text" class="input input-bordered w-full" bind:value={content} />
		</label>
	</div>

	<button class="btn btn-primary" onclick={addTodo}> Add Todo </button>

	<div class="divider"></div>

	{#each todoList as todo (todo.id)}
		<div class="card shadow bg-base-200 mb-4">
			<div class="card-body">
				<div class="flex justify-between items-center">
					<h2 class="card-title">{todo.title}</h2>
					<input type="checkbox" bind:checked={todo.done} class="checkbox checkbox-lg" />
				</div>
				<p>{todo.content}</p>
			</div>
		</div>
	{/each}
</div>
