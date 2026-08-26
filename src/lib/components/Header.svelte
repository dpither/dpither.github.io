<script lang="ts">
	import { resolve } from '$app/paths';
	import Icon from './Icon.svelte';
	import { page } from '$app/state';
</script>

<header class="border-border flex h-7 border-b text-sm">
	<nav class="flex items-center">
		<a
			href={resolve('/')}
			class="nav-btn transition-colors-default group active w-7"
			aria-label="Home"
			class:active={page.url.pathname === '/'}><Icon size={20} /></a
		>
		<a
			href={resolve(`/projects`)}
			class="nav-btn transition-colors-default px-2"
			class:active={page.url.pathname === '/projects/'}>Projects</a
		>
		<a
			href={resolve(`/contact`)}
			class="nav-btn transition-colors-default px-2"
			class:active={page.url.pathname === '/contact/'}>Contact</a
		>
	</nav>
</header>
