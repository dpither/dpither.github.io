<script lang="ts">
	import type { Project } from '$lib/data/types';
	import NavIcon from './NavIcon.svelte';
	import BrailleLoader from './BrailleLoader.svelte';

	let { project, i }: { project: Project; i: number } = $props();
	let imgLoaded = $state(false);
</script>

<div
	class=" group border-border transition-default hover:border-accent bg-panel relative w-full border-1 text-sm lg:text-base"
>
	<div
		class="border-border transition-default group-hover:border-accent flex w-full items-center justify-between border-b-1"
	>
		<p class="group-hover:text-accent transition-default px-4 py-2 font-medium">
			{project.title}
		</p>
		<div class="flex gap-1 py-2 pe-3">
			{#if project.src != undefined}
				<NavIcon href={project.src} label="source code">
					<span class="icon-[mdi--code]" style="width: 16px; height: 16px;"></span>
				</NavIcon>
			{/if}
			{#if project.site != undefined}
				<NavIcon href={project.site} label="site"
					><span class="icon-[mdi--web]" style="width: 16px; height: 16px;"></span>
				</NavIcon>
			{/if}
		</div>
	</div>
	<div class="flex flex-col gap-4 p-4">
		<div class="relative flex aspect-video w-full items-center justify-center overflow-hidden">
			{#if !imgLoaded}
				<BrailleLoader />
			{/if}
			{#if project.img}
				<enhanced:img
					src={project.img}
					alt={project.title}
					class="transition-default size-full object-cover grayscale-100 group-hover:grayscale-0"
					class:opacity-0={!imgLoaded}
					class:opacity-100={imgLoaded}
					onload={() => (imgLoaded = true)}
				/>
			{/if}
		</div>
		<div class="flex flex-col gap-2">
			<div class="flex items-center gap-2">
				{#each project.tags as tag (tag)}
					<p
						class="transition-default border-border text-muted group-hover:text-fg border-1 px-2 py-1 text-xs"
					>
						{tag}
					</p>
				{/each}
			</div>
			<p class="transition-default group-hover:text-accent">
				{project.description}
			</p>
		</div>
	</div>
</div>
