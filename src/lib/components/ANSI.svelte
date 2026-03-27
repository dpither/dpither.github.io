<script lang="ts">
	const colorLine = (text: string) =>
		text.split('').map((char) => ({
			char,
			colour: char == '█' ? 'text-white' : 'text-border'
		}));
	const wideLines = [
		'██████╗ ██╗   ██╗██╗      █████╗ ███╗   ██╗    ██████╗ ██╗████████╗██╗  ██╗███████╗██████╗ ',
		'██╔══██╗╚██╗ ██╔╝██║     ██╔══██╗████╗  ██║    ██╔══██╗██║╚══██╔══╝██║  ██║██╔════╝██╔══██╗',
		'██║  ██║ ╚████╔╝ ██║     ███████║██╔██╗ ██║    ██████╔╝██║   ██║   ███████║█████╗  ██████╔╝',
		'██║  ██║  ╚██╔╝  ██║     ██╔══██║██║╚██╗██║    ██╔═══╝ ██║   ██║   ██╔══██║██╔══╝  ██╔══██╗',
		'██████╔╝   ██║   ███████╗██║  ██║██║ ╚████║    ██║     ██║   ██║   ██║  ██║███████╗██║  ██║',
		'╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝'
	];
	const stackedLines = [
		'██████╗ ██╗   ██╗██╗      █████╗ ███╗   ██╗',
		'██╔══██╗╚██╗ ██╔╝██║     ██╔══██╗████╗  ██║',
		'██║  ██║ ╚████╔╝ ██║     ███████║██╔██╗ ██║',
		'██║  ██║  ╚██╔╝  ██║     ██╔══██║██║╚██╗██║',
		'██████╔╝   ██║   ███████╗██║  ██║██║ ╚████║',
		'╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝',
		'██████╗ ██╗████████╗██╗  ██╗███████╗██████╗ ',
		'██╔══██╗██║╚══██╔══╝██║  ██║██╔════╝██╔══██╗',
		'██████╔╝██║   ██║   ███████║█████╗  ██████╔╝',
		'██╔═══╝ ██║   ██║   ██╔══██║██╔══╝  ██╔══██╗',
		'██║     ██║   ██║   ██║  ██║███████╗██║  ██║',
		'╚═╝     ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝'
	];
</script>

<div class="flex flex-col">
	{#each stackedLines as line, i (i)}
		<pre class="overflow-hidden font-mono">{#each colorLine(line) as { char, colour }, i (i)}<span
					class={colour}>{char}</span
				>{/each}</pre>
	{/each}
</div>

<!-- <div class="flex flex-col md:hidden">
	{#each stackedLines as line, i (i)}
		<pre class="overflow-hidden">{#each colorLine(line) as { char, colour }, i (i)}<span
					class={colour}>{char}</span
				>{/each}</pre>
	{/each}
</div> -->

<style>
	.text-breathe {
		animation: breathe 4s ease-in-out infinite;
	}
	@keyframes breathe {
		0%,
		100% {
			color: var(--color-border);
		}
		50% {
			color: var(--color-muted);
		}
	}
</style>
