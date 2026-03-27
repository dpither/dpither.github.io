<script>
	import ANSI from '$lib/components/ANSI.svelte';
	import Stickman from '$lib/components/Stickman.svelte';
	import { fade } from 'svelte/transition';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
	import { onMount, tick } from 'svelte';
	import { circIn } from 'svelte/easing';
	import { cornerBreathe } from '$lib/actions/cornerBreathe';
	onMount(async () => {
		await tick();
	});
</script>

<section id="home" class="flex flex-col items-center justify-center gap-3 p-6 md:flex-row">
	<ANSI />
	<div class="flex flex-col">
		<div class="flex">
			<Stickman />
		</div>
		<!-- <pre>-------------------------------------</pre> -->
		<pre>
─────────────────────────────────────
Location: Vancouver, BC
Education: UBC Computer Engineering Graduate






		</pre>
	</div>
</section>

<section id="projects">
	<div class="border-border xl:grid-cols- grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
		{#each projects as project, i (project.id)}
			<!-- {#if visible} -->
			<div
				class="border-border flex border-b-1 last:border-b-0 md:border-r-1 md:even:border-r-0 md:nth-last-2:border-b-0 xl:even:border-r-1 xl:nth-[3n]:border-r-0"
			>
				<ProjectCard {project} {i} />
			</div>
			<!-- <section>
						<ProjectCard {project} {i} />
					</section> -->
			<!-- {/if} -->
		{/each}
	</div>
</section>
