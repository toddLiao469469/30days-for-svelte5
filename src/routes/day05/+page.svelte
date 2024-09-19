<script lang="ts">
	import Countdown from './Countdown.svelte';
	import Counter from './Counter.svelte';

	let showCounter = $state(true);
	let showCountdown = $state(false);
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

<div class="divider"></div>

<div>
	<button onclick={() => (showCountdown = !showCountdown)}>
		{showCountdown ? 'Hide' : 'Show'} Countdown
	</button>
</div>
{#if showCountdown}
	<Countdown />
{/if}

<style>
	.divider {
		border: 1px solid #000;
		margin: 24px 0;
	}
</style>
