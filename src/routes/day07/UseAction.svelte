<script lang="ts">
	let show = $state(false);

	function greet(element: HTMLElement, duration = 500) {
		element.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration,
			fill: 'forwards'
		});

		return {
			destroy() {
				console.log('destroy');
			}
		};
	}
</script>

<input bind:checked={show} type="checkbox" />

{#if show}
	<div use:greet={100}>Action</div>
	<div use:greet={300}>Action</div>
	<div use:greet>Action</div>
	<div use:greet={1000}>Action</div>
{/if}
