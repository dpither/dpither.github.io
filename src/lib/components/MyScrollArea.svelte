<script lang="ts">
	import { ScrollArea } from 'bits-ui';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		orientation?: 'vertical' | 'horizontal' | 'both';
	}

	let { children, orientation = 'vertical' }: Props = $props();
</script>

{#snippet Scrollbar({ orientation }: { orientation: 'vertical' | 'horizontal' })}
	<ScrollArea.Scrollbar
		{orientation}
		class="{orientation === 'vertical' ? ' border-l' : 'border-t'} border-border bg-bg w-2"
	>
		<ScrollArea.Thumb class="transition-colors-default bg-border hover:bg-accent w-0.5" />
	</ScrollArea.Scrollbar>
{/snippet}

<ScrollArea.Root type="auto" class="size-full overflow-hidden">
	<ScrollArea.Viewport class="border-border focus-visible:border-t-accent h-full border">
		{@render children?.()}
	</ScrollArea.Viewport>
	{#if orientation === 'vertical' || orientation === 'both'}
		{@render Scrollbar({ orientation: 'vertical' })}
	{/if}
	{#if orientation === 'horizontal' || orientation === 'both'}
		{@render Scrollbar({ orientation: 'horizontal' })}
	{/if}
</ScrollArea.Root>
