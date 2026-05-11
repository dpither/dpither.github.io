<script lang="ts">
	import NavTab from '$lib/components/NavTab.svelte';
	import NavIcon from '$lib/components/NavIcon.svelte';
	import { onMount } from 'svelte';

	let activeSection = $state('');

	const setActiveSection = () => {
		const sections = document.querySelectorAll('section[id]');
		const headerBottom = document.querySelector('header')?.getBoundingClientRect().bottom ?? 0;
		for (var section of sections) {
			if (section.getBoundingClientRect().bottom > headerBottom * 5) {
				activeSection = section.id;
				break;
			}
		}
	};

	onMount(() => {
		setActiveSection();
	});
</script>

<svelte:window on:scroll={setActiveSection} on:focus={setActiveSection} />
<header
	class="border-border bg-panel sticky top-0 z-10 flex h-12 w-full items-center justify-between border-b-1 ps-2 pe-3 xl:ps-4 xl:pe-5"
>
	<nav aria-label="section navigation" class="flex gap-2">
		<NavTab href="/" label="Home" isActive={activeSection == 'hero'} />
		<NavTab href="/#projects" label="Projects" isActive={activeSection == 'projects'} />
	</nav>
	<nav aria-label="external links" class="flex gap-2">
		<NavIcon href="mailto:dylanpither@gmail.com" label="email">
			<span class="icon-[mdi--email]" style="width: 24px; height: 24px;"></span>
		</NavIcon>
		<NavIcon href="https://linkedin.com/in/dylanpither" label="linkedin"
			><span class="icon-[mdi--linkedin]" style="width: 24px; height: 24px;"></span>
		</NavIcon>
		<NavIcon href="https://github.com/dpither" label="github"
			><span class="icon-[mdi--github]" style="width: 24px; height: 24px;"></span>
		</NavIcon>
	</nav>
</header>
