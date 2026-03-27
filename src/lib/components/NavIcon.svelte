<script lang="ts">
	import { cornerBreathe } from '$lib/actions/cornerBreathe';

	let { children, href, label } = $props();
</script>

<a
	use:cornerBreathe
	{href}
	target="_blank"
	rel="noopener noreferrer"
	aria-label={label}
	class="corner-focus flex items-center justify-center gap-1 p-1">{@render children?.()}</a
>
