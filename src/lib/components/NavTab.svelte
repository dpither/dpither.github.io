<script lang="ts">
	let { href, label, isActive = false } = $props();
</script>

<a
	{href}
	aria-current={isActive ? 'page' : undefined}
	class="transition-default hocus:text-accent hocus:border-accent font-text hocus:bg-border flex h-8 w-24 items-center justify-center border font-medium outline-none"
	class:text-accent={isActive}
	class:border-accent={isActive}
	class:text-fg={!isActive}
	class:border-border={!isActive}
	>{label}
</a>
