<script lang="ts">
	const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
	let index = $state(0);

	$effect(() => {
		const interval = setInterval(() => {
			index = (index + 1) % frames.length;
		}, 100);
		return () => clearInterval(interval);
	});
</script>

<p class="absolute">{frames[index]}</p>
