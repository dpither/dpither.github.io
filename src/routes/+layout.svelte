<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MyScrollArea from '$lib/components/MyScrollArea.svelte';

	let { children } = $props();
</script>

<div class="m-auto flex h-screen max-h-180 max-w-7xl flex-col md:p-4">
	<Header />
	<div class="bg-panel border-border flex flex-1 overflow-hidden border-x px-2 pt-2">
		<main class=" bg-bg size-full overflow-hidden">
			<MyScrollArea {children} />
		</main>
	</div>
	<Footer />
</div>
