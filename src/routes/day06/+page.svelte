<script lang="ts">
	import Counter from './Counter.svelte';

	let showCounter = $state(true);
</script>

<div>
	<button
		onclick={() => {
			showCounter = !showCounter;
		}}
	>
		{showCounter ? 'Hide' : 'Show'} Counter
	</button>
</div>
{#if showCounter}
	<Counter></Counter>
{/if}

<style>
</style>
