<script lang="ts">
	import { onMount } from 'svelte';

	const headFrames = [' o ', ' o/', ' o|', ' o/'];
	const bodyFrames = ['/|\\', '/| ', '/| ', '/| '];
	const emojiFrames = [':D', ':P', ':D', ':P'];
	const arrowFrames = ['▼', '▼', '▽', '▽'];
	const blockName = [
		'██████╗ ██╗   ██╗██╗      █████╗ ███╗   ██╗ ',
		'██╔══██╗╚██╗ ██╔╝██║     ██╔══██╗████╗  ██║ ',
		'██║  ██║ ╚████╔╝ ██║     ███████║██╔██╗ ██║ ',
		'██║  ██║  ╚██╔╝  ██║     ██╔══██║██║╚██╗██║ ',
		'██████╔╝   ██║   ███████╗██║  ██║██║ ╚████║ ',
		'╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ',
		'██████╗ ██╗████████╗██╗  ██╗███████╗██████╗ ',
		'██╔══██╗██║╚══██╔══╝██║  ██║██╔════╝██╔══██╗',
		'██████╔╝██║   ██║   ███████║█████╗  ██████╔╝',
		'██╔═══╝ ██║   ██║   ██╔══██║██╔══╝  ██╔══██╗',
		'██║     ██║   ██║   ██║  ██║███████╗██║  ██║',
		'╚═╝     ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝'
	];

	let index = $state(0);
	let isStacked = $state(false);

	$effect(() => {
		const interval = setInterval(() => {
			index = (index + 1) % headFrames.length;
		}, 500);
		return () => clearInterval(interval);
	});

	const lineDelay = 10;
	const charDelay = 10;
	const blockWidth = blockName[0].length;
	const blockHeight = blockName.length;

	onMount(() => {
		const mediaQuery = window.matchMedia('(width >= 1024px)');

		function updateStacked(e: MediaQueryListEvent) {
			isStacked = !e.matches;
		}
		isStacked = !mediaQuery.matches;
		mediaQuery.addEventListener('change', updateStacked);

		return () => {
			mediaQuery.removeEventListener('change', updateStacked);
		};
	});
</script>

<section
	id="hero"
	class="border-border relative flex h-[calc(100vh-48px)] flex-col items-center justify-center gap-3 border-b-1 md:flex-row"
>
	<h2
		class="fade-in text-accent absolute top-0 w-full px-4 pt-8"
		style="animation-delay: {(isStacked
			? (blockHeight + 12) * lineDelay
			: 12 * lineDelay + blockWidth) * charDelay}ms;
			animation-duration: calc(var(--default-transition-duration) * 4)"
	>
		// HOME
	</h2>

	<div class="flex flex-col">
		{#each blockName as line, lineIndex (lineIndex)}
			<pre class="overflow-hidden">{#each line as char, charIndex (charIndex)}<span
						class="slide-in {char == '█' ? 'text-accent' : 'text-border'}"
						style="animation-delay: {(lineIndex * lineDelay + charIndex) * charDelay}ms"
						>{char}</span
					>{/each}</pre>
		{/each}
	</div>

	<div class="flex flex-col">
		<pre><span
				class="slide-in text-muted"
				style="animation-delay: {(isStacked
					? (blockHeight + 0) * lineDelay
					: 0 * lineDelay + blockWidth) * charDelay}ms"
				>Location    </span><span
				class="slide-in text-accent"
				style="animation-delay: {(isStacked
					? (blockHeight + 0) * lineDelay
					: 0 * lineDelay + blockWidth) * charDelay}ms">Vancouver (Richmond), BC, Canada</span
			>
<span
				class="slide-in text-muted"
				style="animation-delay: {(isStacked
					? (blockHeight + 1) * lineDelay
					: 1 * lineDelay + blockWidth) * charDelay}ms"
				>Education     </span><span
				class="slide-in text-accent"
				style="animation-delay: {(isStacked
					? (blockHeight + 1) * lineDelay
					: 1 * lineDelay + blockWidth) * charDelay}ms">Computer Engineering @ UBC '24</span
			>
<span
				class="slide-in text-muted"
				style="animation-delay: {(isStacked
					? (blockHeight + 2) * lineDelay
					: 2 * lineDelay + blockWidth) * charDelay}ms"
				>Links                  </span><span
				class="slide-in"
				style="animation-delay: {(isStacked
					? (blockHeight + 2) * lineDelay
					: 2 * lineDelay + blockWidth) * charDelay}ms"
				><a
					href="mailto:dylanpither@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					class="link">Email</a
				> <a
					href="https://linkedin.com/in/dylanpither"
					target="_blank"
					rel="noopener noreferrer"
					class="link">LinkedIn</a
				> <a
					href="https://github.com/dpither"
					target="_blank"
					rel="noopener noreferrer"
					class="link">Github</a
				></span
			>
<span
				class="slide-in text-border"
				style="animation-delay: {(isStacked
					? (blockHeight + 3) * lineDelay
					: 3 * lineDelay + blockWidth) * charDelay}ms"
				>--------------------------------------------</span
			>
<span
				class="slide-in"
				style="animation-delay: {(isStacked
					? (blockHeight + 4) * lineDelay
					: 4 * lineDelay + blockWidth) * charDelay}ms"
				>Hey there, I'm Dylan. Welcome to my site!<span
					class="slide-in text-muted"
					style="animation-delay: {(isStacked
						? (blockHeight + 4) * lineDelay
						: 4 * lineDelay + blockWidth) * charDelay}ms">{headFrames[index]}</span
				></span
			>
<span
				class="slide-in text-muted"
				style="animation-delay: {(isStacked
					? (blockHeight + 5) * lineDelay
					: 5 * lineDelay + blockWidth) *
					charDelay}ms">                                         {bodyFrames[index]}</span
			>
<span
				class="slide-in"
				style="animation-delay: {(isStacked
					? (blockHeight + 6) * lineDelay
					: 6 * lineDelay + blockWidth) * charDelay}ms"
				>I like building whatever sounds interesting</span
			>
<span
				class="slide-in"
				style="animation-delay: {(isStacked
					? (blockHeight + 7) * lineDelay
					: 7 * lineDelay + blockWidth) * charDelay}ms">and understanding how things work.</span
			>
<span
				class="slide-in"
				style="animation-delay: {(isStacked
					? (blockHeight + 8) * lineDelay
					: 8 * lineDelay + blockWidth) * charDelay}ms"></span>
<span
				class="slide-in"
				style="animation-delay: {(isStacked
					? (blockHeight + 9) * lineDelay
					: 9 * lineDelay + blockWidth) * charDelay}ms"></span>
<span
				class="slide-in text-muted"
				style="animation-delay: {(isStacked
					? (blockHeight + 10) * lineDelay
					: 10 * lineDelay + blockWidth) * charDelay}ms"
				>Checkout what I've built in the past below,</span
			>
<span
				class="slide-in text-muted"
				style="animation-delay: {(isStacked
					? (blockHeight + 11) * lineDelay
					: 11 * lineDelay + blockWidth) * charDelay}ms"
				>more content coming soon™. {emojiFrames[index]}</span
			>
</pre>
	</div>

	<div class="absolute bottom-4">
		<pre
			class="fade-in"
			style="animation-delay: {(isStacked
				? (blockHeight + 12) * lineDelay
				: 12 * lineDelay + blockWidth) * charDelay}ms;
			animation-duration: calc(var(--default-transition-duration) * 4)">{arrowFrames[index]}</pre>
	</div>
</section>

<style>
</style>
