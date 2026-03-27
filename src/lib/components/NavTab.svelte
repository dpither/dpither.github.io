<script lang="ts">
	import { cornerBreathe } from '$lib/actions/cornerBreathe';

	let { href, label, isActive = false } = $props();
</script>

<a
	use:cornerBreathe
	{href}
	aria-current={isActive ? 'page' : undefined}
	class="font-display corner-focus flex h-8 items-center px-3 text-center font-medium uppercase transition-all select-none
	{isActive ? ' bg-white text-black' : 'text-white'}">{label}</a
>
