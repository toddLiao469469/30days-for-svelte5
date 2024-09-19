<script lang="ts">
	let count = $state(0);

	$effect(() => {
		console.log('Starting interval');
		const id = setInterval(() => {
			count += 1;
		}, 1000);

		return () => {
			console.log('Clearing interval');
			clearInterval(id);
		};
	});
</script>

{count}
