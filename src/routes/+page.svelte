<script>
	import rawWave from '$lib/assets/wave.txt?raw';
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';

	const WAVE_DELAY = 500;
	const waveFrames = rawWave.split(',\r\n');
	let waveIndex = $state(0);

	$effect(() => {
		const interval = setInterval(() => {
			waveIndex = (waveIndex + 1) % waveFrames.length;
		}, WAVE_DELAY);
		return () => clearInterval(interval);
	});
</script>

<Seo
	title="Dylan Pither"
	description="I'm Dylan Pither, a UBC computer engineering grad from Vancouver. Checkout my corner of the internet where I share my projects and more."
	image="https://dpither.com/og/home.png"
	url="https://dpither.com"
/>

<section
	id="home"
	class="border-border relative flex h-full flex-col items-center justify-center gap-4"
>
	<div
		class="border-border hover:border-accent group transition-colors-default relative mx-4 flex max-w-sm min-w-64 border sm:max-w-md"
	>
		<div class="bg-bg relative z-1 flex flex-col gap-4 p-4">
			<p class="text-muted text-sm sm:text-base">Hey there, I'm</p>
			<div class="flex flex-col gap-1">
				<h1>Dylan Pither<span class="text-fg text-base">.</span></h1>
				<div class="text-base sm:text-lg">
					<p>
						A <span class="text-accent">computer engineering</span> grad from&nbsp<span
							class="text-accent">Vancouver</span
						>.
					</p>
					<p></p>
				</div>
			</div>
			<p class="text-muted text-sm sm:text-base">
				Welcome to my corner of the internet where I share my <a
					href={resolve(`/projects`)}
					class="link">projects</a
				> and more. Enjoy your stay! :D
			</p>
		</div>
		<svg
			viewBox="0 0 16 8"
			width="24"
			height="12"
			class="fill-bg stroke-border group-hover:stroke-accent transition-colors-default absolute -bottom-2.75 left-[calc(50%-12px)] overflow-visible"
		>
			<path d="M0,0 L8,8 L16,0 Z" stroke="none" />
			<path d="M0,0 L8,8 L16,0" fill="none" stroke-width="1" vector-effect="non-scaling-stroke" />
		</svg>
	</div>
	<pre class="text-accent text-lg leading-6">
{waveFrames[waveIndex]}
</pre>
</section>
