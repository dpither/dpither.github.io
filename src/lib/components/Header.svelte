<script lang="ts">
	import NavTab from '$lib/components/NavTab.svelte';
	import NavIcon from '$lib/components/NavIcon.svelte';
	import { onMount } from 'svelte';

	let activeSection = $state('');

	const setActiveSection = () => {
		const sections = document.querySelectorAll('section[id]');
		const headerBottom = document.querySelector('header')?.getBoundingClientRect().bottom ?? 0;

		for (var section of sections) {
			if (section.getBoundingClientRect().bottom > headerBottom) {
				activeSection = section.id;
				break;
			}
		}
	};
	onMount(() => {
		setActiveSection();
	});
</script>

<svelte:window on:scroll={setActiveSection} />
<header
	class="border-border sticky top-0 z-10 flex h-12 w-full items-center justify-between border-b-1 bg-black px-2"
>
	<nav class="flex gap-2">
		<NavTab href="/" label="home" isActive={activeSection == 'home'} />
		<NavTab href="/#projects" label="projects" isActive={activeSection == 'projects'} />
	</nav>
	<nav class="flex gap-2">
		<NavIcon href="mailto:dylanpither@gmail.com" label="email"
			><span class="icon-[mdi--email]" style="width: 24px; height: 24px;"></span></NavIcon
		>
		<NavIcon href="https://linkedin.com/in/dylanpither" label="linkedin"
			><span class="icon-[mdi--linkedin]" style="width: 24px; height: 24px;"></span></NavIcon
		>
		<NavIcon href="https://github.com/dpither" label="github"
			><span class="icon-[mdi--github]" style="width: 24px; height: 24px;"></span></NavIcon
		>
	</nav>
</header>

<style>
	header {
		animation: slideDown 500ms ease-out forwards;
	}
	@keyframes slideDown {
		from {
			transform: translateY(-100%);
			opacity: 0;
		}

		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
