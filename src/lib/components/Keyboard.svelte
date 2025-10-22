<script lang="ts">
	import { keys } from '../data/keyboardLayout';
	import Key from './Key.svelte';
	import { SvelteSet } from 'svelte/reactivity';

	let pressed = new SvelteSet<string>();

	function onkeydown(event: KeyboardEvent) {
		if (event.repeat) {
			return;
		}
		keyDown(event.key);
	}

	function keyDown(key: string) {
		pressed.add(key);

		setTimeout(() => {
			pressed.delete(key);
		}, 200);
	}
</script>

<svelte:window {onkeydown} {onkeyup} />
<div class="flex flex-col gap-1">
	{#each keys as row}
		<div class="relative flex gap-1">
			{#each row as keyConfig}
				<Key
					label={keyConfig.label}
					pressed={pressed.has(keyConfig.key) || pressed.has(keyConfig.shiftKey ?? '')}
					onclick={() => {
						keyDown(keyConfig.key);
					}}
					shiftLabel={keyConfig.shiftLabel}
					width={keyConfig.width}
				/>
			{/each}
		</div>
	{/each}
</div>
