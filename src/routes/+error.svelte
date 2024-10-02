<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>status:{$page?.status}</h1>
<h1>message:{$page?.error?.message}</h1>
