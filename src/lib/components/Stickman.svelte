<script lang="ts">
	const frames0 = [' o 	Hey there,', ' o/	Hey there,', ' o|	Hey there,', ' o/	Hey there,'];
	const frames1 = [
		'/|\\	welcome to my website! :D',
		'/| 	welcome to my website! :P',
		'/| 	welcome to my website! :D',
		'/| 	welcome to my website! :P'
	];
	let index = $state(0);

	$effect(() => {
		const interval = setInterval(() => {
			index = (index + 1) % frames0.length;
		}, 500);
		return () => clearInterval(interval);
	});
</script>

<div class="flex flex-col text-left text-sm">
	<pre>{frames0[index]}</pre>
	<pre>{frames1[index]}</pre>
</div>
