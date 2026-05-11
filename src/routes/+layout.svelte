<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/icon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Dylan Pither</title>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<meta
		name="description"
		content="Hi, I'm Dylan Pither, a UBC Computer Engineering grad based in Vancouver. Checkout my projects and how to get in touch."
	/>
</svelte:head>

<Header />
<main class="border-border m-auto flex max-w-7xl flex-col">
	{@render children?.()}
</main>
<Footer />
