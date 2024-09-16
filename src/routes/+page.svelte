<script lang="ts">
	const name = 'Todd';

	const handleClick = (name: string) => {
		console.log(`Hello, ${name}!`);
	};
</script>

<h1 id="title">Hi, <span class="name">{name}</span>! Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button onclick={() => handleClick(name)}>Click me</button>

<style lang="scss">
	:global(body) {
		background-color: black;
	}
	#title {
		font-weight: 600;
		color: white;
	}

	#title .name {
		color: cadetblue;
	}

	p {
		color: #ddd;
	}
</style>
