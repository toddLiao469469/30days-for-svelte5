<script lang="ts">
	import { fly } from 'svelte/transition';

	import Input from './Input.svelte';
	import PageLayout from './PageLayout.svelte';
	import todoListStore, { type Todo } from './todo.svelte';

	let title = $state('');
	let content = $state('');
</script>

{#snippet card(todo: Todo)}
	<div class="card shadow bg-base-200 mb-4" in:fly={{ y: 200 }} out:fly={{ y: -200 }}>
		<div class="card-body">
			<div class="flex justify-between items-center">
				<h2 class:line-through={todo.done} class="card-title">{todo.title}</h2>
				<input type="checkbox" bind:checked={todo.done} class="checkbox checkbox-lg" />
			</div>
			<p class:text-gray-700={todo.done}>{todo.content}</p>
			<button class="ml-auto w-20 btn btn-error" onclick={() => todoListStore.removeTodo(todo.id)}>
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

	<button
		class="btn btn-primary"
		onclick={() => {
			todoListStore.addTodo({ title, content });
		}}
	>
		Add Todo
	</button>

	<div class="divider"></div>

	{#each todoListStore.todoList as todo (todo.id)}
		{@render card(todo)}
	{/each}
</PageLayout>
