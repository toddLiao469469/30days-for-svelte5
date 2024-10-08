<script lang="ts">
	import type { Snapshot } from './$types';

	let formData = $state({
		email: '',
		name: ''
	});

	export const snapshot: Snapshot<typeof formData> = {
		capture: () => formData,
		restore: (value) => (formData = value)
	};

	$effect(() => {
		console.log('formData', formData, history);
	});
</script>

<label>
	Email:
	<input id="email" bind:value={formData.email} />
</label>
<label>
	Name:
	<input id="name" bind:value={formData.name} />
</label>
