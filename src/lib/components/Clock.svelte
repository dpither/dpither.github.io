<script lang="ts">
	import { onMount } from 'svelte';
	import { SvelteDate } from 'svelte/reactivity';

	const time = new SvelteDate();
	const timeFormatter = new Intl.DateTimeFormat('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
		timeZone: 'America/Vancouver'
	});
	const clockString: string = $derived(timeFormatter.format(time));

	onMount(() => {
		const timeInterval = setInterval(() => {
			time.setTime(Date.now());
		}, 1000);
		return () => clearInterval(timeInterval);
	});
</script>

<div>
	{clockString}
</div>
