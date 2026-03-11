<script lang="ts">
	import { onMount } from 'svelte';
	import { SvelteDate } from 'svelte/reactivity';

	const time = new SvelteDate();
	const timeFormatter = new Intl.DateTimeFormat('en-CA', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	});
	const clockString: string[] = $derived(timeFormatter.format(time).split(':'));

	onMount(() => {
		const timeInterval = setInterval(() => {
			time.setTime(Date.now());
		}, 1000);
		return () => clearInterval(timeInterval);
	});
</script>

<div class="font-display flex text-sm select-none">
	{#each clockString as pair, i (i)}
		<span class="w-2.25 text-center">{pair[0]}</span>
		<span class="w-2.25 text-center">{pair[1]}</span>
		{#if i < clockString.length - 1}
			<span>:</span>
		{/if}
	{/each}
</div>
