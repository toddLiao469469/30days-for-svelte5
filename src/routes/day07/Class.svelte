<script lang="ts">
	let isActive = $state(true);
	let isAdmin = $state(true);
</script>

<button onclick={() => (isActive = !isActive)}>Toggle</button>

<!-- 這兩個是一樣意思 -->
<div class={isActive ? 'active' : ''}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
<div class:active={isActive}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

<!-- 如果 class 剛好叫做 active 可以這麼簡寫-->
<div class:isActive>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

<!-- Multiple class toggles can be included -->
<div class:isActive class:inactive={!isActive} class:isAdmin>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit
</div>

<style>
	.active {
		color: green;
	}

	.inactive {
		color: red;
	}

	.isAdmin {
		font-weight: bold;
	}
</style>
