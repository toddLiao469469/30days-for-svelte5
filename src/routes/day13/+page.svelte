<script lang="ts">
	import { watch, StateHistory, FiniteStateMachine } from 'runed';

	type ToggleStates = 'off' | 'on';
	type ToggleEvents = 'toggle';

	const toggleFSM = new FiniteStateMachine<ToggleStates, ToggleEvents>('off', {
		off: {
			toggle: 'on'
		},
		on: {
			toggle: 'off'
		}
	});

	type CoffeeMachineStates = 'off' | 'idle' | 'grinding' | 'brewing';
	type CoffeeMachineEvents = 'powerOn' | 'powerOff' | 'start' | 'grindComplete' | 'brewComplete';

	const coffeeMachineFSM = new FiniteStateMachine<CoffeeMachineStates, CoffeeMachineEvents>('off', {
		off: {
			powerOn: 'idle'
		},
		idle: {
			start: 'grinding',
			powerOff: 'off'
		},
		grinding: {
			grindComplete: 'brewing',
			powerOff: 'off'
		},
		brewing: {
			brewComplete: 'idle',
			powerOff: 'off'
		}
	});

	let countOne = $state(0);
	let countTwo = $state(0);

	const history = new StateHistory(
		() => countOne,
		(c) => (countOne = c)
	);

	watch(
		() => countOne,
		() => {
			console.log('countOne', countOne, 'countTwo', countTwo);
		}
	);
</script>

<div class="p-12">
	<div class="flex gap-12">
		<button class="btn" onclick={() => countOne++}>Count One {countOne}</button>
		<button class="btn" onclick={() => countTwo++}>Count Two {countTwo}</button>
	</div>
	<div>
		<button class="btn" disabled={!history.canUndo} onclick={() => history.undo()}>Undo</button>
		<button class="btn" disabled={!history.canRedo} onclick={() => history.redo()}>Redo</button>
	</div>
	<div>
		{#each history.log as { snapshot, timestamp }}
			<div class="flex gap-4">
				<div>
					value: {snapshot}
				</div>
				<div>
					{new Date(timestamp)}
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-12">
		toggleFSM {toggleFSM.current}
		<button class="btn" onclick={() => toggleFSM.send('toggle')}>Toggle</button>
	</div>

	<div class="mt-12">
		coffeeMachineFSM {coffeeMachineFSM.current}
		<button class="btn" onclick={() => coffeeMachineFSM.send('powerOn')}>Power On</button>
		<button class="btn" onclick={() => coffeeMachineFSM.send('powerOff')}>Power Off</button>
		<button class="btn" onclick={() => coffeeMachineFSM.send('start')}>Start</button>
		<button class="btn" onclick={() => coffeeMachineFSM.send('grindComplete')}
			>Grind Complete</button
		>
		<button class="btn" onclick={() => coffeeMachineFSM.send('brewComplete')}>Brew Complete</button>
	</div>
</div>
