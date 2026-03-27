<script lang="ts">
	import { cornerBreathe } from '$lib/actions/cornerBreathe';
	import type { Project } from '$lib/data/types';
	import NavIcon from './NavIcon.svelte';
	import BrailleLoader from './BrailleLoader.svelte';

	let { project, i }: { project: Project; i: number } = $props();
	let imgLoaded = $state(false);
</script>

<div use:cornerBreathe class="corner-focus group relative flex w-full flex-col gap-4 p-8">
	<div
		class="border-border relative flex aspect-video w-full items-center justify-center overflow-hidden border-1"
	>
		{#if !imgLoaded}
			<BrailleLoader />
		{/if}
		{#if project.img != ''}
			<img
				src={project.img}
				alt={project.title}
				class="size-full object-cover grayscale-100 transition-all group-hover:grayscale-0"
				class:opacity-0={!imgLoaded}
				class:opacity-100={imgLoaded}
				onload={() => (imgLoaded = true)}
			/>
		{/if}
	</div>

	<div class="flex flex-col gap-1">
		<h3 class="uppercase">{project.title}</h3>
		<div class="flex items-center gap-1">
			{#each project.tags as tag (tag)}
				<p class="border-border border-1 px-2 py-1 text-xs">{tag}</p>
			{/each}
		</div>
		<p>{project.description}</p>
	</div>

	<div class="flex gap-1">
		{#if project.src != undefined}
			<NavIcon href={project.src} label="source code">
				<span class="icon-[mdi--code]" style="width: 20px; height: 20px;"></span>
				<p class="text-xs">Source</p>
			</NavIcon>
		{/if}
		{#if project.site != undefined}
			<NavIcon href={project.site} label="site"
				><span class="icon-[mdi--web]" style="width: 20px; height: 20px;"></span>
				<p class="text-xs">Website</p></NavIcon
			>
		{/if}
	</div>
</div>
