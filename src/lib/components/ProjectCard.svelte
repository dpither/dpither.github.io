<script lang="ts">
	import type { Project } from '$lib/data/types';
	import NavIcon from './NavIcon.svelte';

	let { project }: { project: Project } = $props();
</script>

<div class="corner-focus flex max-w-lg min-w-80 flex-col gap-2 p-4">
	<img src={project.img} alt="" />

	<div class="flex flex-col gap-2 md:flex-row md:items-center">
		<h3 class="uppercase">{project.title}</h3>
		<div class="flex gap-1">
			{#each project.tags as tag (tag)}
				<p class="border-border border-1 px-2 py-1 text-xs">{tag}</p>
			{/each}
		</div>
	</div>
	<p>{project.description}</p>
	<div class="flex">
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
