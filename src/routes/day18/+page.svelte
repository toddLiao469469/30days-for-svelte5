<script lang="ts">
	let min = $state(0);
	let max = $state(100);
	const getRandomNumber = async ({ min, max }: { min: number; max: number }): Promise<number> => {
		const response = await fetch(`/api/random-number?min=${min}&max=${max}`);

		if (response.ok) {
			return response.json();
		}

		const error = await response.json();

		throw new Error(error.message);
	};

	// const getRandomNumber = async ({ min, max }: { min: number; max: number }): Promise<number> => {
	// 	return fetch(`/api/random-number?min=${min}&max=${max}`).then((x) => x.json());
	// };
</script>

<h1>Day18</h1>

<div class="flex gap-6 w-1/2">
	<label for="min">
		Min: {min}

		<input type="range" min="0" max="100" bind:value={min} class="range" />
	</label>
	<label for="max">
		Max: {max}

		<input type="range" min="0" max="100" bind:value={max} class="range" />
	</label>
</div>

{#await getRandomNumber({ min, max }) then number}
	<p>Random number: {number}</p>
{:catch error}
	<p style="color: red;">{error.message}</p>
{/await}
