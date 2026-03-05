<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/icon.svg';
	import NavTab from '$lib/components/NavTab.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>dpither</title>
	<link rel="icon" href={favicon} />
</svelte:head>
<header class="flex border-b-1 border-white/30">
	<nav class="flex divide-x-1 divide-y-0 divide-white/30 border-e-1 border-e-white/30">
		<NavTab href="/" label="home" />
		<NavTab href="/about" label="about" />
		<NavTab href="/projects" label="projects" />
		<NavTab href="/contact" label="contact" />
	</nav>
</header>

{@render children?.()}
