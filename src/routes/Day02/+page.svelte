<script>
	import Title from './Title.svelte';
	const day = 2;
</script>

<Title />
<h1>
	Day {day}
</h1>
<div class="content">
	今天 IT 鐵人賽第 {day} 天，我們來看看 svelte 怎麼用吧！
</div>

<style scoped>
	.content {
		color: #ddd;
	}
</style>
