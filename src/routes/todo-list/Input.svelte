<script lang="ts">
	interface InputProps {
		label: string;
		value: string;
	}
	let { label, value = $bindable() }: InputProps = $props();
</script>

<label class="form-control w-full">
	<div class="label">
		<span class="label-text text-primary">{label}</span>
	</div>
	<input type="text" class="input input-bordered w-full" bind:value />
</label>
