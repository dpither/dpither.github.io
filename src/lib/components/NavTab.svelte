<script lang="ts">
	let { href, label, isActive = false } = $props();
</script>

<a
	{href}
	tabindex="0"
	aria-current={isActive ? 'page' : undefined}
	class="corner-focus transition-default hover:text-accent focus-visible:text-accent font-text flex h-8 items-center px-2 text-center font-medium"
	class:text-accent={isActive}
	class:text-muted={!isActive}
	>{label}
</a>
