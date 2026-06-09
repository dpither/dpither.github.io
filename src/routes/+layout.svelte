<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/icon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';
	let { children } = $props();
</script>

<svelte:head>
	<title>Dylan Pither</title>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="canonical" href="https://dpither.com{page.url.pathname}" />
</svelte:head>

<Header />
<main class="m-auto flex max-w-7xl flex-col">
	{@render children?.()}
</main>
<Footer />
