<script lang="ts">
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';

	function showModal() {
		pushState('', {
			showModal: true
		});
	}
	$effect(() => {
		console.log($page.data);
	});
</script>

{#if $page.state.showModal}
	<dialog class="modal-open modal">
		<div class="modal-box">
			<h3 class="text-lg font-bold">Hello!</h3>
			<p class="py-4">This modal works with a hidden checkbox!</p>
			<div class="modal-action">
				<button
					class="btn"
					onclick={() => {
						history.back();
					}}>Close</button
				>
			</div>
		</div>
	</dialog>
{/if}

<button onclick={showModal}>Show Modal</button>
