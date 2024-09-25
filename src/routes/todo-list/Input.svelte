<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { bounceOut } from 'svelte/easing';

	interface InputProps {
		label: string;
		value: string;
		maxLength?: number;
	}
	let { label, value = $bindable(), maxLength }: InputProps = $props();
	const size = tweened(0, {
		duration: 400,
		easing: bounceOut
	});
	$effect(() => {
		size.set(value.length);
	});
</script>

<label class="form-control w-full">
	<div class="label">
		<span class="label-text text-primary">{label}</span>
	</div>
	<input type="text" class="input input-bordered w-full" bind:value maxlength={maxLength} />
	{#if maxLength}
		<div class="label">
			<progress
				class="progress progress-primary w-full"
				class:progress-error={$size === maxLength}
				value={$size}
				max={maxLength}
			></progress>
		</div>
	{/if}
</label>
