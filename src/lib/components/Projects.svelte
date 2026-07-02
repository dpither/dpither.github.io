<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<section id="projects" class="flex scroll-mt-12 flex-col gap-4 py-8">
	<h1 class="text-accent w-full px-4">/PROJECTS</h1>
	<div class="flex justify-center">
		<div class="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 xl:grid-cols-3">
			{#each projects as project (project.id)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
