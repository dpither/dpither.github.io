<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Contact - Dylan Pither"
	description="How to get in touch with me."
	url="https://dpither.com/contact"
/>

<section id="contact" class="flex flex-col px-4">
	<h2 class="border-border border-b py-8">Contact</h2>
	<div class="flex flex-col items-start gap-4 py-4">
		<a
			href="mailto:contact@dpither.com"
			target="_blank"
			rel="noopener noreferrer external"
			class="link flex items-center gap-2"
			><span class="icon-[material-symbols--mail-sharp] size-5"></span>Email</a
		>
		<a
			href="https://linkedin.com/in/dylanpither"
			target="_blank"
			rel="noopener noreferrer external"
			class="link flex items-center gap-2"
			><span class="icon-[mdi--linkedin] size-5"></span>LinkedIn</a
		>
		<a
			href="https://github.com/dpither"
			target="_blank"
			rel="noopener noreferrer external"
			class="link flex items-center gap-2"><span class="icon-[mdi--github] size-5"></span>Github</a
		>
	</div>
</section>
