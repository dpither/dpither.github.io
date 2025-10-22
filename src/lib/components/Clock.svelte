<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';

	const date = new SvelteDate();
	const formatter = new Intl.DateTimeFormat('en-CA', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	});
	const clockString: string = $derived(formatter.format(date));

	$effect(() => {
		const interval = setInterval(() => {
			date.setTime(Date.now());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<h1 class="font-display text-4xl select-none">
	{#each clockString.split('') as char, i}
		<span class="inline-block w-6 text-center">{char}</span>
	{/each}
</h1>
