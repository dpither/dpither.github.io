<script lang="ts">
	import Clock from './Clock.svelte';
</script>

<footer
	class="bg-panel border-border text-muted flex justify-between border-x border-b p-1 text-xs"
>
	<div class="flex flex-1">
		<a
			href="https://github.com/dpither/dpither.github.io"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="source code (opens in new tab)"
			class="link"
		>
			v1.1
		</a>
	</div>
	<span class="flex items-center gap-1">
		<span class="icon-[material-symbols--copyright-outline-sharp] size-3"></span>Dylan Pither
	</span>

	<div class="flex flex-1 items-center justify-end gap-1"><Clock /></div>
</footer>
