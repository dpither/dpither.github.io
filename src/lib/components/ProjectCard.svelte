<script lang="ts">
	import type { Project } from '$lib/data/types';
	import Loader from './Loader.svelte';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
	let imgLoading = $state(true);
</script>

<div
	class="transition-colors-default border-border bg-bg group hover:border-accent flex size-full max-w-120 min-w-70 flex-col gap-3 md:p-4"
>
	<div
		class="transition-colors-default border-border group-hover:border-accent relative flex aspect-video items-center justify-center overflow-hidden border"
	>
		<div class="absolute">
			<Loader bind:loading={imgLoading} />
		</div>
		<enhanced:img
			src={project.img}
			alt={project.title}
			class="transition-img animate-fade-in text-bg object-cover grayscale-100 group-hover:grayscale-0"
			class:opacity-0={imgLoading}
			class:opacity-100={!imgLoading}
			onload={() => (imgLoading = false)}
		/>
	</div>
	<div class="border-border flex w-full flex-1 flex-col gap-2 border-b pb-1.5">
		<h3 class="transition-colors-default group-hover:text-accent">
			{project.title}
		</h3>
		<div class="flex gap-1">
			{#each project.tags as tag (tag)}
				<p class=" text-muted border-border border px-1 py-0.5 text-xs font-light">
					{tag}
				</p>
			{/each}
		</div>
		<p class="flex text-sm">{project.description}</p>
	</div>
	<div class="flex gap-2">
		{#each project.links as link (link)}
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer external"
				aria-label="{link.ariaLabel} (opens in new tab)"
				class="btn transition-colors-default group-hover:text-accent px-2 text-xs leading-4 capitalize"
				>{link.label}<span class="icon-[material-symbols--arrow-outward-sharp] size-4"></span></a
			>
		{/each}
	</div>
</div>

<style>
	.transition-img {
		transition-property: filter, opacity;
		transition-timing-function: var(--ease-default);
		transition-duration: var(--default-transition-duration);
	}
</style>
