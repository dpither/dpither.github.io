<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
	import { fade } from 'svelte/transition';
</script>

<main>
	<div class=" divide-border flex flex-col divide-x-0 divide-y-1" in:fade>
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
</main>
