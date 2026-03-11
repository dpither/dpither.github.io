<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';

	const date = new SvelteDate();
	const dateFormatter = new Intl.DateTimeFormat('en-CA', {
		month: 'short',
		day: '2-digit'
	});
</script>

<div class="font-display flex text-sm select-none">
	{dateFormatter.format(date).toUpperCase()}
	{date.getFullYear()}
</div>
