<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/icon.svg';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Dylan Pither</title>
	<link rel="icon" href={favicon} />
</svelte:head>
<Header />
<main class="border-border flex size-full flex-1 flex-col border-b-1">
	{@render children?.()}
</main>

<!-- <footer
	class="border-border sticky bottom-0 z-10 flex w-full items-center justify-between border-t-1 bg-black"
>
	<nav class="border-e-border flex h-full border-e-0">
		<NavTab href="/" label="home" />
		<NavTab href="/projects" label="projects" />
	</nav>
	<nav class="border-s-border flex">
		<NavIcon href="mailto:dylanpither@gmail.com" label="email"
			><span class="icon-[mdi--email]" style="width: 20px; height: 20px;"></span></NavIcon
		>
		<NavIcon href="https://linkedin.com/in/dylanpither" label="linkedin"
			><span class="icon-[mdi--linkedin]" style="width: 20px; height: 20px;"></span></NavIcon
		>
		<NavIcon href="https://github.com/dpither" label="github"
			><span class="icon-[mdi--github]" style="width: 20px; height: 20px;"></span></NavIcon
		>
	</nav>
</footer> -->
