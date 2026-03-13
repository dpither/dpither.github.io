<script lang="ts">
	let { children, href, label } = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	aria-label={label}
	class="corner-focus flex items-center justify-center gap-2 p-2">{@render children?.()}</a
>
