<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<Header />
<main class="m-auto flex min-h-[calc(100vh-96px)] max-w-7xl flex-col">
	{@render children?.()}
</main>
<Footer />
