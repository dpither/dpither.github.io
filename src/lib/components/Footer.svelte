<script lang="ts">
	import NavIcon from './NavIcon.svelte';
</script>

<footer
	class="text-muted border-border bg-panel flex h-12 w-full items-center justify-between border-t-1 ps-4 pe-3 text-xs xl:ps-6 xl:pe-5"
>
	<div class="hidden md:flex md:flex-1"></div>
	<p>
		Made with &lt3 by <a href="https://dpither.com" rel="noopener noreferrer" class="link"
			>Dylan Pither</a
		>
	</p>
	<div class="flex items-center gap-1 md:flex-1 md:justify-end">
		<p>V1.0</p>
		<NavIcon href="https://github.com/dpither/dpither.github.io" label="source code">
			<span class="icon-[mdi--code]" style="width: 16px; height: 16px;"></span>
		</NavIcon>
	</div>
</footer>
