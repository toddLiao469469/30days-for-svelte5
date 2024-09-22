<script lang="ts">
	let { label = 'name', value = $bindable() }: { label: string; value: string } = $props();

	$effect(() => {
		console.log('\x1b[34m%s\x1b[0m', '[Input.svelte]', value);
	});

	export const CONSTANT = 'CONSTANT';

	export const greet = () => {
		alert(`Hello, ${value}`);
	};
</script>

<label>
	<span>{label}</span>
	<input bind:value />
</label>

<style>
	input {
		border: 1px solid var(--border);
		border-radius: 4px;
		padding: 0.5rem;
		background-color: var(--background);
		color: var(--text);
	}

	label {
		display: flex;
		flex-direction: column;
		color: var(--text);
	}

	label span {
		display: block;
		margin-bottom: 0.5rem;
		color: var(--text);
	}
</style>
