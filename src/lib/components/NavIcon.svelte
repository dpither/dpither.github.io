<script lang="ts">
	let { children, href, label } = $props();
</script>

<a
	{href}
	tabindex="0"
	target="_blank"
	rel="noopener noreferrer"
	aria-label={label + '(opens in new tab)'}
	class="corner-focus text-muted transition-default hover:text-accent focus-visible:text-accent flex items-center justify-center gap-1 p-1"
	>{@render children?.()}</a
>
