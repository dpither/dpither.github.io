<script>
	import { page } from '$app/state';

	let { href, label } = $props();
	let isActive = $derived(page.url.pathname === href);
</script>

<a
	{href}
	aria-current={isActive ? 'page' : undefined}
	class="font-display corner-focus flex items-center px-3 text-center uppercase select-none
	{isActive ? 'bg-white text-black' : 'text-white'}">{label}</a
>
