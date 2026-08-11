<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';
	import { page } from '$app/state';

	let activeSection = $state(page.url.hash ? page.url.hash : '#hero');

	const setActiveSection = () => {
		const sections = document.querySelectorAll('section[id]');
		const headerBottom = document.querySelector('header')?.getBoundingClientRect().bottom ?? 0;
		for (var section of sections) {
			if (section.getBoundingClientRect().bottom > headerBottom * 5) {
				activeSection = '#' + section.id;
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
	class="border-border bg-panel sticky top-0 z-10 flex h-12 w-full items-center justify-between border-b px-4"
	// class="border-border bg-panel fixed bottom-0 z-10 flex h-12 w-full items-center justify-between border-t px-4"
>
	<nav aria-label="section navigation" class="flex gap-2 font-medium">
		<a
			href={resolve('/')}
			aria-current={activeSection == '#hero' ? 'page' : undefined}
			class="nav group transition-colors-default hocus:text-accent hocus:border-accent"
			class:text-accent={activeSection == '#hero'}
			// class:border-accent={activeSection == '#hero'}
			class:text-muted={!(activeSection == '#hero')}
			// class:border-border={!(activeSection == '#hero')}
			><Icon />
		</a>
		<a
			href={resolve('/#projects')}
			aria-current={activeSection == '#projects' ? 'page' : undefined}
			class="nav group transition-colors-default hocus:text-accent hocus:border-accent px-2"
			class:text-accent={activeSection == '#projects'}
			// class:border-accent={activeSection == '#projects'}
			class:text-muted={!(activeSection == '#projects')}
			// class:border-border={!(activeSection == '#projects')}
			>Projects
		</a>
	</nav>
</header>
