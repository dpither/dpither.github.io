<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { projects } from '$lib/data/projects';
</script>

<Seo
	title="Projects - Dylan Pither"
	description="Things I have built from across the stack, with a variety technologies."
	url="https://dpither.com/projects"
/>

<section id="projects" class="flex flex-col px-4">
	<h2 class="border-border border-b py-8">Projects</h2>
	<div class="flex justify-center py-4">
		<!-- <div class="grid grid-cols-1 justify-center gap-4 px-4 md:grid-cols-2 lg:grid-cols-3"> -->
		<div class="flex flex-wrap justify-center gap-8 md:gap-4">
			{#each projects as project (project.id)}
				<div
					class="flex basis-full justify-center md:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.667rem)]"
				>
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</section>
