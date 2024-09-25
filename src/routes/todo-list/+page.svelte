<script lang="ts">
	import { fly } from 'svelte/transition';

	import Input from './Input.svelte';
	import PageLayout from './PageLayout.svelte';

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
			done: true
		},
		{
			id: Date.now() + 1,
			title: 'Second todo',
			content: 'This is the second todo',
			done: false
		},
		{
			id: Date.now() + 2,
			title: 'Third todo',
			content: 'This is the third todo',
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

	const removeTodo = (id: number) => {
		todoList = todoList.filter((todo) => todo.id !== id);
	};
</script>

{#snippet card(todo: Todo)}
	<div class="card shadow bg-base-200 mb-4" in:fly={{ y: 200 }} out:fly={{ y: -200 }}>
		<div class="card-body">
			<div class="flex justify-between items-center">
				<h2 class:line-through={todo.done} class="card-title">{todo.title}</h2>
				<input type="checkbox" bind:checked={todo.done} class="checkbox checkbox-lg" />
			</div>
			<p class:text-gray-700={todo.done}>{todo.content}</p>
			<button class="ml-auto w-20 btn btn-error" onclick={() => removeTodo(todo.id)}>
				Remove
			</button>
		</div>
	</div>
{/snippet}

<PageLayout>
	<div class="grid grid-cols-2 mb-8 gap-x-8">
		<Input label="Title" bind:value={title} maxLength={20} />
		<Input label="Content" bind:value={content} />
	</div>

	<button class="btn btn-primary" onclick={addTodo}> Add Todo </button>

	<div class="divider"></div>

	{#each todoList as todo (todo.id)}
		{@render card(todo)}
	{/each}
</PageLayout>
