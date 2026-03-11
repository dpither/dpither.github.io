<script>
	import { page } from '$app/state';

	let { href, label } = $props();
	let isActive = $derived(page.url.pathname === href);
</script>

<a
	{href}
	class="font-display corner-focus flex h-9 items-center px-3 text-center text-sm uppercase
	{isActive ? 'bg-white text-black' : 'text-white'}"
	aria-current={isActive ? 'page' : undefined}>{label}</a
>
