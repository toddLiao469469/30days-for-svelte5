<script lang="ts">
	import { goto } from '$app/navigation';

	let email = $state('');
	let password = $state('');
	let response: Response | undefined = $state();
	const login = async () => {
		response = await fetch('/day23/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});

		if (response.ok) {
			goto('/day23/detail');
		}
	};
</script>

<div class="flex flex-col mx-auto items-center">
	<h1 class="text-primary">Login</h1>

	<div class="w-1/2">
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Email</span>
			</div>
			<input name="email" type="text" class="input input-bordered w-full" bind:value={email} />
		</label>
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Password</span>
			</div>
			<input
				name="password"
				type="password"
				class="input input-bordered w-full"
				bind:value={password}
			/>
		</label>
		<div class="flex flex-col">
			<button class=" btn btn-primary mt-12 w-1/2 mx-auto" type="button" onclick={login}
				>Login</button
			>
			<button class="btn btn-secondary mt-4 w-1/2 mx-auto" type="button"> Register </button>
		</div>
	</div>
</div>

<div class="toast toast-center">
	{#if response && !response.ok}
		<div class="alert alert-error">
			<span> login failed </span>
		</div>
	{/if}
</div>
