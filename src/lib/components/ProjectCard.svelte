<script lang="ts">
	import type { Project } from '$lib/data/types';
	import Loader from './Loader.svelte';

	let { project }: { project: Project } = $props();
	let imgLoaded = $state(false);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<div
	class=" group border-border transition-colors-default hover:border-accent bg-bg relative w-full border text-sm lg:text-base"
>
	<div
		class="border-border transition-colors-default group-hover:border-accent bg-panel flex h-10 w-full items-center justify-between border-b"
	>
		<p class="group-hover:text-accent transition-colors-default ps-4 font-medium">
			{project.title}
		</p>
		<div class="flex gap-1 py-2 pe-4">
			{#if project?.src}
				<a
					href={project.src}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="source code (opens in new tab)"
					class="text-fg hocus:text-accent hocus:bg-border border-border hocus:border-accent transition-colors-default box-border flex size-6 items-center justify-center border outline-none"
					><span class="icon-[mdi--code] size-4"></span></a
				>
			{/if}
			{#if project?.site}
				<a
					href={project.site}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="site (opens in new tab)"
					class="text-fg hocus:text-accent hocus:bg-border border-border hocus:border-accent transition-colors-default box-border flex size-6 items-center justify-center border outline-none"
					><span class="icon-[mdi--web] size-4"></span></a
				>
			{/if}
		</div>
	</div>
	<div class="flex flex-col gap-4 p-4">
		<div class="relative flex aspect-video w-full items-center justify-center overflow-hidden">
			{#if !imgLoaded}
				<Loader />
			{/if}
			{#if project.img}
				<enhanced:img
					src={project.img}
					alt={project.title}
					class="transition-colors-default size-full object-cover grayscale-100 group-hover:grayscale-0"
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
						class="transition-colors-default border-border text-muted group-hover:text-fg border px-2 py-1 text-xs"
					>
						{tag}
					</p>
				{/each}
			</div>
			<p class="transition-colors-default group-hover:text-accent">
				{project.description}
			</p>
		</div>
	</div>
</div>
