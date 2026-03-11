<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/icon.svg';
	import NavTab from '$lib/components/NavTab.svelte';
	import Clock from '$lib/components/Clock.svelte';
	import Date from '$lib/components/Date.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>dpither</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<header
	class="border-border sticky top-0 z-10 flex w-full items-center justify-between border-b-1 bg-black"
>
	<nav class="border-e-border flex border-e-1">
		<NavTab href="/" label="home" />
		<NavTab href="/projects" label="projects" />
	</nav>
	<nav class="border-s-border flex border-s-1">
		<a
			target="_blank"
			href="mailto:dylanpither@gmail.com"
			aria-label="email"
			class="corner-focus flex size-9 items-center justify-center"
			><span class="icon-[mdi--email]" style="width: 20px; height: 20px;"></span></a
		>
		<a
			target="_blank"
			href="https://linkedin.com/in/dylanpither"
			aria-label="linkedin"
			class="corner-focus flex size-9 items-center justify-center"
			><span class="icon-[mdi--linkedin]" style="width: 20px; height: 20px;"></span></a
		>
		<a
			target="_blank"
			href="https://github.com/dpither"
			aria-label="github"
			class="corner-focus flex size-9 items-center justify-center"
			><span class="icon-[mdi--github]" style="width: 20px; height: 20px;"></span></a
		>
	</nav>
</header>
{@render children?.()}
<footer class="border-border sticky bottom-0 z-10 flex w-full justify-end border-t-1 bg-black">
	<div class="border-border flex gap-2 border-s-1 px-2"><Date /><Clock /></div>
</footer>
