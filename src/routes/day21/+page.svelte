<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col mx-auto items-center">
	<h1 class="text-primary">Login</h1>

	<form method="POST" class="w-1/2" action="?/login">
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text" class:text-error={!!$page.form?.missing}>Email</span>
			</div>
			<input
				name="email"
				type="text"
				class="input input-bordered w-full"
				value={$page.form?.email}
			/>
		</label>
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text" class:text-error={!!$page.form?.missing}>Password</span>
			</div>
			<input name="password" type="password" class="input input-bordered w-full" />
		</label>
		<div class="flex flex-col">
			<button class=" btn btn-primary mt-12 w-1/2 mx-auto" type="submit">Login</button>
			<button class="btn btn-secondary mt-4 w-1/2 mx-auto" type="submit" formaction="?/register">
				Register
			</button>
		</div>
	</form>
</div>
