<script lang="ts">
	let value = $state('Hello, World!');
	let selected = $state('a');
	let fillings = $state([]);

	let tortilla = $state('Plain');
	let fillingsCheckbox = $state([]);
</script>

<label>
	<input bind:value />
	{value}
</label>

<label>
	<select bind:value={selected}>
		<option value={'a'}>a</option>
		<option value={'b'}>b</option>
		<option value={'c'}>c</option>
	</select>
	{selected}
</label>

<label>
	<select multiple bind:value={fillings}>
		<option>Rice</option>
		<option>Beans</option>
		<option>Cheese</option>
		<option>Guac (extra)</option>
	</select>

	{#each fillings as filling}
		<p>{filling}</p>
	{/each}
</label>

<label>
	<input type="radio" bind:group={tortilla} value="Plain" />
	Plain
</label>
<label>
	<input type="radio" bind:group={tortilla} value="Whole wheat" />
	Whole wheat
</label>
<label>
	<input type="radio" bind:group={tortilla} value="Spinach" />
	Spinach
</label>
<p>{tortilla}</p>

<br />

<label>
	<input type="checkbox" bind:group={fillingsCheckbox} value="Rice" />
	Rice
</label>
<label>
	<input type="checkbox" bind:group={fillingsCheckbox} value="Beans" />
	Beans
</label>
<label>
	<input type="checkbox" bind:group={fillingsCheckbox} value="Cheese" />
	Cheese
</label>
<label>
	<input type="checkbox" bind:group={fillingsCheckbox} value="Guac (extra)" />
	Guac (extra)
</label>
<p>
	{fillingsCheckbox.join(', ')}
</p>

<style>
	label {
		display: flex;
		gap: 0.5em;
	}
</style>
