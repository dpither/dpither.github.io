<script lang="ts">
	// const FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
	const FRAMES = ['/', '-', '\\', '|'];

	let { loading = $bindable(true) } = $props();
	const frameDelay = 160;
	const duration = frameDelay * FRAMES.length;
</script>

{#if loading}
	<span class="absolute inline-flex items-center">
		<span class="relative inline-block h-[1.2em] w-[1ch] font-mono">
			{#each FRAMES as frame, i (i)}
				<span class="frame" style="animation-delay: {i * frameDelay}ms; --duration:{duration}ms"
					>{frame}</span
				>
			{/each}
		</span>
	</span>
{/if}

<style>
	.frame {
		position: absolute;
		inset: 0;
		opacity: 0;
		animation: braille-frame var(--duration) steps(1) infinite;
	}
	@keyframes braille-frame {
		0%,
		25% {
			opacity: 1;
		}
		25%,
		100% {
			opacity: 0;
		}
	}
</style>
