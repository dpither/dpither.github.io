<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
	import { onMount, tick } from 'svelte';
	import { fade } from 'svelte/transition';
	import { circIn } from 'svelte/easing';

	let visible = false;
	onMount(async () => {
		await tick();
		visible = true;
	});
</script>

<div>
	<div class="border-border grid grid-cols-1 md:grid-cols-2">
		{#each projects as project, i (project.id)}
			{#if visible}
				<section
					class="border-border flex border-b-1 last:border-b-0 md:odd:border-r-1 md:nth-last-2:border-b-0"
					in:fade={{ delay: 200 * i, easing: circIn }}
				>
					<ProjectCard {project} {i} />
				</section>
				<!-- <section>
						<ProjectCard {project} {i} />
					</section> -->
			{/if}
		{/each}
	</div>
</div>
