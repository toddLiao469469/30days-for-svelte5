<script lang="ts">
	import { onMount } from 'svelte';

	let canvasElement: HTMLCanvasElement = $state();

	onMount(() => {
		const ctx = canvasElement.getContext('2d');
		ctx.fillStyle = 'red';
		ctx.fillRect(10, 10, 100, 100);
	});
</script>

<canvas bind:this={canvasElement}></canvas>
