<script lang="ts">
	import NavTab from '$lib/components/NavTab.svelte';
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
	class="border-border bg-panel sticky top-0 z-10 flex h-12 w-full items-center justify-between border-b px-4"
>
	<nav aria-label="section navigation" class="flex gap-2">
		<NavTab href="/" label="Home" isActive={activeSection == 'hero'} />
		<NavTab href="/#projects" label="Projects" isActive={activeSection == 'projects'} />
	</nav>
	<nav aria-label="external links" class="flex gap-2">
		<a
			href="mailto:dylanpither@gmail.com"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="email (opens in new tab)"
			class="text-fg hocus:text-accent hocus:bg-border border-border hocus:border-accent transition-colors-default box-border flex size-8 items-center justify-center border outline-none"
		>
			<span class="icon-[mdi--email] size-6"></span>
		</a>
		<a
			href="https://linkedin.com/in/dylanpither"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="linkedin (opens in new tab)"
			class="text-fg hocus:text-accent hocus:bg-border border-border hocus:border-accent transition-colors-default box-border flex size-8 items-center justify-center border outline-none"
		>
			<span class="icon-[mdi--linkedin] size-6"></span>
		</a>
		<a
			href="https://github.com/dpither"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="github (opens in new tab)"
			class="text-fg hocus:text-accent hocus:bg-border border-border hocus:border-accent transition-colors-default box-border flex size-8 items-center justify-center border outline-none"
		>
			<span class="icon-[mdi--github] size-6"></span>
		</a>
	</nav>
</header>
